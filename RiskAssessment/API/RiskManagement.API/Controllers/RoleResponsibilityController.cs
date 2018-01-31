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
    [RoutePrefix("api/roleresponsibility/")]
    public class RoleResponsibilityController : APIBaseController
    {
        private IMasterRoleSectionRepository _IMasterRoleSectionRepository = null;
        private IRoleResponsibilityRepository _IRoleResponsibilityRepository = null;
        private IRoleResponsibilityVersionRepository _IRoleResponsibilityVersionRepository = null;
        private IRoleResponsibilityVersionSectionRepository _IRoleResponsibilityVersionSectionRepository = null;
        private CacheManagement _caching = null;
        public RoleResponsibilityController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();

            this._IMasterRoleSectionRepository = new MasterRoleSectionRepository(unitOfWork);
            this._IRoleResponsibilityRepository = new RoleResponsibilityRepository(unitOfWork);
            this._IRoleResponsibilityVersionRepository = new RoleResponsibilityVersionRepository(unitOfWork);
            this._IRoleResponsibilityVersionSectionRepository = new RoleResponsibilityVersionSectionRepository(unitOfWork);
            this._caching = new CacheManagement();
        }

        [HttpGet]
        public List<MasterRoleSectionViewModel> GetAllMasterRoleSection()
        {
            return this._IMasterRoleSectionRepository.GetAllMasterRoleSection(base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public RolesResponsibilityViewModel GetRoleResponsibility(int roleid)
        {
            return this._IRoleResponsibilityRepository.GetRoleResponsibility(roleid, base.OrganizationId);
        }
        [HttpGet]
        public RolesResponsibilityViewModel GetRoleResponsibilityVerion(int RoleResponsibilityVersionID)
        {
            return this._IRoleResponsibilityVersionRepository.GetRoleResponsibilityVerion(RoleResponsibilityVersionID, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<RoleResponsibilityVersionSectionViewModel> GetRoleResponsibilityVersionList(int roleresponsibilityid)
        {
            return this._IRoleResponsibilityVersionRepository.GetRoleResponsibilityVersionList(roleresponsibilityid, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public RolesResponsibilityViewModel AddUpdateRoleResponsibility(RolesResponsibilityViewModel model)
        {
            return this._IRoleResponsibilityRepository.AddUpdateRoleResponsibility(model, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public int ApproveVersion(int id)
        {
            return this._IRoleResponsibilityVersionRepository.ApproveVersion(id, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public async Task<HttpResponseMessage> SaveMaterial()
        {
            RoleResponsibilityVersionSectionViewModel model = new RoleResponsibilityVersionSectionViewModel();
            // Send OK Response along with saved file names to the client.
            var provider = await Request.Content.ReadAsMultipartAsync<InMemoryMultipartFormDataStreamProvider>(new InMemoryMultipartFormDataStreamProvider());
            //access form data  
            NameValueCollection formData = provider.FormData;

            model.RoleResponsibilityVersionID = Convert.ToInt32(formData["RoleResponsibilityVersionID"]);
            //access files  
            IList<HttpContent> files = provider.Files;
            if (files != null && files.Count > 0)
            {
                HttpContent file1 = files[0];
                var thisFileName = file1.Headers.ContentDisposition.FileName.Trim('\"');

                model.DocumentName = thisFileName;

                string filename = String.Empty;
                Stream input = await file1.ReadAsStreamAsync();
                string directoryName = String.Empty;
                string URL = String.Empty;

                var path = HttpRuntime.AppDomainAppPath;
                directoryName = System.IO.Path.Combine(path, "RoleResponsibilityDocument");
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
                model.DocumentPath = "~/RoleResponsibilityDocument/" + guid + ext;
            }
            this._IRoleResponsibilityVersionRepository.UpdateRoleResponsibilityMaterial(model, base.UserId, base.OrganizationId);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            return response;
        }

        [HttpGet]
        public List<GetRoleResponsibilityViewModel> GetRolesResponsibility(int ReviewwUserId)
        {
            return this._IRoleResponsibilityRepository.GetRolesResponsibility(ReviewwUserId, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<GetRoleResponsibilityViewModel> GetRoleResponsibilityWithVersionId(int RoleResponsibilityVersionId)
        {
            return this._IRoleResponsibilityRepository.GetRoleResponsibilityWithVersionId(RoleResponsibilityVersionId, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public HttpResponseMessage DownLoadMaterialBlob(int id)
        {
            var data = this._IRoleResponsibilityVersionRepository.GetSingle(id, base.UserId, base.OrganizationId);
            var path = HttpRuntime.AppDomainAppPath;
            string directoryName = System.IO.Path.Combine(path, data.DocumentPath.Replace("~/", string.Empty));
            HttpResponseMessage result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(directoryName, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment");
            result.Content.Headers.ContentDisposition.FileName = data.DocumentName;
            result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
            result.Content.Headers.ContentLength = stream.Length;
            return result;
        }

        [HttpGet]
        public bool ValidateMasterJobSection(string value)
        {
            return this._IMasterRoleSectionRepository.Validate(value, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public int SaveMasterJobSectionFormData(MasterRoleSectionViewModel model)
        {
            return this._IMasterRoleSectionRepository.AddMasterRoleSection(model.SectionName, base.UserId, base.OrganizationId);
        }
    }
}
