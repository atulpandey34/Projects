using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class CorrectiveActionAssignedToListRepository : RepositoryBase<Angular2_AspDotNet.Data.CorrectiveActionAssignedToList>, ICorrectiveActionAssignedToListRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public CorrectiveActionAssignedToListRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<CorrectiveActionAssignedToList> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public IEnumerable<CorrectiveActionAssignedToList> GetAllWithCorrectionid(int correctionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetMany(x => x.CorrectiveActionId == correctionId && x.OrganizationId == LoggedInOrganizationId);
        }

        public CorrectiveActionAssignedToList GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.CorrectiveActionAssignedToListId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
