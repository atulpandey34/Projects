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
    [RoutePrefix("api/RiskAssessment")]
    public class RiskAssessmentController : APIBaseController
    {
        private IRiskAssessmentRepository _IRiskAssessmentRepository = null;
        private IHazardRepository _IHazardRepository = null;
        private IMonitoringMethodRepository _IMonitoringMethodRepository = null;
        private IDurationUnitRepository _IDurationUnitRepository = null;
        private CacheManagement _caching = null;
        public RiskAssessmentController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._IRiskAssessmentRepository = new RiskAssessmentRepository(unitOfWork);
            this._IHazardRepository = new HazardRepository(unitOfWork);
            this._IMonitoringMethodRepository = new MonitoringMethodRepository(unitOfWork);
            this._IDurationUnitRepository = new DurationUnitRepository(unitOfWork);
            this._caching = new CacheManagement();
        }
        [HttpGet]
        public List<HazardModel> GetAllHazard()
        {
            return this._IHazardRepository.GetAllHazard(base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<DurationUnitModel> GetAllDurationUnit()
        {
            return this._IDurationUnitRepository.GetAllDurationUnit(base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<MonitoringMethodModel> GetAllMonitoringMethod()
        {
            return this._IMonitoringMethodRepository.GetAllMonitoringMethod(base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public int AddUpdateRiskAssessment(RiskAssessmentViewModel model)
        {
            return this._IRiskAssessmentRepository.AddUpdateRiskAssessment(model, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public int AddUpdateRiskAssessmentHazard(RiskAssessmentHazardViewModel model)
        {
            return this._IRiskAssessmentRepository.AddUpdateRiskAssessmentHazard(model, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public RiskAssessmentViewModel GetSingleWithTeam(int id)
        {
            return this._IRiskAssessmentRepository.GetSingleWithTeam(id, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<HazardListModel> GetHazardListWithRiskAssessmentId(int id)
        {
            return this._IRiskAssessmentRepository.GetHazardListWithRiskAssessmentId(id, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public RiskAssessmentListData GetRiskAssessmentListData(RiskAssessmentListFilterModel filter)
        {
            return this._IRiskAssessmentRepository.GetRiskAssessmentListData(filter, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public string Delete(int id)
        {
            this._IRiskAssessmentRepository.Delete(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public string UpdateRiskAssessmentStatus(int id)
        {
            this._IRiskAssessmentRepository.UpdateRiskAssessmentStatus(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public string UpdateRiskAssessmentTrainingRequired(int id)
        {
            this._IRiskAssessmentRepository.UpdateRiskAssessmentTrainingRequired(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public string UpdateSignatureDate(int id)
        {
            this._IRiskAssessmentRepository.UpdateSignatureDate(base.UserId, id, base.OrganizationId);
            return "";
        }

        [HttpGet]
        public List<SignedUserList> GetSignedUserList(int id)
        {
            return this._IRiskAssessmentRepository.GetSignedUserList(id, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public string UpdateReviewDate(int id)
        {
            this._IRiskAssessmentRepository.UpdateReviewDate(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public int ReviewRiskAssessment(int id)
        {
            return this._IRiskAssessmentRepository.ReviewRiskAssessment(id, base.UserId, base.OrganizationId);

        }
        [HttpGet]
        public RiskAssessmentHazardViewModel GetRiskAssessmentHazardData(int id)
        {
            return this._IRiskAssessmentRepository.GetRiskAssessmentHazardData(id, base.UserId, base.OrganizationId);
        }
    }
}
