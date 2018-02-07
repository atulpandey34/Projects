using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class EventActionStatusRepository : RepositoryBase<RiskManagement.Data.EventActionStatu>, IEventActionStatusRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public EventActionStatusRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.EventActionStatu entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<EventActionStatu> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public IEnumerable<RiskManagement.Models.EventActionStatusModel> GetAllStatus(int Userid, int OrganizationId)
        {
            var titleList = base.GetAll(x => x.OrganizationId == OrganizationId);
            return Mapper.Map<IEnumerable<EventActionStatu>, IEnumerable<RiskManagement.Models.EventActionStatusModel>>(titleList);
        }


        public EventActionStatu GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.EventActionStatusID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Update(EventActionStatu entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

