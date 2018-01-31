using RiskManagement.API.Common;
using RiskManagement.Data;
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
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/training")]
    public class TrainingController : APIBaseController
    {
        private ITrainingRepository _ITrainingRepository = null;
        private CacheManagement _caching = null;
        private ITrainingMaterialRepository _ITrainingMaterialRepository = null;
        public TrainingController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._ITrainingRepository = new TrainingRepository(unitOfWork);
            this._ITrainingMaterialRepository = new TrainingMaterialRepository(unitOfWork);
            this._caching = new CacheManagement();
        }
        [HttpPost]
        public int AddUpdateTraining(TrainingViewModel model)
        {
            return this._ITrainingRepository.AddUpdateTraining(model, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SaveMaterial()
        {
            
            TrainingMaterialViewModel model = new TrainingMaterialViewModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.YouTubeLink = formData["YouTubeLink"];
            model.TrainingId = Convert.ToInt32(formData["TrainingId"]);
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
                //string tempDocUrl = WebConfigurationManager.AppSettings["DocsUrl"];

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "TrainingDocuments");
                filename = System.IO.Path.Combine(directoryName, thisFileName);

                string ext = Path.GetExtension(filename);
                string guid = Guid.NewGuid().ToString();
                model.FileExtension = ext;
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
                model.FilePath = "~/TrainingDocuments/" + guid + ext;
            }
            this._ITrainingMaterialRepository.AddUpdateTrainingMaterial(model, base.UserId, base.OrganizationId);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;


            // return "";
        }
        [HttpGet]
        public TrainingViewModel GetTraining(int id)
        {
            return this._ITrainingRepository.GetTraining(id, base.OrganizationId);
        }
        [HttpPost]
        public TrainingListViewModel GetTrainingList(TrainingListFilterModel filterModel)
        {
            return this._ITrainingRepository.GetTrainingList(filterModel, base.OrganizationId);
        }
        [HttpGet]
        public string DeleteTraining(int id)
        {
            this._ITrainingRepository.Delete(id, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public List<TrainingMaterialViewModel> GetSngleByTrainingId(int id)
        {
            return this._ITrainingMaterialRepository.GetSngleByTrainingId(id, base.OrganizationId);
        }
        [HttpGet]
        public string DeleteMaterial(int id)
        {
            TrainingMaterial data = this._ITrainingMaterialRepository.Delete(id, base.OrganizationId);
            if (!string.IsNullOrWhiteSpace(data.FilePath))
            {
                var path = HttpRuntime.AppDomainAppPath;
                string directoryName = System.IO.Path.Combine(path, data.FilePath.Replace("~/", string.Empty));
                System.IO.File.Delete(directoryName);
            }
            return "";
        }

        [HttpGet]
        public System.Web.Mvc.FileContentResult DownLoadMaterial(int id)
        {
            var data = this._ITrainingMaterialRepository.GetSingle(id, base.OrganizationId);
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, data.FilePath.Replace("~/", string.Empty));
            string mimeType = MimeMapping.GetMimeMapping(data.FileName);
            var result = new System.Web.Mvc.FileContentResult(System.IO.File.ReadAllBytes(directoryName), mimeType)
            {
                FileDownloadName = data.FileName
            };
            return result;
        }

        [HttpGet]
        public HttpResponseMessage DownLoadMaterialBlob(int id)
        {
            var data = this._ITrainingMaterialRepository.GetSingle(id, base.OrganizationId);
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
        public List<TrainingNeedList> GetTrainingNeedList()
        {
            return this._ITrainingRepository.GetTrainingNeedList(base.OrganizationId);
        }

        [HttpGet]
        public List<UserList> GetTrainerList()
        {
            return this._ITrainingRepository.GetTrainerList(base.OrganizationId);
        }

        [HttpGet]
        public List<UserList> GetUserList()
        {
            return this._ITrainingRepository.GetUserList(base.OrganizationId);
        }

        // Training, Start date, End date
        [HttpGet]
        public ReportViewModel<TrainingReportViewModel> GetTrainingReport([FromUri]TrainingReportFilterModel model)
        {
            return this._ITrainingRepository.GetTrainingReport(model, base.OrganizationId);
        }

        [HttpGet]
        public HttpResponseMessage DownloadTrainingReport([FromUri]TrainingReportFilterModel model)
        {
            var listReport =  this._ITrainingRepository.GetTrainingReport(model, base.OrganizationId).ReportModel;
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new MemoryStream(new UTF8Encoding().GetBytes(listReport.BuildCsvString()));
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = "export.csv";
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

        //TrainingId
        [HttpGet]
        public ReportViewModel<TrainerReportViewModel> GetTrainerReport([FromUri]TrainerReportFilterModel model)
        {
            return this._ITrainingRepository.GetTrainerReport(model, base.OrganizationId);
        }

        [HttpGet]
        public HttpResponseMessage DownloadTrainerReport([FromUri]TrainerReportFilterModel model)
        {
            var listReport = this._ITrainingRepository.GetTrainerReport(model, base.OrganizationId).ReportModel;
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new MemoryStream(new UTF8Encoding().GetBytes(listReport.BuildCsvString()));
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = "export.csv";
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

        //UserId
        [HttpGet]
        public ReportViewModel<TrainingUserReportViewModel> GetTrainingUserReport([FromUri]TrainingUserReportFilterModel model)
        {
            return this._ITrainingRepository.GetTrainingUserReport(model, base.OrganizationId);
        }

        [HttpGet]
        public HttpResponseMessage DownloadTrainingUserReport([FromUri]TrainingUserReportFilterModel model)
        {
            var listReport = this._ITrainingRepository.GetTrainingUserReport(model, base.OrganizationId).ReportModel;
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new MemoryStream(new UTF8Encoding().GetBytes(listReport.BuildCsvString()));
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = "export.csv";
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }
    }
}
