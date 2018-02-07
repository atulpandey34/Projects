using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class RiskAssessmentRepository : RepositoryBase<Angular2_AspDotNet.Data.RiskAssessment>, IRiskAssessmentRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        private IRiskAssessmentTeamRepository _IRiskAssessmentTeamRepository = null;
        private IRiskAssessmentHazardRepository _IRiskAssessmentHazardRepository = null;
        private IRiskAssessmentHazardMeasureRepository _IRiskAssessmentHazardMeasureRepository = null;
        private IRiskAssessmentHazardReviewRepository _IRiskAssessmentHazardReviewRepository = null;
        private IActionRepository _IActionRepository = null;
        private IRiskAssessmentReviewRepository _IRiskAssessmentReviewRepository = null;
        public RiskAssessmentRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IRiskAssessmentTeamRepository = new RiskAssessmentTeamRepository(unitOfWork);
            this._IRiskAssessmentHazardRepository = new RiskAssessmentHazardRepository(unitOfWork);
            this._IRiskAssessmentHazardMeasureRepository = new RiskAssessmentHazardMeasureRepository(unitOfWork);
            this._IRiskAssessmentHazardReviewRepository = new RiskAssessmentHazardReviewRepository(unitOfWork);
            this._IActionRepository = new ActionRepository(unitOfWork);
            this._IRiskAssessmentReviewRepository = new RiskAssessmentReviewRepository(unitOfWork);
        }
        public void Add(Angular2_AspDotNet.Data.RiskAssessment entity, int Userid, int OrganizationId)
        {
            entity.OrganizationId = OrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int Userid, int OrganizationId)
        {
            var data = GetSingle(id, Userid, OrganizationId);
            data.IsDeleted = true;
            Update(data);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<RiskAssessment> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }



        public RiskAssessment GetSingle(int id, int Userid, int OrganizationId)
        {
            return base.Get(x => x.RiskAssessmentId == id && x.OrganizationId == OrganizationId);
        }
        public RiskAssessmentViewModel GetSingleWithTeam(int id, int Userid, int OrganizationId)
        {
            RiskAssessment data = GetSingle(id, Userid, OrganizationId);
            RiskAssessmentViewModel model = Mapper.Map<RiskAssessment, RiskAssessmentViewModel>(data);
            var teams = this._IRiskAssessmentTeamRepository.GetAllWithRiskAssessmentId(model.RiskAssessmentId, Userid, OrganizationId);
            if (teams != null && teams.Any())
            {
                model.RiskAssessmentTeamViewModel = Mapper.Map<List<RiskAssessmentTeam>, List<RiskAssessmentTeamViewModel>>(teams);
            }
            return model;
        }

        public void Update(RiskAssessment entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public int AddUpdateRiskAssessment(RiskAssessmentViewModel model, int Userid, int OrganizationId)
        {
            RiskAssessment riskAssessment = Mapper.Map<RiskAssessmentViewModel, RiskAssessment>(model);

            if (model.RiskAssessmentId == 0)
            {
                riskAssessment.Status = 0;
                riskAssessment.IsArchived = false;
                riskAssessment.OrganizationId = OrganizationId;
                base.Insert(riskAssessment);
                this._unitOfWork.Save();
            }
            else
            {
                riskAssessment = GetSingle(model.RiskAssessmentId, Userid, OrganizationId);
                riskAssessment.Area = model.Area;
                riskAssessment.AssessmentDate = model.AssessmentDate;
                riskAssessment.ReviewDuration = model.ReviewDuration;
                riskAssessment.ReviewDurationUnit = model.ReviewDurationUnit;
                riskAssessment.ReviewDate = DateTime.Now;
                riskAssessment.TrainingRequired = model.TrainingRequired;
                base.Update(riskAssessment);
            }
            base.RepositoryContext.SP_DeleteAllRiskAssessmentTeam(riskAssessment.RiskAssessmentId, OrganizationId);
            if (model.RiskAssessmentTeamViewModel != null && model.RiskAssessmentTeamViewModel.Any())
            {
                foreach (RiskAssessmentTeamViewModel viewModel in model.RiskAssessmentTeamViewModel)
                {
                    RiskAssessmentTeam riskAssessmentTeam = Mapper.Map<RiskAssessmentTeamViewModel, RiskAssessmentTeam>(viewModel);
                    riskAssessmentTeam.RiskAssessmentId = riskAssessment.RiskAssessmentId;
                    riskAssessmentTeam.OrganizationId = OrganizationId;
                    this._IRiskAssessmentTeamRepository.Add(riskAssessmentTeam, Userid,OrganizationId);
                }
            }
            if (model.RiskAssessmentHazardViewModel != null && model.RiskAssessmentHazardViewModel.Any())
            {
                foreach (RiskAssessmentHazardViewModel viewModel in model.RiskAssessmentHazardViewModel)
                {
                    RiskAssessmentHazard riskAssessmentHazard = Mapper.Map<RiskAssessmentHazardViewModel, RiskAssessmentHazard>(viewModel);
                    riskAssessmentHazard.OrganizationId = OrganizationId;
                    this._IRiskAssessmentHazardRepository.Add(riskAssessmentHazard, Userid, OrganizationId);
                    if (viewModel.RiskAssessmentHazardMeasureViewModel != null && viewModel.RiskAssessmentHazardMeasureViewModel.Any())
                    {
                        foreach (RiskAssessmentHazardMeasureViewModel viewModel1 in viewModel.RiskAssessmentHazardMeasureViewModel)
                        {
                            RiskAssessmentHazardMeasure riskAssessmentHazardMeasure = Mapper.Map<RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardMeasure>(viewModel1);
                            riskAssessmentHazardMeasure.OrganizationId = OrganizationId;
                            this._IRiskAssessmentHazardMeasureRepository.Add(riskAssessmentHazardMeasure, Userid, OrganizationId);
                        }
                    }
                    if (viewModel.RiskAssessmentHazardReviewViewModel != null && viewModel.RiskAssessmentHazardReviewViewModel.Any())
                    {
                        foreach (RiskAssessmentHazardReviewViewModel viewModel2 in viewModel.RiskAssessmentHazardReviewViewModel)
                        {
                            RiskAssessmentHazardReview riskAssessmentHazardReview = Mapper.Map<RiskAssessmentHazardReviewViewModel, RiskAssessmentHazardReview>(viewModel2);
                            riskAssessmentHazardReview.CreatedDate = DateTime.Now;
                            riskAssessmentHazardReview.UpdatedDate = DateTime.Now;
                            riskAssessmentHazardReview.OrganizationId = OrganizationId;
                            this._IRiskAssessmentHazardReviewRepository.Add(riskAssessmentHazardReview, Userid, OrganizationId);
                        }
                    }
                }
            }
            this._unitOfWork.Save();
            return riskAssessment.RiskAssessmentId;
        }
        public RiskAssessmentHazardViewModel GetRiskAssessmentHazardData(int hazardId, int Userid, int OrganizationId)
        {
            RiskAssessmentHazardViewModel model = new RiskAssessmentHazardViewModel();
            model.RiskAssessmentHazardMeasureViewModel = new List<RiskAssessmentHazardMeasureViewModel>();
            model.RiskAssessmentHazardReviewViewModel = new List<RiskAssessmentHazardReviewViewModel>();
            var hazard = this._IRiskAssessmentHazardRepository.GetSingle(hazardId, Userid, OrganizationId);
            model = Mapper.Map<RiskAssessmentHazard, RiskAssessmentHazardViewModel>(hazard);
            var hazardReview = this._IRiskAssessmentHazardReviewRepository.GetSingleWithHazardId(hazardId, Userid, OrganizationId);
            if (hazardReview != null && hazardReview.Any())
            {
                foreach (RiskAssessmentHazardReview viewModel2 in hazardReview)
                {
                    model.RiskAssessmentHazardReviewViewModel.Add(Mapper.Map<RiskAssessmentHazardReview, RiskAssessmentHazardReviewViewModel>(viewModel2));
                }
            }
            var hazardMeasure = this._IRiskAssessmentHazardMeasureRepository.GetSingleWithHazardId(hazardId, Userid, OrganizationId);
            if (hazardMeasure != null && hazardMeasure.Any())
            {
                foreach (RiskAssessmentHazardMeasure viewModel2 in hazardMeasure)
                {
                    model.RiskAssessmentHazardMeasureViewModel.Add(Mapper.Map<RiskAssessmentHazardMeasure, RiskAssessmentHazardMeasureViewModel>(viewModel2));
                }
            }
            return model;
        }
        public int AddUpdateRiskAssessmentHazard(RiskAssessmentHazardViewModel model, int Userid, int OrganizationId)
        {
            //if (model.IsReadyForReview)
            //{
            //    base.RepositoryContext.SP_SerRiskAssessmentReviewDate(model.RiskAssessmentHarardId);
            //}
            base.RepositoryContext.sp_DeleteHazardReviewAndMeasure(model.RiskAssessmentHarardId, OrganizationId);
            RiskAssessmentHazard riskAssessmentHazard = Mapper.Map<RiskAssessmentHazardViewModel, RiskAssessmentHazard>(model);
            if (model.RiskAssessmentHarardId == 0)
            {
                riskAssessmentHazard.OrganizationId = OrganizationId;
                this._IRiskAssessmentHazardRepository.Add(riskAssessmentHazard, Userid, OrganizationId);
            }
            else
            {
                var data = this._IRiskAssessmentHazardRepository.GetSingle(model.RiskAssessmentHarardId, Userid, OrganizationId);
                data.Description = model.Description;
                this._IRiskAssessmentHazardRepository.Update(data, Userid, OrganizationId);
            }
            RiskAssessmentHazardReview riskAssessmentHazardReview = new RiskAssessmentHazardReview();
            if (model.RiskAssessmentHazardReviewViewModel != null && model.RiskAssessmentHazardReviewViewModel.Any())
            {
                foreach (RiskAssessmentHazardReviewViewModel viewModel2 in model.RiskAssessmentHazardReviewViewModel)
                {
                    riskAssessmentHazardReview = Mapper.Map<RiskAssessmentHazardReviewViewModel, RiskAssessmentHazardReview>(viewModel2);
                    riskAssessmentHazardReview.CreatedDate = DateTime.Now;
                    riskAssessmentHazardReview.UpdatedDate = DateTime.Now;
                    riskAssessmentHazardReview.RiskAssessmentHazardId = riskAssessmentHazard.RiskAssessmentHarardId;
                    riskAssessmentHazardReview.OrganizationId = OrganizationId;
                    this._IRiskAssessmentHazardReviewRepository.Add(riskAssessmentHazardReview, Userid, OrganizationId);
                }
            }
            if (model.RiskAssessmentHazardMeasureViewModel != null && model.RiskAssessmentHazardMeasureViewModel.Any())
            {
                foreach (RiskAssessmentHazardMeasureViewModel viewModel1 in model.RiskAssessmentHazardMeasureViewModel)
                {
                    RiskAssessmentHazardMeasure riskAssessmentHazardMeasure = Mapper.Map<RiskAssessmentHazardMeasureViewModel, RiskAssessmentHazardMeasure>(viewModel1);
                    riskAssessmentHazardMeasure.RiskAssessmentHazardId = riskAssessmentHazard.RiskAssessmentHarardId;
                    riskAssessmentHazardMeasure.RiskAssessmentId = riskAssessmentHazard.RiskAssessmentId;
                    riskAssessmentHazardMeasure.DateAdded = DateTime.Now;
                    riskAssessmentHazardMeasure.RiskAssessmentHazardReviewId = riskAssessmentHazardReview.RiskAssessmentHazardReviewId;
                    riskAssessmentHazardMeasure.OrganizationId = OrganizationId;
                    this._IRiskAssessmentHazardMeasureRepository.Add(riskAssessmentHazardMeasure, Userid, OrganizationId);
                    if (viewModel1.ActionId == 1)
                    {
                        Angular2_AspDotNet.Data.Action action = new Angular2_AspDotNet.Data.Action();
                        action.SourceID = riskAssessmentHazardMeasure.RiskAssessmentHazardMeasureId;
                        action.Title = riskAssessmentHazardMeasure.Text;
                        action.Duedate = DateTime.Now.AddDays(7);
                        action.ActionSourceID = 4;
                        action.IsActionRequired = true;
                        action.CategoryID = 7;
                        action.OrganizationID = OrganizationId;
                        this._IActionRepository.Add(action, Userid, OrganizationId);
                    }
                }
            }
            //RiskAssessment riskAssessment = GetSingle(Convert.ToInt32(riskAssessmentHazard.RiskAssessmentId));
            //riskAssessment.ReviewDate = DateTime.Now;
            //Update(riskAssessment);
            this._unitOfWork.Save();
            return riskAssessmentHazard.RiskAssessmentHarardId;
        }

        public List<HazardListModel> GetHazardListWithRiskAssessmentId(int RiskAssessmentId, int Userid, int OrganizationId)
        {
            var data = base.RepositoryContext.SP_GetRiskAssessmentHazardList(RiskAssessmentId, OrganizationId).ToList();
            var list = Mapper.Map<List<SP_GetRiskAssessmentHazardList_Result>, List<HazardListModel>>(data);
            return list;
        }

        public RiskAssessmentListData GetRiskAssessmentListData(RiskAssessmentListFilterModel filter, int Userid, int OrganizationId)
        {
            RiskAssessmentListData list = new RiskAssessmentListData();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetRiskAssessmentList(filter.PageNo, filter.PageSize, filter.SortColumn, filter.SortOrder
                , filter.SubjectFilter, filter.AssessmentDateFilter, filter.DurationUnitFilter, filter.ResponsibleTeamFilter, OrganizationId, totalRecords).ToList();
            list.RiskAssessmentListResult = Mapper.Map<List<SP_GetRiskAssessmentList_Result>, List<RiskAssessmentListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }

        public void UpdateRiskAssessmentStatus(int RiskAssessmentId, int Userid, int OrganizationId)
        {
            var data = GetSingle(RiskAssessmentId, Userid, OrganizationId);
            data.Status = 1;
            Update(data);
        }
        public void UpdateRiskAssessmentTrainingRequired(int RiskAssessmentId, int Userid, int OrganizationId)
        {
            var data = GetSingle(RiskAssessmentId, Userid, OrganizationId);
            data.TrainingRequired = true;
            Update(data);
        }
        public void UpdateSignatureDate(int UserId, int RiskAssessmentId, int OrganizationId)
        {
            base.RepositoryContext.SP_UpdateRiskAssessmentSignatureDate(UserId, RiskAssessmentId, OrganizationId);
        }
        public void UpdateReviewDate(int RiskAssessmentId, int Userid, int OrganizationId)
        {
            RiskAssessmentReview review = new RiskAssessmentReview();
            review.RiskAssessmentId = RiskAssessmentId;
            review.ReviewDate = DateTime.Now;
            review.OrganizationId = OrganizationId;
            this._IRiskAssessmentReviewRepository.Add(review, Userid, OrganizationId);
            this._unitOfWork.Save();
        }
        public List<SignedUserList> GetSignedUserList(int RiskAssessmentId, int Userid, int OrganizationId)
        {
            var data = base.RepositoryContext.SP_GetSignedUserList(RiskAssessmentId, OrganizationId).ToList();
            return Mapper.Map<List<SP_GetSignedUserList_Result>, List<SignedUserList>>(data);
        }
        public int ReviewRiskAssessment(int id, int Userid, int OrganizationId)
        {
            var data = GetSingle(id, Userid, OrganizationId);
            data.IsArchived = true;
            Update(data);

            // Adding changes to generate new riskassessment
            RiskAssessment riskAssessment = new RiskAssessment();
            riskAssessment.IsArchived = false;
            riskAssessment.Status = 0;
            riskAssessment.Area = data.Area;
            riskAssessment.AssessmentDate = DateTime.Now;
            riskAssessment.ReviewDuration = data.ReviewDuration;
            riskAssessment.ReviewDurationUnit = data.ReviewDurationUnit;
            riskAssessment.TrainingRequired = data.TrainingRequired;
            riskAssessment.IsDeleted = false;
            riskAssessment.OrganizationId = OrganizationId;
            base.Insert(riskAssessment);
            this._unitOfWork.Save();

            var riskAssessmentTeamList = this._IRiskAssessmentTeamRepository.GetAllWithRiskAssessmentId(id, Userid, OrganizationId);
            if (riskAssessmentTeamList != null && riskAssessmentTeamList.Any())
            {
                foreach (var riskTeam in riskAssessmentTeamList)
                {
                    RiskAssessmentTeam riskAssessmentTeam = new RiskAssessmentTeam();
                    riskAssessmentTeam.RiskAssessmentId = riskAssessment.RiskAssessmentId;
                    riskAssessmentTeam.UserId = riskTeam.UserId;
                    riskAssessmentTeam.SignedDate = riskTeam.SignedDate;
                    riskAssessmentTeam.OrganizationId = OrganizationId;
                    this._IRiskAssessmentTeamRepository.Add(riskAssessmentTeam, Userid, OrganizationId);
                }
            }

            var riskAssessmentHazardList = this._IRiskAssessmentHazardRepository.GetAllWithRiskAssessmentId(id,Userid,OrganizationId);
            if (riskAssessmentHazardList != null && riskAssessmentHazardList.Any())
            {
                foreach (var riskAssessmentHazard in riskAssessmentHazardList)
                {
                    RiskAssessmentHazard hazard = new RiskAssessmentHazard();
                    hazard.RiskAssessmentId = riskAssessment.RiskAssessmentId;
                    hazard.HazardId = riskAssessmentHazard.HazardId;
                    hazard.Description = riskAssessmentHazard.Description;
                    hazard.OrganizationId = OrganizationId;
                    this._IRiskAssessmentHazardRepository.Add(hazard, Userid, OrganizationId);

                    var riskAssessmentHazardReview = this._IRiskAssessmentHazardReviewRepository.GetSingleWithHazardId(riskAssessmentHazard.RiskAssessmentHarardId,Userid,OrganizationId);
                    RiskAssessmentHazardReview review = new RiskAssessmentHazardReview();
                    if (riskAssessmentHazardReview != null)
                    {

                        review.RiskAssessmentHazardId = hazard.RiskAssessmentHarardId;
                        review.CreatedDate = DateTime.Now;
                        review.UpdatedDate = DateTime.Now;
                        review.Consequence = riskAssessmentHazardReview.First().Consequence;
                        review.Likelihood = riskAssessmentHazardReview.First().Likelihood;
                        review.MonitoringMethodId = riskAssessmentHazardReview.First().MonitoringMethodId;
                        this._IRiskAssessmentHazardReviewRepository.Add(review, Userid, OrganizationId);
                    }

                    var riskAssessmentHazardMeasure = this._IRiskAssessmentHazardMeasureRepository.GetSingleWithHazardId(riskAssessmentHazard.RiskAssessmentHarardId, Userid, OrganizationId);
                    if (riskAssessmentHazardMeasure != null && riskAssessmentHazardMeasure.Any())
                    {
                        foreach (var measure in riskAssessmentHazardMeasure)
                        {
                            RiskAssessmentHazardMeasure riskMeasure = new RiskAssessmentHazardMeasure();
                            riskMeasure.RiskAssessmentId = riskAssessment.RiskAssessmentId;
                            riskMeasure.RiskAssessmentHazardId = hazard.RiskAssessmentHarardId;
                            riskMeasure.Text = measure.Text;
                            riskMeasure.DateAdded = DateTime.Now;
                            riskMeasure.RiskAssessmentHazardReviewId = review.RiskAssessmentHazardReviewId;
                            riskMeasure.ActionId = measure.ActionId;
                            riskMeasure.OrganizationId = OrganizationId;
                            this._IRiskAssessmentHazardMeasureRepository.Add(riskMeasure, Userid, OrganizationId);
                        }
                    }
                }
            }
            this._unitOfWork.Save();
            // changes ends here

            return riskAssessment.RiskAssessmentId;
        }
    }
}
