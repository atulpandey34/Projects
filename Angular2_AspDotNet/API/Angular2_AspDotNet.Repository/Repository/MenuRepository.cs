using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Data.Entity.Core.Objects;
using System.Linq;
using Angular2_AspDotNet.Security;
using System.Text;
using Angular2_AspDotNet.Core;
using System.Web;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class MenuRepository : RepositoryBase<Angular2_AspDotNet.Data.Menu>, IMenuRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public MenuRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.Menu entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.CreatedBy = LoggedInUserId;
            entity.CreatedDate = DateTime.Now;
            entity.IsActive = true;
            entity.IsDeleted = false;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public int AddUpdateMenu(MenuViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Menu menu = Mapper.Map<MenuViewModel, Menu>(model);
            if (menu.MenuId == 0)
            {
                this.Add(menu, LoggedInUserId, LoggedInOrganizationId);
            }
            else
            {
                Menu existingMenu = GetSingle(menu.MenuId, LoggedInUserId, LoggedInOrganizationId);
                existingMenu.Title = menu.Title;
                existingMenu.RouterLink = menu.RouterLink;
                existingMenu.Href = menu.Href;
                existingMenu.Icon = menu.Icon;
                existingMenu.Target = menu.Target;
                existingMenu.HasSubMenu = menu.HasSubMenu;
                existingMenu.ParentMenuId = menu.ParentMenuId;
                existingMenu.SortOrder = menu.SortOrder;
                Update(existingMenu);
            }
            this._unitOfWork.Save();
            return menu.MenuId;
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Menu menu = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            menu.IsDeleted = true;
            Update(menu);
        }
        public void Deactivate(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Menu menu = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            menu.IsActive = false;
            Update(menu);
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Menu> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();
        }

        public List<MenuViewModel> GetAllMenu(int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<Menu> menu = base.GetAll(x => x.IsDeleted == false);
            return Mapper.Map<List<Menu>, List<MenuViewModel>>(menu);
        }

        public Menu GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.MenuId == id);
        }
        public MenuViewModel GetSingleById(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Menu menu = base.Get(x => x.MenuId == id && x.IsDeleted == false);
            return Mapper.Map<Menu, MenuViewModel>(menu);
        }

        public void Update(Menu entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public MenuViewList GetAllMenuListData(MenuFilterModel model, int Userid = 0, int OrganizationId = 0)
        {
            MenuViewList list = new MenuViewList();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetAllMenuListData(model.PageNo, model.PageSize, model.SortColumn, model.SortOrder,
                model.TitleFilter, model.HrefFilter, model.RouterFilter, model.ParentMenuFilter, OrganizationId, totalRecords).ToList();
            list.GetAllMenuListDataViewResult = Mapper.Map<List<SP_GetAllMenuListData_Result>, List<GetAllMenuListDataViewResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
    }
}
