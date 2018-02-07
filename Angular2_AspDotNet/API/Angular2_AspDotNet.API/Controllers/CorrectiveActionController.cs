using RiskManagement.Data.UnitOfWork;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/CorrectiveAction")]
    public class CorrectiveActionController : APIBaseController
    {
       
        public CorrectiveActionController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._CorrectiveActionnRepository = new CorrectiveActionRepository(unitOfWork);
            
        }

        private ICorrectiveActionRepository _CorrectiveActionnRepository = null;

        [HttpGet]
        public List<CorrectiveActionModel> GetAllList()
        {
            return this._CorrectiveActionnRepository.GetAllCorrectionAction(base.UserId, base.OrganizationId).ToList();
        }
        [HttpPost]
        public string AddUpdateCorrectiveAction(CorrectiveActionModel model)
        {
            this._CorrectiveActionnRepository.AddUpdateAction(model, base.UserId, base.OrganizationId);
            return "action added";
        }
        [HttpGet]
        public CorrectiveActionDataModel GetCorrectiveActionByActionId(int actionId)
        {
            return this._CorrectiveActionnRepository.GetCorrectiveActionByActionId(actionId, base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public string AddCorrectiveActionFromAction(CorrectiveActionDataModel model)
        {
            this._CorrectiveActionnRepository.AddCorrectiveActionFromAction(model, base.UserId, base.UserId, base.OrganizationId);
            return "added successfully";
        }
        [HttpPost]
        public CorrectiveActionList GetCorrectiveActionList(CorretiveActionListPageFilterModel filterModel)
        {
            return this._CorrectiveActionnRepository.GetCorrectiveActionList(filterModel, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public CorrectiveActionDataModel GetCorrectiveData(int CorrectiveActionDataID)
        {
            return this._CorrectiveActionnRepository.GetSingle(CorrectiveActionDataID, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public void DeleteCorrectiveAction(int CorrectiveActionId)
        {
            this._CorrectiveActionnRepository.DeleteCorrectiveAction(CorrectiveActionId, base.UserId, base.OrganizationId);
        }
    }
}
