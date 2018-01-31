using System.Web.Http;
using System.Collections.Generic;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Models;
using RiskManagement.Repository.Repository;
using RiskManagement.Data.UnitOfWork;
using System.Linq;
using RiskManagement.Data;
using System.Web.Http.Cors;
using System;
using RiskManagement.API;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/securityquestion")]
    public class SecurityQuestionController : APIBaseController
    {
        private ISecurityQuestionRepository _ISecurityQuestionRepository = null;
        private IUserRepository _IUserRepository = null;
        public SecurityQuestionController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._ISecurityQuestionRepository = new SecurityQuestionRepository(_unitOfWork);
            this._IUserRepository = new UserRepository(_unitOfWork);
        }
        [HttpGet]
        public List<SecurityQuestionModel> GetAll()
        {
            return this._ISecurityQuestionRepository.GetAllSecurityQuestion(base.UserId, base.OrganizationId);
        }

       
    }
}
