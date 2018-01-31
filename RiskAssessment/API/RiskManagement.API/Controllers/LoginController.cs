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
using StructureMap;
using System.Web;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/login")]
    [CustomExceptionLogFilter]
    public class LoginController : ApiController
    {
        private IUserRepository _IUserRepository = null;
        private CacheManagement _caching = null;
        private ISecurityQuestionRepository _ISecurityQuestionRepository = null;
        public LoginController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._IUserRepository = new UserRepository(_unitOfWork);
            this._ISecurityQuestionRepository = new SecurityQuestionRepository(_unitOfWork);
            this._caching = new CacheManagement();
        }
        [HttpGet]
        public LoggedInUserModel LoginUser(string userName, string password)
        {
            string token = Guid.NewGuid().ToString();
            LoggedInUserModel model = this._IUserRepository.ValidateUserLogin(userName, password, 0, 0);
            var dic = new Dictionary<string, SessionData>();
            SessionData sessionData = new SessionData();
            sessionData.UserId = model.UserId;
            sessionData.OrganizationId = model.OrganizationId;
            sessionData.RoleId = model.RoleList;
            sessionData.ExpirationDate = DateTime.Now.AddHours(2);
            dic.Add(token, sessionData);
            this._caching.SessionModel = dic;
            model.Token = token;
            return model;
        }
        [HttpGet]
        public LoggedInUserModel LoginEncryptedUser(string userName, string password)
        {
            string token = Guid.NewGuid().ToString();
            LoggedInUserModel model = this._IUserRepository.ValidateEncryptedUserLogin(userName, password, 0, 0);
            var dic = new Dictionary<string, SessionData>();
            SessionData sessionData = new SessionData();
            sessionData.UserId = model.UserId;
            sessionData.OrganizationId = model.OrganizationId;
            sessionData.RoleId = model.RoleList;
            sessionData.ExpirationDate = DateTime.Now.AddHours(2);
            dic.Add(token, sessionData);
            this._caching.SessionModel = dic;
            model.Token = token;
            return model;
        }
        [HttpGet]
        public void Logout()
        {
            SessionHelper.Abandon();
            try
            {
                this._caching.DeleteSession(Request.Headers.Authorization.ToString());
            }
            catch
            { }
        }

        [HttpPost]
        public string ForgotPassword(ForgotPassswordModel model)
        {
            string token = Request.Headers.Authorization.ToString();
            int UserId = this._caching.GetSessionData(token).UserId;
            int OrganizationId = this._caching.GetSessionData(token).OrganizationId;

            bool result = this._IUserRepository.ForgotPassword(model, UserId, OrganizationId);
            if (result)
                return "Password sent successfully";
            else
                return "UserName doesn't exists";
        }
        [HttpGet]
        public SecurityQustionOfUserModel GetSecurityQuestinOfUser(string UserName)
        {
            string token = Request.Headers.Authorization.ToString();
            int UserId = this._caching.GetSessionData(token).UserId;
            int OrganizationId = this._caching.GetSessionData(token).OrganizationId;

            return this._IUserRepository.GetSecurityQuestionOfUser(UserName, UserId, OrganizationId);
        }
    }
}
