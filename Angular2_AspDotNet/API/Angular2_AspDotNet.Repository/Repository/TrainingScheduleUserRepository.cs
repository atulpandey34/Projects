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
    public class TrainingScheduleUserRepository : RepositoryBase<Angular2_AspDotNet.Data.TrainingScheduleUser>, ITrainingScheduleUserRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public TrainingScheduleUserRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<TrainingScheduleUser> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }



        public TrainingScheduleUser GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.TrainingScheduleUserId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(TrainingScheduleUser entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public List<TraineeScheduleListByUserIdViewModel> GetTraineeScheduleListByUserId(int UserId, int OrganizationId)
        {
            var list = base.RepositoryContext.SP_GetTraineeScheduleListByUserId(UserId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetTraineeScheduleListByUserId_Result>, List<TraineeScheduleListByUserIdViewModel>>(list);
        }

        public TrainingAssignmentAttemptViewModel GetTrainingScheduleAssignmentForUser(int trainingScheduleId, int assignmentId, bool retest, bool isAssignmentRequired, int userId, int OrganizationId)
        {
            TrainingAssignmentAttempt assignmentAttempt = null;
            List<AssignmentQuestion> questionList = null;

            assignmentAttempt = base.RepositoryContext.TrainingAssignmentAttempts.Where(a => a.TrainingScheduleId == trainingScheduleId && a.AssignmentId == assignmentId && a.UserId == userId && a.OrganizationId == OrganizationId)
                                        .Include(a => a.TrainingAssignmentAnswers).OrderByDescending(a => a.AttemptDate).FirstOrDefault();

            if (isAssignmentRequired)
            {
                questionList = base.RepositoryContext.AssignmentQuestions.Where(a => a.AssignmentID == assignmentId && a.Active == 1 && a.OrganizationId == OrganizationId).OrderBy(a => a.Order).Include(a => a.AssignmentQuestionOptions).ToList();
            }

            if (assignmentAttempt == null || retest)
            {
                var viewModel = new TrainingAssignmentAttemptViewModel()
                {
                    TrainingScheduleId = trainingScheduleId,
                    AssignmentId = assignmentId,
                    UserId = userId,
                    TrainingAssignmentAnswers = !isAssignmentRequired ? null : Mapper.Map<List<AssignmentQuestion>, List<TrainingAssignmentAnswerViewModel>>(questionList)
                };
                return viewModel;
            }
            else
            {
                var viewModel = Mapper.Map<TrainingAssignmentAttempt, TrainingAssignmentAttemptViewModel>(assignmentAttempt);
                foreach (var qu in viewModel.TrainingAssignmentAnswers)
                {
                    var question = questionList.Where(q => q.QuestionID == qu.QuestionId).SingleOrDefault();
                    qu.QuestionText = question.QuestionText;
                    qu.QuestionType = Convert.ToInt32(question.QuestionType);
                    qu.AssignmentQuestionOptions = Mapper.Map<List<AssignmentQuestionOption>, List<AssignmentQuestionOptionViewModel>>(question.AssignmentQuestionOptions.ToList());
                }
                return viewModel;
            }
        }

        public int SaveTrainingScheduleAssignmentForUser(TrainingAssignmentAttemptViewModel model, int OrganizationId)
        {
            //Insert
            if (model.TrainingAssignmentAttemptId == 0)
            {
                var assignmentAttempt = Mapper.Map<TrainingAssignmentAttemptViewModel, TrainingAssignmentAttempt>(model);
                assignmentAttempt.OrganizationId = OrganizationId;
                base.RepositoryContext.TrainingAssignmentAttempts.Add(assignmentAttempt);
                base.RepositoryContext.TrainingAssignmentAnswers.AddRange(assignmentAttempt.TrainingAssignmentAnswers);
                return base.RepositoryContext.SaveChanges();
            }
            else
            {
                var assignmentAttempt = new TrainingAssignmentAttempt();
                Mapper.Map(model, assignmentAttempt);
                var assignmentAnswers = assignmentAttempt.TrainingAssignmentAnswers;
                assignmentAttempt.TrainingAssignmentAnswers = null;
                base.RepositoryContext.Entry(assignmentAttempt).State = EntityState.Modified;
                foreach (var answer in assignmentAnswers)
                {
                    base.RepositoryContext.Entry(answer).State = EntityState.Modified;
                }
                return base.RepositoryContext.SaveChanges();
            }

        }

    }
}


