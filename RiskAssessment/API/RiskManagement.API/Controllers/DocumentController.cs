using System.Web.Http;
using System.Collections.Generic;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Models;
using RiskManagement.Repository.Repository;
using RiskManagement.Data.UnitOfWork;
using System.Linq;
using RiskManagement.Data;
using System.Web.Http.Cors;
using System;
using System.Net.Http;
using System.Collections.Specialized;
using System.Threading.Tasks;
using System.IO;
using System.Web;
using System.Net;
using System.Net.Http.Headers;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Document/")]
    public class DocumentController : APIBaseController
    {
        private IDocumentRepository _IDocumentRepository = null;
        private IDocumentVersionRepository _IDocumentVersionRepository = null;
        private IMasterDocumentTypeRepository _IMasterDocumentTypeRepository = null;
        private IMasterDocumentFolderRepository _IMasterDocumentFolderRepository = null;
        private IMasterReviewFrequencyUnitRepository _IMasterReviewFrequencyUnitRepository = null;
        private CacheManagement _caching = null;
        public DocumentController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();

            this._IDocumentRepository = new DocumentRepository(unitOfWork);
            this._IDocumentVersionRepository = new DocumentVersionRepository(unitOfWork);
            this._IMasterDocumentTypeRepository = new MasterDocumentTypeRepository(unitOfWork);
            this._IMasterDocumentFolderRepository = new MasterDocumentFolderRepository(unitOfWork);
            this._IMasterReviewFrequencyUnitRepository = new MasterReviewFrequencyUnitRepository(unitOfWork);
            this._caching = new CacheManagement();
        }

        [HttpPost]
        public DocumentListViewResult GetDocumentListData(DocumentListFilterModel filter)
        {
            return this._IDocumentRepository.GetDocumentListData(filter, base.UserId, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public MasterDocumentFolderListViewResult GetMasterDocumentFoldertListData(MasterDocumentFolderListFilterModel filter)
        {
            return this._IMasterDocumentFolderRepository.GetMasterDocumentFoldertListData(filter, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public int SaveFolderFormData(FolderPopupViewModel model)
        {
            return this._IMasterDocumentFolderRepository.SaveFolderFormData(model, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public FolderPopupViewModel GetSingleFolder(int id)
        {
            return this._IMasterDocumentFolderRepository.GetSingleFolder(id, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<MasterDocumentTypeViewModel> GetAllDocumentsType()
        {
            return this._IMasterDocumentTypeRepository.GetAllDocumentsType(base.UserId, base.OrganizationId).OrderBy(x => x.Type).ToList();
        }

        [HttpGet]
        public List<MasterDocumentFolderViewModel> GetAllMasterDocumentFolder()
        {
            return this._IMasterDocumentFolderRepository.GetAllMasterDocumentFolder( base.UserId, base.OrganizationId).OrderBy(x => x.FolderName).ToList();
        }

        [HttpGet]
        public List<MasterReviewFrequencyUnitViewModel> GetMasterReviewFrequency()
        {
            return this._IMasterReviewFrequencyUnitRepository.GetMasterReviewFrequency( base.UserId, base.OrganizationId).OrderBy(x => x.ReviewFrequencyUnit).ToList();
        }

        [HttpGet]
        public DocumentViewModel GetSingleDocument(int id)
        {
            return this._IDocumentRepository.GetSingleDocument(id, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public DocumentViewModel AddUpdateDocument(DocumentViewModel model)
        {
            string token = Request.Headers.Authorization.ToString();
            return this._IDocumentRepository.AddUpdateDocument(model, base.UserId, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public bool ValidateDocumentType(string documentType)
        {
            return this._IMasterDocumentTypeRepository.ValidateDocumentType(documentType, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public bool ValidateFolder(string value)
        {
            return this._IMasterDocumentFolderRepository.ValidateFolder(value, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public bool ValidateReviewFrequencyUnit(string value)
        {
            return this._IMasterReviewFrequencyUnitRepository.ValidateReviewFrequencyUnit(value, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<DocumentVersionViewModel> GetDocumentVersionList(int documentid)
        {
            return this._IDocumentVersionRepository.GetDocumentVersionList(documentid, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public string DeleteDocument(int id)
        {
            this._IDocumentRepository.DeleteDocument(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public int DeleteFolder(int id)
        {
            int result = this._IMasterDocumentFolderRepository.DeleteFolder(id, base.UserId, base.OrganizationId);
            return result;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveMaterial()
        {
            DocumentVersionViewModel model = new DocumentVersionViewModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.DocumentVersionID = Convert.ToInt32(formData["DocumentVersionID"]);
            //access files  
            IList<HttpContent> files = provider.Files;
            if (files != null && files.Count > 0)
            {
                HttpContent file1 = files[0];
                var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');

                model.FileName = thisFileName;

                string filename = String.Empty;
                Stream input = await file1.ReadAsStreamAsync();
                string directoryName = String.Empty;
                string URL = String.Empty;

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "Documents");
                filename = System.IO.Path.Combine(directoryName, thisFileName);

                string ext = Path.GetExtension(filename);
                string guid = Guid.NewGuid().ToString();
                //model.FileExtension = ext;
                filename = System.IO.Path.Combine(directoryName, guid + ext);
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
                model.FilePath = "~/Documents/" + guid + ext;
            }
            this._IDocumentVersionRepository.UpdateDocumentMaterial(model, base.UserId, base.OrganizationId);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        [HttpGet]
        public HttpResponseMessage DownLoadMaterialBlob(int id)
        {
            var data = this._IDocumentVersionRepository.GetSingle(id, base.UserId, base.OrganizationId);
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, data.FilePath.Replace("~/", string.Empty));
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(directoryName, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = data.FileName;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

        [HttpGet]
        public string DeleteDocumentVersion(int documentVesionId)
        {
            _IDocumentVersionRepository.DeleteDocumentVersion(documentVesionId, base.UserId, base.OrganizationId);
            return string.Empty;
        }
        [HttpGet]
        public int AddMasterDocumentType(string MasterValueText)
        {
            return this._IMasterDocumentTypeRepository.AddMasterDocumentType(MasterValueText, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public int AddMasterReviewFrequencyUnit(string MasterValueText)
        {
            return this._IMasterReviewFrequencyUnitRepository.AddMasterReviewFrequencyUnit(MasterValueText, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public int AddMasterDocumentFolder(string MasterValueText)
        {
            return this._IMasterDocumentFolderRepository.AddMasterDocumentFolder(MasterValueText, base.UserId, base.OrganizationId);
        }

    }
}
