using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class ActionSourceRepository : RepositoryBase<RiskManagement.Data.ActionSource>, IActionSourceRepository, IDisposable
    {

        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public ActionSourceRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<ActionSource> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public IEnumerable<RiskManagement.Models.ActionSourceModel> GetAllActionSource(int Userid, int OrganizationId)
        {
            var userList = base.GetManyQueryable(x => x.OrganizationId == OrganizationId);
            return Mapper.Map<IEnumerable<ActionSource>, IEnumerable<RiskManagement.Models.ActionSourceModel>>(userList);
        }

        public ActionSource GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.ActionSourceID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Update(ActionSource entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

