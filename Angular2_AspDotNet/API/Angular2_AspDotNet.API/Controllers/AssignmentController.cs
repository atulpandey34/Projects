using System.Web.Http;
using System.Collections.Generic;
using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Repository;
using Angular2_AspDotNet.Data.UnitOfWork;
using System.Linq;
using Angular2_AspDotNet.Data;
using System.Web.Http.Cors;
using System;

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Assignment/")]
    public class AssignmentController : APIBaseController
    {
        private IAssignmentQuestionRepository _IAssignmentQuestionRepository = null;
        private IAssignmentRepository _IAssignmentRepository = null;
        // private IMonitoringMethodRepository _IMonitoringMethodRepository = null;
        // private IDurationUnitRepository _IDurationUnitRepository = null;
        private CacheManagement _caching = null;
        public AssignmentController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();

            this._IAssignmentQuestionRepository = new AssignmentQuestionRepository(unitOfWork);
            this._IAssignmentRepository = new AssignmentRepository(unitOfWork);
            // this._IMonitoringMethodRepository = new MonitoringMethodRepository(unitOfWork);
            // this._IDurationUnitRepository = new DurationUnitRepository(unitOfWork);
            this._caching = new CacheManagement();
        }

        [HttpPost]
        public int AddUpdateAssignment(AssignmentListFilterModel model)
        {
            return this._IAssignmentRepository.AddUpdateAssignment(model, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public int AddUpdateQuestionAssignment(AssignmentListQuestionFilterModel model)
        {
            return this._IAssignmentQuestionRepository.AddUpdateQuestionAssignment(model,base.UserId, base.UserId, base.OrganizationId);
        }
        //[HttpPost]
        //public AssignmentListData GetAssignmentListData(AssignmentListFilterModel filter)
        //{
        //    return this._IAssignmentQuestionRepository.GetAssignmentListdata(filter);
        //}
        [HttpGet]
        public List<AssignmentListFilterModel> GetAllAssignment()
        {
            return this._IAssignmentRepository.GetAllAssignment( base.UserId, base.OrganizationId);
        }
        // [HttpGet]
        //    public List<DurationUnitModel> GetAllDurationUnit()
        //    {
        //        return this._IDurationUnitRepository.GetAllDurationUnit();
        //    }
        //    [HttpGet]
        //    public List<MonitoringMethodModel> GetAllMonitoringMethod()
        //    {
        //        return this._IMonitoringMethodRepository.GetAllMonitoringMethod();
        //    }
        //    [HttpPost]
        //    public int AddUpdateRiskAssessment(RiskAssessmentViewModel model)
        //    {
        //        string token = Request.Headers.Authorization.ToString();
        //        return this._IRiskAssessmentRepository.AddUpdateRiskAssessment(model, this._caching.GetSessionData(token).UserId);
        //    }
        // [HttpGet]
        //    public RiskAssessmentViewModel GetSingleWithTeam(int id)
        //    {
        //        return this._IRiskAssessmentRepository.GetSingleWithTeam(id);
        //    }

        [HttpGet]
        public AssignmentListFilterModel GetAssginmentListWithAssignmentId(int id)
        {
            return this._IAssignmentRepository.GetAssginmentListWithAssignmentId(id, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public AssignmentListViewResult GetAssignmentListData(AssignmentListFilterModel filter)
        {
            return this._IAssignmentRepository.GetAssignmentListData(filter, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public string Delete(int id)
        {
            this._IAssignmentQuestionRepository.Delete(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public string DeleteAssigment(int id)
        {
            this._IAssignmentRepository.DeleteAssignment(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public string UpdateAssignmentStatus(int id)
        {
            this._IAssignmentQuestionRepository.UpdateAssignmentStatus(id, base.UserId, base.OrganizationId);
            return "";
        }

        [HttpGet]
        public List<AssignmentQuestionViewModel> GetQuestionOptionList(int id)
        {
            return this._IAssignmentQuestionRepository.GetQuestionOptionList(id, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public string DeleteQuestionWithOption(int id)
        {
            this._IAssignmentQuestionRepository.DeleteQuestionWithOption(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public AssignmentListQuestionFilterModel GetQuestionDetailData(int id)
        {
            return this._IAssignmentQuestionRepository.GetQuestionDetailData(id, base.UserId, base.OrganizationId);
        }

        // [HttpGet]
        //    public string UpdateRiskAssessmentTrainingRequired(int id)
        //    {
        //        this._IRiskAssessmentRepository.UpdateRiskAssessmentTrainingRequired(id);
        //        return "";
        //    }
        //    [HttpGet]
        //    public string UpdateSignatureDate(int id)
        //    {
        //        string token = Request.Headers.Authorization.ToString();
        //        this._IRiskAssessmentRepository.UpdateSignatureDate(this._caching.GetSessionData(token).UserId, id);
        //        return "";
        //    }

        //    [HttpGet]
        //    public List<SignedUserList> GetSignedUserList(int id)
        //    {
        //        return this._IRiskAssessmentRepository.GetSignedUserList(id);
        //    }
    }
}
