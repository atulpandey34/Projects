using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Data.Entity.Core.Objects;
using System.Linq;
namespace Angular2_AspDotNet.Repository.Repository
{
    public class TrainingRepository : RepositoryBase<Angular2_AspDotNet.Data.Training>, ITrainingRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private ITrainingMaterialRepository _ITrainingMaterialRepository = null;

        public TrainingRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._ITrainingMaterialRepository = new TrainingMaterialRepository(unitOfWork);
        }
        public void Add(Angular2_AspDotNet.Data.Training entity, int OrganizationId)
        {
            entity.OrganisationID = OrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int OrganizationId)
        {
            var data = GetSingle(id, OrganizationId);
            data.IsDeleted = true;
            Update(data);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Training> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public TrainingViewModel GetTraining(int id, int OrganizationId)
        {
            var data = GetSingle(id, OrganizationId);
            return Mapper.Map<Training, TrainingViewModel>(data);
        }

        public Training GetSingle(int id, int OrganizationId)
        {
            return base.GetByID(id);
        }
        public int AddUpdateTraining(TrainingViewModel model, int userid, int OrganizationId)
        {
            Training training = Mapper.Map<TrainingViewModel, Training>(model);
            if (model.TrainingId == 0)
            {
                training.Active = true;
                training.CreatedBy = userid;
                training.CreatedOn = DateTime.Now;
                training.OrganisationID = OrganizationId;
                base.Insert(training);
                this._unitOfWork.Save();

            }
            else
            {
                training = GetSingle(model.TrainingId, OrganizationId);
                training.TrainingNeed = model.TrainingNeed;
                training.TrainerRequired = model.TrainerRequired;
                training.TrainingType = model.TrainingType;
                training.TrainingEventID = model.TrainingEventID;
                training.IsAssignmentRequired = model.IsAssignmentRequired;
                training.AssignmentID = model.AssignmentID;
                base.Update(training);
            }
            if (!string.IsNullOrWhiteSpace(model.YouTubeLink))
            {
                TrainingMaterial material = new TrainingMaterial();
                material.YouTubeLink = model.YouTubeLink;
                material.TrainingId = training.TrainingId;
                material.OrganizationId = OrganizationId;
                this._ITrainingMaterialRepository.Add(material, OrganizationId);
            }
            this._unitOfWork.Save();
            return training.TrainingId;
        }

        public TrainingListViewModel GetTrainingList(TrainingListFilterModel filterModel, int OrganizationId)
        {
            TrainingListViewModel list = new TrainingListViewModel();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            List<SP_GetTrainingList_Result> data = base.RepositoryContext.SP_GetTrainingList(
               filterModel.PageNo,
               filterModel.PageSize,
               filterModel.SortColumn,
               filterModel.SortOrder,
               filterModel.TrainingNeed,
               filterModel.TrainerRequired,
               filterModel.TrainingType,
               filterModel.Assignment, OrganizationId,
               totalRecords
                ).ToList<SP_GetTrainingList_Result>(); ;
            list.TrainingList = Mapper.Map<List<SP_GetTrainingList_Result>, List<TrainingList>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }

        public ReportViewModel<TrainingReportViewModel> GetTrainingReport(TrainingReportFilterModel model, int OrganizationId)
        {
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var list = base.RepositoryContext.SP_GetTrainingReport(model.PageNo, model.PageSize, model.SortColumn, model.SortOrder, model.TrainingId, model.StartDate == null ? (DateTime?)null : DateTime.Parse(model.StartDate), model.EndDate == null ? (DateTime?)null : DateTime.Parse(model.EndDate), OrganizationId, totalRecords).ToList();
            ReportViewModel<TrainingReportViewModel> report = new ReportViewModel<TrainingReportViewModel>()
            {
                ReportModel = Mapper.Map<List<SP_GetTrainingReport_Result>, List<TrainingReportViewModel>>(list),
                TotalRecords = Convert.ToInt32(totalRecords.Value)
            };
            return report;
        }

        public ReportViewModel<TrainerReportViewModel> GetTrainerReport(TrainerReportFilterModel model, int OrganizationId)
        {
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var list = base.RepositoryContext.SP_GetTrainerReport(model.PageNo, model.PageSize, model.SortColumn, model.SortOrder, model.TrainerId, OrganizationId, totalRecords).ToList();
            ReportViewModel<TrainerReportViewModel> report = new ReportViewModel<TrainerReportViewModel>()
            {
                ReportModel = Mapper.Map<List<SP_GetTrainerReport_Result>, List<TrainerReportViewModel>>(list),
                TotalRecords = Convert.ToInt32(totalRecords.Value)
            };
            return report;
        }

        public ReportViewModel<TrainingUserReportViewModel> GetTrainingUserReport(TrainingUserReportFilterModel model, int OrganizationId)
        {
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var list = base.RepositoryContext.SP_GetTrainingUserReport(model.PageNo, model.PageSize, model.SortColumn, model.SortOrder, model.UserId, OrganizationId, totalRecords).ToList();
            ReportViewModel<TrainingUserReportViewModel> report = new ReportViewModel<TrainingUserReportViewModel>()
            {
                ReportModel = Mapper.Map<List<SP_GetTrainingUserReport_Result>, List<TrainingUserReportViewModel>>(list),
                TotalRecords = Convert.ToInt32(totalRecords.Value)
            };
            return report;
        }

        public List<TrainingNeedList> GetTrainingNeedList(int OrganizationId)
        {
            return base.RepositoryContext.Trainings.Where(t => t.Active == true && t.OrganizationId == OrganizationId)
                .Select(t => new TrainingNeedList { TrainingId = t.TrainingId, TrainingNeed = t.TrainingNeed }).OrderBy(t => t.TrainingNeed).ToList();
        }

        public List<UserList> GetTrainerList(int OrganizationId)
        {
            return base.RepositoryContext.TrainingSchedules
                .Join(base.RepositoryContext.Users, t => t.Trainer, u => u.UserID, (t, u) => u)
                .Select(u => new UserList { UserId = u.UserID, UserName = u.UserName }).Distinct().OrderBy(u => u.UserName).ToList();
        }

        public List<UserList> GetUserList(int OrganizationId)
        {
            return base.RepositoryContext.TrainingScheduleUsers
                .Join(base.RepositoryContext.Users, t => t.UserId, u => u.UserID, (t, u) => u)
                .Select(u => new UserList { UserId = u.UserID, UserName = u.UserName }).Distinct().OrderBy(u => u.UserName).ToList();
        }

        public void Update(Training entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
