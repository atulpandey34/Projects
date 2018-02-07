using RiskManagement.Data.UnitOfWork;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/menu")]
    public class MenuController : APIBaseController
    {
        private IMenuRepository _IMenuRepository = null;
        public MenuController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._IMenuRepository = new MenuRepository(unitOfWork);

        }
        [HttpPost]
        public int AddUpdateMenu(MenuViewModel model)
        {
            return this._IMenuRepository.AddUpdateMenu(model, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public void Deactivate(int id)
        {
            this._IMenuRepository.Deactivate(id, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public void Delete(int id)
        {
            this._IMenuRepository.Delete(id, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public MenuViewModel GetSingleById(int id)
        {
            return this._IMenuRepository.GetSingleById(id, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<MenuViewModel> GetAllMenu()
        {
            return this._IMenuRepository.GetAllMenu(base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public MenuViewList GetAllMenuListData(MenuFilterModel model)
        {
            return this._IMenuRepository.GetAllMenuListData(model, base.UserId, base.OrganizationId);
        }
    }
}
