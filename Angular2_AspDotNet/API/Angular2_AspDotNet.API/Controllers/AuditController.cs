using System.Web.Http;
using System.Collections.Generic;
using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Repository;
using Angular2_AspDotNet.Data.UnitOfWork;
using System.Linq;
using Angular2_AspDotNet.Data;
using System.Web.Http.Cors;
using System;
using Angular2_AspDotNet.API;
using System.Net.Http;
using System.Collections.Specialized;
using System.IO;
using System.Web;
using System.Net;
using System.Threading.Tasks;
using System.Net.Http.Headers;

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/audit")]
    public class AuditController : APIBaseController
    {
        private IAuditRepository _IAuditRepository = null;
        private IAuditSubjectRepository _IAuditSubjectRepository = null;
        private IAuditSubjectReviewRepository _IAuditSubjectReviewRepository = null;
        private IAuditSubjectQuestionResponseRepository _IAuditSubjectQuestionResponseRepository = null;
        public AuditController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._IAuditRepository = new AuditRepository(_unitOfWork);
            this._IAuditSubjectRepository = new AuditSubjectRepository(_unitOfWork);
            this._IAuditSubjectReviewRepository = new AuditSubjectReviewRepository(_unitOfWork);
            this._IAuditSubjectQuestionResponseRepository = new AuditSubjectQuestionResponseRepository(_unitOfWork);
        }
        [HttpGet]
        public List<AuditViewModel> GetAll()
        {
            return this._IAuditRepository.GetAllOrganizationist(base.UserId, base.OrganizationId);
        }
        
        [HttpGet]
        public AuditViewModel GetSingleAudit(int id)
        {
            return this._IAuditRepository.GetSingleAudit(id, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public AuditSubjectViewModel GetAuditSubject(int id)
        {
            return this._IAuditSubjectRepository.GetAuditSubject(id, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public AuditListViewResult GetAuditListData(AuditListFilterModel filter)
        {
            return this._IAuditRepository.GetAuditListData(filter, base.OrganizationId);
        }

        [HttpPost]
        public AuditSubjectListViewResult GetAuditSubjectListData(AuditSubjectListFilterModel filter)
        {
            return this._IAuditRepository.GetAuditSubjectListData(filter,base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public AuditViewModel AddUpdateAudit(AuditViewModel model)
        {
            return this._IAuditRepository.AddUpdateAudit(model, base.UserId, base.OrganizationId);
        }


        [HttpGet]
        public string DeleteAudit(int id)
        {
            this._IAuditRepository.DeleteAudit(id, base.OrganizationId);
            return "";
        }

        /*Audit Review*/
        [HttpPost]
        public AuditSubjectReviewViewModel AddUpdateAuditReview(AuditSubjectReviewViewModel model)
        {
            model.Status = true;
            return this._IAuditSubjectReviewRepository.AddUpdateAuditReview(model, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public AuditSubjectReviewViewModel GetAuditSubjectReview(int AuditSubjectID,int AuditSubjectReviewID)
        {
            return this._IAuditSubjectReviewRepository.GetAuditSubjectReview(AuditSubjectID, AuditSubjectReviewID, base.UserId, base.OrganizationId);
        }

        public async Task<HttpResponseMessage> SaveMaterial()
        {
            AuditSubjectReviewQuestionViewModel model = new AuditSubjectReviewQuestionViewModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.AuditSubjectQuestionResponseID = Convert.ToInt32(formData["AuditSubjectQuestionResponseID"]);
            //access files  
            IList<HttpContent> files = provider.Files;
            if (files != null && files.Count > 0)
            {
                HttpContent file1 = files[0];
                var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');

                model.ImageName = thisFileName;

                string filename = String.Empty;
                Stream input = await file1.ReadAsStreamAsync();
                string directoryName = String.Empty;
                string URL = String.Empty;

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "AuditSubjectQuestionResponseDocument");
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
                model.ImagePath = "~/AuditSubjectQuestionResponseDocument/" + guid + ext;
            }
            this._IAuditSubjectQuestionResponseRepository.UpdateAuditSubQueResMaterial(model);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        [HttpGet]
        public HttpResponseMessage DownLoadMaterialBlob(int id)
        {
            var data = this._IAuditSubjectQuestionResponseRepository.GetSingle(id);
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, data.ImagePath.Replace("~/", string.Empty));
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(directoryName, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = data.ImageName;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

            /*Audit Review Report*/
        [HttpGet]
        public AuditReportViewModel GetAuditReport(int Auditid)
        {
            return this._IAuditRepository.GetAuditReport(Auditid, base.UserId, base.OrganizationId);
        }
    }
}
