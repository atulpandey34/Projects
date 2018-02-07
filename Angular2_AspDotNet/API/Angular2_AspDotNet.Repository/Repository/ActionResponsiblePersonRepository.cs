using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class ActionResponsiblePersonRepository : RepositoryBase<Angular2_AspDotNet.Data.ActionResponsiblePerson>, IActionResponsiblePersonRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public ActionResponsiblePersonRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
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

        public IEnumerable<ActionResponsiblePerson> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public ActionResponsiblePerson GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.ActionResponsiblePersonID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public List<ActionResponsiblePerson> GetByActionId(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.ActionID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public void Update(ActionResponsiblePerson entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
