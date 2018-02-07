using RiskManagement.Data.UnitOfWork;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Action")]
    public class ActionController : APIBaseController
    {

        public ActionController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._actionRepository = new ActionRepository(unitOfWork);
        }

        private IActionRepository _actionRepository = null;


        public ActionListViewModel GetAllActionData()
        {
            ActionFilerModel filterModel = new ActionFilerModel();
            filterModel.LoggedInUserID = 1;
            return _actionRepository.GetAllActionData(filterModel, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public ActionListViewModel GetAllActionDataV1(int PageNo = 1, int PageSize = 10, string sortColumn = "Title", string sortOrder = "asc"
            , string titleFilter = "", string dueDateFilter = "", string statusFilter = "",
            string organizerFilter = ""
            )
        {

            return _actionRepository.GetAllActionData(PageNo, PageSize, sortColumn, sortOrder
                , titleFilter, dueDateFilter, statusFilter, organizerFilter, base.UserId, base.OrganizationId
                );
        }

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        [HttpGet]
        // DELETE api/<controller>/5
        public string Delete(int id)
        {
            this._actionRepository.Delete(id,base.UserId,base.OrganizationId);
            return "Action deleted successfully.";
        }
        [HttpPost]
        public async Task<HttpResponseMessage> SaveActionTaken()
        {
            ActionTakenUploadModel model = new ActionTakenUploadModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.ActionTaken = formData["action"];
            model.ActionId = Convert.ToInt32(formData["ActionId"]);
            model.IsReportedAction = formData["IsReportedAction"] == "true" ? true : false;
            //access files  
            IList<HttpContent> files = provider.Files;
            if (files != null && files.Count > 0)
            {
                HttpContent file1 = files[0];
                var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');

                model.fileName = thisFileName;

                string filename = String.Empty;
                Stream input = await file1.ReadAsStreamAsync();
                string directoryName = String.Empty;
                string URL = String.Empty;
                //string tempDocUrl = WebConfigurationManager.AppSettings["DocsUrl"];

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "ActionDocuments");
                filename = System.IO.Path.Combine(directoryName, thisFileName);

                string ext = Path.GetExtension(filename);
                filename = System.IO.Path.Combine(directoryName, model.ActionId + ext);
                //Deletion exists file  
                if (File.Exists(filename))
                {
                    File.Delete(filename);
                }
                Directory.CreateDirectory(@directoryName);
                using (Stream file = File.Create(filename))
                {
                    input.CopyTo(file);
                    //close file  
                    file.Close();
                }
                model.FilePath = "~/ActionDocuments/" + model.ActionId + ext;
            }
            this._actionRepository.UpdateActionTakenData(model, base.UserId, base.OrganizationId);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;


            // return "";
        }

        public HttpResponseMessage GetActionFile(string fileName)
        {
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, "ActionDocuments");
            FileProvider fileProvider = new FileProvider(directoryName);
            if (!fileProvider.Exists(fileName))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }

            FileStream fileStream = fileProvider.Open(fileName);
            var response = new HttpResponseMessage();
            response.Content = new StreamContent(fileStream);
            response.Content.Headers.ContentDisposition
                = new ContentDispositionHeaderValue("attachment");
            response.Content.Headers.ContentDisposition.FileName = fileName;
            response.Content.Headers.ContentType
                = new MediaTypeHeaderValue("application/octet-stream");
            response.Content.Headers.ContentLength
                    = fileProvider.GetLength(fileName);
            return response;
        }
    }
    public class CustomMultipartFormDataStreamProvider : MultipartFormDataStreamProvider
    {
        public CustomMultipartFormDataStreamProvider(string path) : base(path) { }

        public override string GetLocalFileName(HttpContentHeaders headers)
        {
            return headers.ContentDisposition.FileName.Replace("\"", string.Empty);
        }
    }

    public class InMemoryMultipartFormDataStreamProvider : MultipartStreamProvider
    {
        private NameValueCollection _formData = new NameValueCollection();
        private List<HttpContent> _fileContents = new List<HttpContent>();

        // Set of indexes of which HttpContents we designate as form data  
        private Collection<bool> _isFormData = new Collection<bool>();

        /// <summary>  
        /// Gets a <see cref="NameValueCollection"/> of form data passed as part of the multipart form data.  
        /// </summary>  
        public NameValueCollection FormData
        {
            get { return _formData; }
        }

        /// <summary>  
        /// Gets list of <see cref="HttpContent"/>s which contain uploaded files as in-memory representation.  
        /// </summary>  
        public List<HttpContent> Files
        {
            get { return _fileContents; }
        }

        public override Stream GetStream(HttpContent parent, HttpContentHeaders headers)
        {
            // For form data, Content-Disposition header is a requirement  
            ContentDispositionHeaderValue contentDisposition = headers.ContentDisposition;
            if (contentDisposition != null)
            {
                // We will post process this as form data  
                _isFormData.Add(String.IsNullOrEmpty(contentDisposition.FileName));

                return new MemoryStream();
            }

            // If no Content-Disposition header was present.  
            throw new InvalidOperationException(string.Format("Did not find required '{0}' header field in MIME multipart body part..", "Content-Disposition"));
        }

        /// <summary>  
        /// Read the non-file contents as form data.  
        /// </summary>  
        /// <returns></returns>  
        public override async Task ExecutePostProcessingAsync()
        {
            // Find instances of non-file HttpContents and read them asynchronously  
            // to get the string content and then add that as form data  
            for (int index = 0; index < Contents.Count; index++)
            {
                if (_isFormData[index])
                {
                    HttpContent formContent = Contents[index];
                    // Extract name from Content-Disposition header. We know from earlier that the header is present.  
                    ContentDispositionHeaderValue contentDisposition = formContent.Headers.ContentDisposition;
                    string formFieldName = UnquoteToken(contentDisposition.Name) ?? String.Empty;

                    // Read the contents as string data and add to form data  
                    string formFieldValue = await formContent.ReadAsStringAsync();
                    FormData.Add(formFieldName, formFieldValue);
                }
                else
                {
                    _fileContents.Add(Contents[index]);
                }
            }
        }

        /// <summary>  
        /// Remove bounding quotes on a token if present  
        /// </summary>  
        /// <param name="token">Token to unquote.</param>  
        /// <returns>Unquoted token.</returns>  
        private static string UnquoteToken(string token)
        {
            if (String.IsNullOrWhiteSpace(token))
            {
                return token;
            }

            if (token.StartsWith("\"", StringComparison.Ordinal) && token.EndsWith("\"", StringComparison.Ordinal) && token.Length > 1)
            {
                return token.Substring(1, token.Length - 2);
            }

            return token;
        }





    }
}
