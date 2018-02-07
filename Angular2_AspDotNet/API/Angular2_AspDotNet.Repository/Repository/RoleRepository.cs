using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class RoleRepository : RepositoryBase<Angular2_AspDotNet.Data.Role>, IRoleRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public RoleRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }

        public void Add(Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.Active = true;
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public int AddUpdateRole(RoleViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Role role = Mapper.Map<RoleViewModel, Role>(model);
            if (role.RoleId == 0)
            {
                role.IsAdmin = false;
                Add(role, LoggedInUserId, LoggedInOrganizationId);
            }
            this._unitOfWork.Save();
            return role.RoleId;
        }

        public void Update(Data.Role entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.Role GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetByID(id);
        }

        public IEnumerable<Role> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();

        }

        public List<RoleViewModel> GetAllRoleList(int Userid, int OrganizationId)
        {
            var data = base.GetAll(x => x.OrganizationId == OrganizationId).OrderBy(x => x.RoleName);
            return Mapper.Map<IEnumerable<Role>, IEnumerable<Angular2_AspDotNet.Models.RoleViewModel>>(data).ToList();
        }



        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
