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
using RiskManagement.API;
using System.Net.Http;
using System.Collections.Specialized;
using System.IO;
using System.Web;
using System.Net;
using System.Threading.Tasks;
using System.Net.Http.Headers;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/organization")]
    public class OrganizationController : APIBaseController
    {
        private IOrganizationRepository _IOrganizationRepository = null;
        public OrganizationController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._IOrganizationRepository = new OrganizationRepository(_unitOfWork);
        }
        [HttpGet]
        public List<OrganizationViewModel> GetAll()
        {
            return this._IOrganizationRepository.GetAllOrganizationist(base.UserId, base.OrganizationId);
        }
        
        [HttpGet]
        public OrganizationViewModel GetSingleOrganization(int id)
        {
            return this._IOrganizationRepository.GetSingleOrganization(id, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public OrganizationListViewResult GetOrganizationListData(OrganizationListFilterModel filter)
        {
            return this._IOrganizationRepository.GetOrganizationListData(filter, base.UserId);
        }

        [HttpPost]
        public OrganizationViewModel AddUpdateOrganization(OrganizationViewModel model)
        {
            return this._IOrganizationRepository.AddUpdateOrganization(model, base.UserId, base.OrganizationId);
        }


        [HttpGet]
        public string DeleteOrganization(int id)
        {
            this._IOrganizationRepository.DeleteOrganization(id, base.UserId);
            return "";
        }

        public async Task<HttpResponseMessage> SaveMaterial()
        {
            OrganizationViewModel model = new OrganizationViewModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.OrganizationID = Convert.ToInt32(formData["OrganizationID"]);
            //access files  
            IList<HttpContent> files = provider.Files;
            if (files != null && files.Count > 0)
            {
                HttpContent file1 = files[0];
                var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');

                //model.FileName = thisFileName;

                string filename = String.Empty;
                Stream input = await file1.ReadAsStreamAsync();
                string directoryName = String.Empty;
                string URL = String.Empty;

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "Organization");
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
                model.Logo = "~/Organization/" + guid + ext;
            }
            this._IOrganizationRepository.UpdateOrganizationMaterial(model, base.UserId, base.OrganizationId);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        [HttpGet]
        public HttpResponseMessage DownLoadMaterialBlob(int id)
        {
            var data = this._IOrganizationRepository.GetSingle(id, base.UserId, base.OrganizationId);
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, data.Logo.Replace("~/", string.Empty));
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(directoryName, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = data.Logo;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

    }
}
