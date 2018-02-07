using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class DurationUnitRepository : RepositoryBase<Angular2_AspDotNet.Data.DurationUnit>, IDurationUnitRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public DurationUnitRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.DurationUnit entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<DurationUnit> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<DurationUnitModel> GetAllDurationUnit(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.GetAll(x => x.OrganizationId == LoggedInOrganizationId).ToList();
            return Mapper.Map<List<DurationUnit>, List<DurationUnitModel>>(data);
        }

        public DurationUnit GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.DurationUnitId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(DurationUnit entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
