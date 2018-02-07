using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class AssignmentQuestionRepository : RepositoryBase<Angular2_AspDotNet.Data.AssignmentQuestion>, IAssignmentQuestionRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IAssignmentQuestionRepository _IAssignmentQuestionRepository = null;
        private IAssignmentQuestionOptionRepository _IAssignmentQuestionOptionRepository = null;

        private IActionRepository _IActionRepository = null;
        public AssignmentQuestionRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

            this._IActionRepository = new ActionRepository(unitOfWork);
            this._IAssignmentQuestionOptionRepository = new AssignmentQuestionOptionRepository(unitOfWork);
        }
        public void Add(Angular2_AspDotNet.Data.AssignmentQuestion entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(id, LoggedInUserId, LoggedInOrganizationId);
            // data.IsDeleted = true;
            Update(data);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<AssignmentQuestion> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationId == LoggedInOrganizationId);
        }



        public AssignmentQuestion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.QuestionID == id && x.OrganizationId == LoggedInOrganizationId);
        }
        //public RiskAssessmentViewModel GetSingleWithTeam(int id)
        //{
        //    RiskAssessment data = base.GetByID(id);
        //    RiskAssessmentViewModel model = Mapper.Map<RiskAssessment, RiskAssessmentViewModel>(data);
        //    var teams = this._IRiskAssessmentTeamRepository.GetAllWithRiskAssessmentId(model.RiskAssessmentId);
        //    if (teams != null && teams.Any())
        //    {
        //        model.RiskAssessmentTeamViewModel = Mapper.Map<List<RiskAssessmentTeam>, List<RiskAssessmentTeamViewModel>>(teams);
        //    }
        //    return model;
        //}

        public void Update(AssignmentQuestion entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        //public int AddUpdateAssignment(RiskAssessmentViewModel model, int Userid)
        //{
        //    RiskAssessment riskAssessment = Mapper.Map<RiskAssessmentViewModel, RiskAssessment>(model);

        //    if (model.RiskAssessmentId == 0)
        //    {
        //        riskAssessment.Status = 0;
        //        riskAssessment.TrainingRequired = false;
        //        base.Insert(riskAssessment);
        //        this._unitOfWork.Save();
        //    }
        //    else
        //    {
        //        riskAssessment = GetSingle(model.RiskAssessmentId);
        //        riskAssessment.Area = model.Area;
        //        riskAssessment.AssessmentDate = model.AssessmentDate;
        //        riskAssessment.ReviewDuration = model.ReviewDuration;
        //        riskAssessment.ReviewDurationUnit = model.ReviewDurationUnit;
        //        base.Update(riskAssessment);
        //    }
        //    base.RepositoryContext.SP_DeleteAllRiskAssessmentTeam(riskAssessment.RiskAssessmentId);
        //    if (model.RiskAssessmentTeamViewModel != null && model.RiskAssessmentTeamViewModel.Any())
        //    {
        //        foreach (RiskAssessmentTeamViewModel viewModel in model.RiskAssessmentTeamViewModel)
        //        {
        //            RiskAssessmentTeam riskAssessmentTeam = Mapper.Map<RiskAssessmentTeamViewModel, RiskAssessmentTeam>(viewModel);
        //            riskAssessmentTeam.RiskAssessmentId = riskAssessment.RiskAssessmentId;
        //            this._IRiskAssessmentTeamRepository.Add(riskAssessmentTeam);
        //        }
        //    }
        //    if (model.RiskAssessmentHazardViewModel != null && model.RiskAssessmentHazardViewModel.Any())
        //    {
        //        foreach (RiskAssessmentHazardViewModel viewModel in model.RiskAssessmentHazardViewModel)
        //        {
        //            RiskAssessmentHazard riskAssessmentHazard = Mapper.Map<RiskAssessmentHazardViewModel, RiskAssessmentHazard>(viewModel);
        //            this._IRiskAssessmentHazardRepository.Add(riskAssessmentHazard);
        //            if (viewModel.RiskAssessmentHazardMeasureViewModel != null && viewModel.RiskAssessmentHazardMeasureViewModel.Any())
        //            {
        //                foreach (RiskAssessmentHazardMeasureViewModel viewModel1 in viewModel.RiskAssessmentHazardMeasureViewModel)
        //                {
        //                    RiskAssessmentHazardMeasure riskAssessmentHazardMeasure = Mapper.Map<RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardMeasure>(viewModel1);
        //                    this._IRiskAssessmentHazardMeasureRepository.Add(riskAssessmentHazardMeasure);
        //                }
        //            }
        //            if (viewModel.RiskAssessmentHazardReviewViewModel != null && viewModel.RiskAssessmentHazardReviewViewModel.Any())
        //            {
        //                foreach (RiskAssessmentHazardReviewViewModel viewModel2 in viewModel.RiskAssessmentHazardReviewViewModel)
        //                {
        //                    RiskAssessmentHazardReview riskAssessmentHazardReview = Mapper.Map<RiskAssessmentHazardReviewViewModel, RiskAssessmentHazardReview>(viewModel2);
        //                    riskAssessmentHazardReview.CreatedDate = DateTime.Now;
        //                    riskAssessmentHazardReview.UpdatedDate = DateTime.Now;
        //                    this._IRiskAssessmentHazardReviewRepository.Add(riskAssessmentHazardReview);
        //                }
        //            }
        //        }
        //    }
        //    this._unitOfWork.Save();
        //    return riskAssessment.RiskAssessmentId;
        //}

        //public int AddUpdateRiskAssessmentHazard(RiskAssessmentHazardViewModel model, int Userid)
        //{
        //    if (model.IsReadyForReview)
        //    {
        //        base.RepositoryContext.SP_SerRiskAssessmentReviewDate(model.RiskAssessmentHarardId);
        //    }
        //    RiskAssessmentHazard riskAssessmentHazard = Mapper.Map<RiskAssessmentHazardViewModel, RiskAssessmentHazard>(model);
        //    this._IRiskAssessmentHazardRepository.Add(riskAssessmentHazard);
        //    RiskAssessmentHazardReview riskAssessmentHazardReview = new RiskAssessmentHazardReview();
        //    if (model.RiskAssessmentHazardReviewViewModel != null && model.RiskAssessmentHazardReviewViewModel.Any())
        //    {
        //        foreach (RiskAssessmentHazardReviewViewModel viewModel2 in model.RiskAssessmentHazardReviewViewModel)
        //        {
        //            riskAssessmentHazardReview = Mapper.Map<RiskAssessmentHazardReviewViewModel, RiskAssessmentHazardReview>(viewModel2);
        //            riskAssessmentHazardReview.CreatedDate = DateTime.Now;
        //            riskAssessmentHazardReview.UpdatedDate = DateTime.Now;
        //            riskAssessmentHazardReview.RiskAssessmentHazardId = riskAssessmentHazard.RiskAssessmentHarardId;

        //            this._IRiskAssessmentHazardReviewRepository.Add(riskAssessmentHazardReview);
        //        }
        //    }
        //    if (model.RiskAssessmentHazardMeasureViewModel != null && model.RiskAssessmentHazardMeasureViewModel.Any())
        //    {
        //        foreach (RiskAssessmentHazardMeasureViewModel viewModel1 in model.RiskAssessmentHazardMeasureViewModel)
        //        {
        //            RiskAssessmentHazardMeasure riskAssessmentHazardMeasure = Mapper.Map<RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardMeasure>(viewModel1);
        //            riskAssessmentHazardMeasure.RiskAssessmentHazardId = riskAssessmentHazard.RiskAssessmentHarardId;
        //            riskAssessmentHazardMeasure.RiskAssessmentId = riskAssessmentHazard.RiskAssessmentId;
        //            riskAssessmentHazardMeasure.DateAdded = DateTime.Now;
        //            riskAssessmentHazardMeasure.RiskAssessmentHazardReviewId = riskAssessmentHazardReview.RiskAssessmentHazardReviewId;

        //            this._IRiskAssessmentHazardMeasureRepository.Add(riskAssessmentHazardMeasure);
        //            if (viewModel1.ActionId == 1)
        //            {
        //                Angular2_AspDotNet.Data.Action action = new Angular2_AspDotNet.Data.Action();
        //                action.SourceID = riskAssessmentHazardMeasure.RiskAssessmentHazardMeasureId;
        //                action.Title = riskAssessmentHazardMeasure.Text;
        //                action.Duedate = DateTime.Now.AddDays(7);
        //                action.ActionSourceID = 4;
        //                action.IsActionRequired = true;
        //                action.CategoryID = 7;
        //                this._IActionRepository.Add(action);
        //            }
        //        }
        //    }

        //    this._unitOfWork.Save();
        //    return riskAssessmentHazard.RiskAssessmentHarardId;
        //}

        //public List<HazardListModel> GetHazardListWithRiskAssessmentId(int RiskAssessmentId)
        //{
        //    var data = base.RepositoryContext.SP_GetRiskAssessmentHazardList(RiskAssessmentId).ToList();
        //    var list = Mapper.Map<List<SP_GetRiskAssessmentHazardList_Result>, List<HazardListModel>>(data);
        //    return list;
        //}

        //public RiskAssessmentListData GetRiskAssessmentListData(RiskAssessmentListFilterModel filter)
        //{
        //    RiskAssessmentListData list = new RiskAssessmentListData();
        //    ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
        //    var data = base.RepositoryContext.SP_GetRiskAssessmentList(filter.PageNo, filter.PageSize, filter.SortColumn, filter.SortOrder
        //        , filter.SubjectFilter, filter.AssessmentDateFilter, filter.DurationUnitFilter, filter.ResponsibleTeamFilter, totalRecords).ToList();
        //    list.RiskAssessmentListResult = Mapper.Map<List<SP_GetRiskAssessmentList_Result>, List<RiskAssessmentListResult>>(data);
        //    list.TotalRecords = Convert.ToInt32(totalRecords.Value);
        //    return list;
        //}

        public void UpdateAssignmentStatus(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetSingle(AssignmentId, LoggedInUserId, LoggedInOrganizationId);
            data.Active = 1;
            Update(data);
        }

        public int AddUpdateQuestionAssignment(AssignmentListQuestionFilterModel model, int Userid, int LoggedInUserId, int LoggedInOrganizationId)
        {
            AssignmentQuestion AssigmentQuestion = Mapper.Map<AssignmentListQuestionFilterModel, AssignmentQuestion>(model);

            if (model.QuestionId == 0)
            {
                AssigmentQuestion.Active = 1;
                AssigmentQuestion.OrganizationId = LoggedInOrganizationId;
                //riskAssessment.TrainingRequired = false;
                base.Insert(AssigmentQuestion);
                this._unitOfWork.Save();
            }
            else
            {
                AssigmentQuestion = GetSingle(model.QuestionId, LoggedInUserId, LoggedInOrganizationId);
                AssigmentQuestion.QuestionText = model.QuestionText;
                AssigmentQuestion.QuestionType = Convert.ToInt32(model.QuestionType);
                AssigmentQuestion.Score = model.Score;
                AssigmentQuestion.Order = model.Order;
                AssigmentQuestion.Active = model.Active;
                base.Update(AssigmentQuestion);
            }
            base.RepositoryContext.SP_DeleteQuestionOptions(AssigmentQuestion.QuestionID);
            if (model.AssignmentQuestionOptionViewModel != null && model.AssignmentQuestionOptionViewModel.Any())
            {
                foreach (AssignmentQuestionOptionViewModel optionModel in model.AssignmentQuestionOptionViewModel)
                {
                    AssignmentQuestionOption option = Mapper.Map<AssignmentQuestionOptionViewModel, AssignmentQuestionOption>(optionModel);
                    option.QuestionID = AssigmentQuestion.QuestionID;
                    option.OrganizationId = LoggedInOrganizationId;
                    this._IAssignmentQuestionOptionRepository.Add(option, LoggedInUserId, LoggedInOrganizationId);
                }
            }
            this._unitOfWork.Save();
            return AssigmentQuestion.QuestionID;
        }
        public AssignmentListQuestionFilterModel GetQuestionDetailData(int questionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            AssignmentListQuestionFilterModel model = new AssignmentListQuestionFilterModel();
            var data = GetSingle(questionId, LoggedInUserId,LoggedInOrganizationId);
            model = Mapper.Map<AssignmentQuestion, AssignmentListQuestionFilterModel>(data);
            var optionList = this._IAssignmentQuestionOptionRepository.GetWithQuestionId(questionId, LoggedInUserId, LoggedInOrganizationId);
            if (optionList != null && optionList.Any())
            {
                foreach (var option in optionList)
                {
                    model.AssignmentQuestionOptionViewModel.Add(
                        Mapper.Map<AssignmentQuestionOption, AssignmentQuestionOptionViewModel>(option)
                        );
                }
            }
            return model;
        }
        public List<AssignmentQuestionViewModel> GetQuestionOptionList(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var questions = base.RepositoryContext.AssignmentQuestions.Where(aq => aq.AssignmentID == AssignmentId && aq.OrganizationId==LoggedInOrganizationId).Include(aq => aq.AssignmentQuestionOptions).ToList();
            return Mapper.Map<List<AssignmentQuestion>, List<AssignmentQuestionViewModel>>(questions);
        }
        public void DeleteQuestionWithOption(int QuestionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteQuestionWithOption(QuestionId, LoggedInOrganizationId);
        }
        public AssignmentListQuestionData GetAssignmentListQuetiondata(AssignmentListQuestionFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId)
        {
            AssignmentListQuestionData list = new AssignmentListQuestionData();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            //var data = base.RepositoryContext.SP_GetAssignmentQuestionList(filter.PageNo, filter.PageSize, filter.SortColumn, 
            //    filter.SortOrder, filter.QuestionText, filter.QuestionType, filter.Score, filter.order, 
            //    totalRecords).ToList();
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        //////public void UpdateRiskAssessmentTrainingRequired(int RiskAssessmentId)
        ////{
        ////    var data = GetSingle(RiskAssessmentId);
        ////    data.TrainingRequired = true;
        ////    Update(data);
        ////}
        //public void UpdateSignatureDate(int UserId, int RiskAssessmentId)
        //{
        //    base.RepositoryContext.SP_UpdateRiskAssessmentSignatureDate(UserId, RiskAssessmentId);
        //}

        //public List<SignedUserList> GetSignedUserList(int RiskAssessmentId)
        //{
        //    var data = base.RepositoryContext.SP_GetSignedUserList(RiskAssessmentId).ToList();
        //    return Mapper.Map<List<SP_GetSignedUserList_Result>, List<SignedUserList>>(data);
        //}

    }
}
