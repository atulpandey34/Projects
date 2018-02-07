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
using Angular2_AspDotNet.API;

namespace Angular2_AspDotNet.API.Controllers
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
