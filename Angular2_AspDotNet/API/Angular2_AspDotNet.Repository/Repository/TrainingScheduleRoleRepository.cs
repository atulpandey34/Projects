using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class TrainingScheduleRoleRepository : RepositoryBase<Angular2_AspDotNet.Data.TrainingScheduleRole>, ITrainingScheduleRoleRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public TrainingScheduleRoleRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public  IEnumerable<TrainingScheduleRole> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }



        public TrainingScheduleRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.TrainingScheduleRoleId==id && x.OrganizationId==LoggedInOrganizationId);
        }


        public  void Update(TrainingScheduleRole entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}


