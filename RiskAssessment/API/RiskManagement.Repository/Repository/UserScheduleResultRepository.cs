using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class UserScheduleResultRepository : RepositoryBase<UserScheduleResult>, IUserScheduleResultRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public UserScheduleResultRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.UserScheduleResult entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public  IEnumerable<UserScheduleResult> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }



        public UserScheduleResult GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.UserScheduleResultId==id && x.OrganizationId==LoggedInOrganizationId);
        }

        public int AddUpdateUserScheduleResult(UserScheduleResultViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            UserScheduleResult result = Mapper.Map<UserScheduleResultViewModel, UserScheduleResult>(model);
            if (result.UserScheduleResultId == 0)
            {
                result.OrganizationId = LoggedInOrganizationId;
                base.Insert(result);
            }
            else
            {
                var data = GetSingle(result.UserScheduleResultId, LoggedInUserId,LoggedInOrganizationId);
                data.IsUserAttendedTraining = model.IsUserAttendedTraining;
                data.ReviewerComment = model.ReviewerComment;
                Update(data);
            }
            this._unitOfWork.Save();
            return result.UserScheduleResultId;
        }
        public  void Update(UserScheduleResult entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

