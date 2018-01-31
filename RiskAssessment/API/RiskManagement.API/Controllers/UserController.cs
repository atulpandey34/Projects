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

namespace RiskManagement.API.Controllers
{

    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/user")]
    public class UserController : APIBaseController
    {
        private ISecurityQuestionRepository _ISecurityQuestionRepository = null;
        private IUserRepository _IUserRepository = null;
        private CacheManagement _caching = null;
        public UserController()
        {
            UnitOfWork _unitOfWork = new UnitOfWork();
            this._IUserRepository = new UserRepository(_unitOfWork);
            this._ISecurityQuestionRepository = new SecurityQuestionRepository(_unitOfWork);
            this._caching = new CacheManagement();
        }
        [HttpPost]
        public string AddUser(UserViewModel model)
        {
            this._IUserRepository.AddUser(model, base.UserId, base.OrganizationId);
            return "User added successfully";
        }
        [HttpGet]
        public bool ValidateUserEmail(string email, int userId)
        {
            return this._IUserRepository.ValidateUserEmail(email, userId, base.OrganizationId);
        }
        [HttpGet]
        public bool ValidateUserName(string userName, int userId)
        {
            return this._IUserRepository.ValidateUserName(userName, userId, base.OrganizationId);
        }
        [HttpGet]
        public UserViewModel GetSingle(int id)
        {
            return this._IUserRepository.GetSingle(id, base.OrganizationId);
        }
        [HttpGet]
        public string DeleteUser(int id)
        {
            this._IUserRepository.Delete(id, base.UserId, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public UserViewList GetAllUser(int PageNo, int PageSize, string sortColumn, string sortOrder, bool? inactiveFilter, string OrganizationFilte = "", string RoleFilter = ""
            , string userName = "", string firstName = "", string lastName = "", string emailId = "")
        {
            return this._IUserRepository.GetUserList(inactiveFilter, PageNo, PageSize, sortColumn, sortOrder, OrganizationFilte, RoleFilter, userName, firstName, lastName, emailId, base.UserId, base.OrganizationId);

        }

        [HttpPost]
        public string ResetPassword(ResetPassswordModel model)
        {
            this._IUserRepository.ResetPassword(model, base.UserId, base.OrganizationId);
            return "Password updated successfully";
        }

        [HttpGet]
        public UserMenuModel GetUserInformation()
        {
            UserMenuModel model = new UserMenuModel();
            var data = this._IUserRepository.GetSingle(base.UserId, base.OrganizationId);
            model.FirstName = data.FirstName;
            model.LastName = data.LastName;
            model.AddedDate = Convert.ToDateTime(data.Addedon).ToString("MMMM yyyy");
            model.UserId = data.UserID;
            return model;
        }
        [HttpGet]
        public void UpdateInactive(int id, bool status)
        {
            this._IUserRepository.UpdateInactive(id, status, base.OrganizationId);
        }
        [HttpGet]
        public void ResetPassword(int id)
        {
            this._IUserRepository.ResetPassword(id, base.OrganizationId);
        }
        [HttpPost]
        public string ChangePassword(UserResetPassword model)
        {
            this._IUserRepository.ChangePassword(model, base.UserId, base.OrganizationId);
            return "done";
        }
        [HttpGet]
        public bool VerifyPassword(string password)
        {
            return this._IUserRepository.VerifyPassword(password, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<SecurityQuestionModel> GetAllSecurityQuestion()
        {
            return this._ISecurityQuestionRepository.GetAllSecurityQuestion(base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<GetUserWithRoleViewResult> GetUserWithRole()
        {
            return this._IUserRepository.GetUserWithRole(base.UserId, base.OrganizationId);
        }
    }
}
