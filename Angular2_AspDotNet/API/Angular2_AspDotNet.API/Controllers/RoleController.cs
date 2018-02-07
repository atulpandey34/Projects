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

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/role")]
    public class RoleController : APIBaseController
    {
        private IRoleRepository _IRoleRepository = null;
        private IRoleMenuMappingRepository _IRoleMenuMappingRepository = null;
        public RoleController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._IRoleRepository = new RoleRepository(_unitOfWork);
            this._IRoleMenuMappingRepository = new RoleMenuMappingRepository(_unitOfWork);
        }
        [HttpGet]
        public List<RoleViewModel> GetAll()
        {
            return this._IRoleRepository.GetAllRoleList(base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<RoleMultiSelectViewModel> GetMultiSelectAll(int orgId)
        {
            int ssOrgId = orgId;
            if (ssOrgId == 0)
                ssOrgId = base.OrganizationId;
            List<RoleMultiSelectViewModel> model = new List<RoleMultiSelectViewModel>();
            List<RoleViewModel> data = this._IRoleRepository.GetAllRoleList(base.UserId, ssOrgId);
            if (data != null && data.Any())
            {
                foreach (RoleViewModel role in data)
                {
                    RoleMultiSelectViewModel multi = new RoleMultiSelectViewModel();
                    multi.id = role.RoleId;
                    multi.name = role.RoleName;
                    model.Add(multi);
                }
            }
            return model;
        }
        [HttpGet]
        public List<RoleMultiSelectModel> GetAllMultiSelect()
        {
            List<RoleMultiSelectModel> model = new List<RoleMultiSelectModel>();
            List<RoleViewModel> data = this._IRoleRepository.GetAllRoleList(base.UserId, base.OrganizationId);
            if (data != null && data.Any())
            {
                foreach (RoleViewModel role in data)
                {
                    model.Add(new RoleMultiSelectModel()
                    {
                        id = role.RoleId,
                        name = role.RoleName
                    });
                }
            }
            return model;
        }

        [HttpPost]
        public int AddUpdateRole(RoleViewModel model)
        {
            return this._IRoleRepository.AddUpdateRole(model, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public void AddUpdateRoleMenu(RoleMenuMappingListModel model)
        {
            this._IRoleMenuMappingRepository.AddUpdateRoleMenu(model, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<RoleMenuMappingViewModel> GetAllRoleMenu(int RoleId)
        {
            return this._IRoleMenuMappingRepository.GetAllMenu(RoleId, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<MenuViewModel> GetMenuByRoleId()
        {
            return this._IRoleMenuMappingRepository.GetMenuByRoleId(base.RoleId, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public string GetDefaultUrl(string Url)
        {
            return this._IRoleMenuMappingRepository.GetDefaultUrl(Url, base.RoleId, base.OrganizationId);
        }
    }
}
