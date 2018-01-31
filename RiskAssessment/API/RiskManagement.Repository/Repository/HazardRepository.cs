using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class HazardRepository : RepositoryBase<RiskManagement.Data.Hazard>, IHazardRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public HazardRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.Hazard entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public  IEnumerable<Hazard> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }

        public List<HazardModel> GetAllHazard( int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId).ToList();
            return Mapper.Map<List<Hazard>, List<HazardModel>>(data);
        }

        public Hazard GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.HazardId==id && x.OrganizationId==LoggedInOrganizationId);
        }


        public  void Update(Hazard entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
