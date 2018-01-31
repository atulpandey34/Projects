using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;


namespace RiskManagement.Repository.Repository
{
    public class AgendaRepository : RepositoryBase<RiskManagement.Data.Agendum>, IAgendaRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public AgendaRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Agendum entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Agendum> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationID == LoggedInOrganizationId);
        }

        public Agendum GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.AgendaID == id && x.OrganizationID == LoggedInOrganizationId);
        }

        public void Update(Agendum entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
