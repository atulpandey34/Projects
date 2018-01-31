using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;

namespace RiskManagement.Repository.Repository
{
    public class UserRoleRepository : RepositoryBase<RiskManagement.Data.UserRole>, IUserRoleRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public UserRoleRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }

        public void Add(Data.UserRole entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            entity.CreatedDate = DateTime.Now;
            entity.CreatedBy = LoggedInUserId;
            entity.IsDeleted = false;
            base.Insert(entity);

        }
        public void Update(Data.UserRole entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            
        }
        public Data.UserRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetByID(id);
        }
        public IEnumerable<UserRole> GetAll(int LoggedInUserId, int LoggedInOrganizationId, int UserId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId && x.UserId == UserId);

        }





        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
