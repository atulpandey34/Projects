using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class EventActionStatusRepository : RepositoryBase<Angular2_AspDotNet.Data.EventActionStatu>, IEventActionStatusRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public EventActionStatusRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.EventActionStatu entity, int LoggedInUserId, int LoggedInOrganizationId)
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
        public IEnumerable<Angular2_AspDotNet.Models.EventActionStatusModel> GetAllStatus(int Userid, int OrganizationId)
        {
            var titleList = base.GetAll(x => x.OrganizationId == OrganizationId);
            return Mapper.Map<IEnumerable<EventActionStatu>, IEnumerable<Angular2_AspDotNet.Models.EventActionStatusModel>>(titleList);
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

