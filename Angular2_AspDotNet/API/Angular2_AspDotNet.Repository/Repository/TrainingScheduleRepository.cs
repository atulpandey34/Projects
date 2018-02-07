using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class TrainingScheduleRepository : RepositoryBase<Angular2_AspDotNet.Data.TrainingSchedule>, ITrainingScheduleRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private ITrainingScheduleUserRepository _ITrainingScheduleUserRepository = null;
        private ITrainingScheduleRoleRepository _ITrainingScheduleRoleRepository = null;
        public TrainingScheduleRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._ITrainingScheduleUserRepository = new TrainingScheduleUserRepository(unitOfWork);
            this._ITrainingScheduleRoleRepository = new TrainingScheduleRoleRepository(unitOfWork);
        }
        public void Add(Angular2_AspDotNet.Data.TrainingSchedule entity, int OrganizationId)
        {
            entity.OrganizationId = OrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int OrganizationId)
        {
            base.RepositoryContext.SP_DeleteTrainignSchedule(id, OrganizationId);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<TrainingSchedule> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public int AddUpdateTrainingSchedule(TrainingScheduleViewModel model, int OrganizationId)
        {
            TrainingSchedule schedule = Mapper.Map<TrainingScheduleViewModel, TrainingSchedule>(model);
            if (schedule.TrainingScheduleId == 0)
            {
                schedule.OrganizationId = OrganizationId;
                schedule.Completed = false;
                base.Insert(schedule);
                this._unitOfWork.Save();
            }
            else
            {
                base.RepositoryContext.SP_DeleteALLTrainingScheduleRole(schedule.TrainingScheduleId, OrganizationId);
                base.RepositoryContext.SP_DeleteALLTrainingScheduleUser(schedule.TrainingScheduleId, OrganizationId);
            }
            if (model.UserList != null && model.UserList.Any())
            {
                foreach (var data in model.UserList)
                {
                    TrainingScheduleUser user = Mapper.Map<TrainingScheduleUserViewModel, TrainingScheduleUser>(data);
                    user.TrainingScheduleId = schedule.TrainingScheduleId;
                    user.OrganizationId = OrganizationId;
                    this._ITrainingScheduleUserRepository.Add(user, 0, OrganizationId);
                }
            }
            if (model.RoleList != null && model.RoleList.Any())
            {
                foreach (var data in model.RoleList)
                {
                    TrainingScheduleRole role = Mapper.Map<TrainingScheduleRoleViewModel, TrainingScheduleRole>(data);
                    role.TrainingScheduleId = schedule.TrainingScheduleId;
                    role.OrganizationId = OrganizationId;
                    this._ITrainingScheduleRoleRepository.Add(role, 0, OrganizationId);
                }
            }
            this._unitOfWork.Save();
            return schedule.TrainingScheduleId;
        }
        public List<TrainingScheduleListViewModel> GetTrainingScheduleList(int TrainingScheduleId, int OrganizationId)
        {
            var list = base.RepositoryContext.SP_GetTrainingScheduleList(TrainingScheduleId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetTrainingScheduleList_Result>, List<TrainingScheduleListViewModel>>(list);
        }
        public List<TrainingScheduleListByUserIdViewModel> GetTrainingScheduleListByUserId(int UserId, int OrganizationId)
        {
            var list = base.RepositoryContext.SP_GetTrainingScheduleListByUserId(UserId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetTrainingScheduleListByUserId_Result>, List<TrainingScheduleListByUserIdViewModel>>(list);
        }
        public List<TrainingScheduleUserListViewModel> GetTrainingScheduleUserList(int TrainingScheduleId, int OrganizationId)
        {
            var list = base.RepositoryContext.SP_GetTrainingScheduleUserList(TrainingScheduleId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetTrainingScheduleUserList_Result>, List<TrainingScheduleUserListViewModel>>(list);
        }
        public List<UserScheduleResultViewModel> GetTrainingScheduleUserResultList(int TrainingScheduleId, int OrganizationId)
        {
            var list = base.RepositoryContext.SP_GetTrainingScheduleUserResultList(TrainingScheduleId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetTrainingScheduleUserResultList_Result>, List<UserScheduleResultViewModel>>(list);
        }
        public TrainingSchedule GetSingle(int id, int OrganizationId)
        {
            return base.GetByID(id);
        }

        public void UpdateTrainingScheduleStatus(int TrainingScheduleId, bool Status, int OrganizationId)
        {
            var data = this.GetSingle(TrainingScheduleId, OrganizationId);
            data.Completed = Status;
            Update(data);
        }
        public void Update(TrainingSchedule entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public TrainingAssignmentAttemptViewModel GetAssignmentForUser(int TrainingAssignmentAttemptId, int UserId, int OrganizationId)
        {
            TrainingAssignmentAttempt assignmentAttempt = base.RepositoryContext.TrainingAssignmentAttempts.Where(a => a.TrainingAssignmentAttemptId == TrainingAssignmentAttemptId && a.UserId == UserId && a.OrganizationId == OrganizationId)
                                        .Include(a => a.TrainingAssignmentAnswers).OrderBy(a => a.AttemptDate).FirstOrDefault();
            List<AssignmentQuestion> questionList = base.RepositoryContext.AssignmentQuestions.Where(a => a.AssignmentID == assignmentAttempt.AssignmentId && a.Active == 1 && a.OrganizationId == OrganizationId).OrderBy(a => a.Order).Include(a => a.AssignmentQuestionOptions).ToList();

            var viewModel = Mapper.Map<TrainingAssignmentAttempt, TrainingAssignmentAttemptViewModel>(assignmentAttempt);
            foreach (var qu in viewModel.TrainingAssignmentAnswers)
            {
                var question = questionList.Where(q => q.QuestionID == qu.QuestionId).SingleOrDefault();
                qu.QuestionText = question.QuestionText;
                qu.QuestionType = question.QuestionType;
                qu.QuestionScore = question.Score;
                qu.AssignmentQuestionOptions = Mapper.Map<List<AssignmentQuestionOption>, List<AssignmentQuestionOptionViewModel>>(question.AssignmentQuestionOptions.ToList());
                qu.IsCorrectAnswer = qu.QuestionType == 2 ?
                    qu.AssignmentQuestionOptions.Where(aq => aq.QuestionOptionID == qu.QuestionOptionId).Select(aq => aq.IsCorrectAnswer).SingleOrDefault()
                    : false;
            }
            return viewModel;
        }

        public int SaveAssignmentScoreForUser(TrainingAssignmentAttemptViewModel model, int OrganizationId)
        {
            //var assignmentAttempt = base.RepositoryContext.TrainingAssignmentAttempts.Where(a => a.TrainingAssignmentAttemptId == model.TrainingAssignmentAttemptId).SingleOrDefault();
            TrainingAssignmentAttempt assignmentAttempt = new TrainingAssignmentAttempt();
            Mapper.Map(model, assignmentAttempt);
            assignmentAttempt.OrganizationId = OrganizationId;
            base.RepositoryContext.TrainingAssignmentAttempts.Attach(assignmentAttempt);
            base.RepositoryContext.Entry(assignmentAttempt).Property(a => a.Score).IsModified = true;
            base.RepositoryContext.Entry(assignmentAttempt).Property(a => a.Retest).IsModified = true;
            return base.RepositoryContext.SaveChanges();
        }
    }
}
