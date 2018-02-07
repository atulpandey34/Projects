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
    public class MonitoringMethodRepository : RepositoryBase<Angular2_AspDotNet.Data.MonitoringMethod>, IMonitoringMethodRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public MonitoringMethodRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<MonitoringMethod> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<MonitoringMethodModel> GetAllMonitoringMethod(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.GetAll(x => x.OrganizationId == LoggedInOrganizationId).ToList();
            return Mapper.Map<List<MonitoringMethod>, List<MonitoringMethodModel>>(data);
        }

        public MonitoringMethod GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.MonitoringMethodId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

