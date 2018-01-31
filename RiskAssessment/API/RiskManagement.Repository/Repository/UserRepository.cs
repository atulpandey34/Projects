using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Data.Entity.Core.Objects;
using System.Linq;
using RiskManagement.Security;
using System.Text;
using RiskManagement.Core;
using System.Web;

namespace RiskManagement.Repository.Repository
{
    public class UserRepository : RepositoryBase<RiskManagement.Data.User>, IUserRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IUserRoleRepository _IUserRoleRepository = null;

        public UserRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IUserRoleRepository = new UserRoleRepository(this._unitOfWork);
        }
        public void Add(RiskManagement.Data.User entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Insert(entity);
           _unitOfWork.Save();
        }

        public void Delete(int id, int Userid, int OrganizationId)
        {
            base.RepositoryContext.SP_DeleteUser(id, OrganizationId);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<User> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationID == LoggedInOrganizationId);
        }

        public IEnumerable<RiskManagement.Models.UserModel> GetAllUser(int Userid, int OrganizationId)
        {
            var userList = base.GetAll(x => x.OrganizationID == OrganizationId).OrderBy(u => u.FirstName).ThenBy(x => x.LastName);
            return Mapper.Map<IEnumerable<User>, IEnumerable<RiskManagement.Models.UserModel>>(userList);
        }

        public IEnumerable<RiskManagement.Models.UserModel> GetAllauditor(int OrganizationId)
        {
            var userList = base.GetAll(x => x.OrganizationID == OrganizationId).OrderBy(u => u.FirstName).ThenBy(x => x.LastName);
            return Mapper.Map<IEnumerable<User>, IEnumerable<RiskManagement.Models.UserModel>>(userList);
        }

        public UserViewModel GetSingle(int Userid, int OrganizationId)
        {
            var data = base.Get(x => x.UserID == Userid && x.OrganizationID == OrganizationId);
            UserViewModel model = Mapper.Map<User, UserViewModel>(data);
            try
            {
                model.RoleList = this._IUserRoleRepository.GetAll(0, OrganizationId, Userid).Select(x => x.RoleId).ToList<int>();
            }
            catch { }
            return model;
        }
        public void AddUser(UserViewModel model, int Userid, int OrganizationId)
        {
            base.RepositoryContext.SP_DeleteUserRoles(model.UserID, OrganizationId);
            string defaultPassword = CommonMethods.RandomString(8);
            string encryptedPassword = AES.Encrypt(defaultPassword);
            User data = Mapper.Map<UserViewModel, User>(model);
            data.InActive = true;
            if (data.UserID == 0)
            {
                if (model.OverRideOrganizationId == false)
                    data.OrganizationID = OrganizationId;
                StringBuilder emailBody = new StringBuilder(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("~/HtmlTemplates/NewUserEmailTemplate.html")));
                emailBody.Replace("$$UserName$$", data.UserName).Replace("$$Password$$", defaultPassword);
                data.IsNewUser = true;
                data.Addedon = DateTime.Now;
                data.Password = encryptedPassword;
                this.Add(data, Userid, OrganizationId);
                new EmailManagement().SendMailToUserWithCCANdAttachment(emailBody.ToString(), "Registration", null, data.EmailID, null, new List<byte[]>(), new List<string>());
            }
            else
            {
                this.Update(data);
            }
            if (model.RoleList != null && model.RoleList.Any())
            {
                foreach (int roleId in model.RoleList)
                {
                    UserRole userRole = new UserRole();
                    userRole.RoleId = roleId;
                    userRole.UserId = data.UserID;
                    this._IUserRoleRepository.Add(userRole, Userid, OrganizationId);
                }
            }
            this._unitOfWork.Save();
        }
        public void ResetPassword(int Userid, int OrganizationId)
        {
            string defaultPassword = CommonMethods.RandomString(8);
            User user = base.GetByID(Userid);
            user.Password = AES.Encrypt(defaultPassword);
            Update(user);
            StringBuilder emailBody = new StringBuilder(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("~/HtmlTemplates/ResetPasswordEmailTemplate.html")));
            emailBody.Replace("$$UserName$$", user.UserName).Replace("$$Password$$", defaultPassword);
            new EmailManagement().SendMailToUserWithCCANdAttachment(emailBody.ToString(), "Reset Password", null, user.EmailID, null, new List<byte[]>(), new List<string>());
        }
        public void ResetPassword(ResetPassswordModel model, int Userid, int OrganizationId)
        {
            User user = base.GetByID(Userid);
            user.Password = AES.Encrypt(model.Password);
            user.IsNewUser = false;
            user.SecurityQuestion1 = model.SecurityQuestion1;
            user.SecurityAnswer1 = model.SecurityAnswer1;
            user.SecurityQuestion2 = model.SecurityQuestion2;
            user.SecurityAnswer2 = model.SecurityAnswer2;
            this.Update(user);
            this._unitOfWork.Save();
            StringBuilder emailBody = new StringBuilder(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("~/HtmlTemplates/ResetPasswordEmailTemplate.html")));
            emailBody.Replace("$$UserName$$", user.UserName).Replace("$$Password$$", model.Password);
            new EmailManagement().SendMailToUserWithCCANdAttachment(emailBody.ToString(), "Reset Password", null, user.EmailID, null, new List<byte[]>(), new List<string>());
        }
        public void ChangePassword(UserResetPassword model, int Userid, int OrganizationId)
        {
            User user = base.GetByID(Userid);
            user.Password = AES.Encrypt(model.Password);
            Update(user);
            StringBuilder emailBody = new StringBuilder(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("~/HtmlTemplates/ChangePasswordEmailTemplate.html")));
            emailBody.Replace("$$UserName$$", user.UserName).Replace("$$Password$$", model.Password);
            new EmailManagement().SendMailToUserWithCCANdAttachment(emailBody.ToString(), "Change Password", null, user.EmailID, null, new List<byte[]>(), new List<string>());
        }
        public bool VerifyPassword(string password, int Userid, int OrganizationId)
        {
            Boolean result = false;
            User user = base.GetByID(Userid);
            string decryptedPassword = AES.Decrypt(user.Password);
            result = decryptedPassword.Equals(password);
            return result;
        }
        public bool ForgotPassword(ForgotPassswordModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            bool result = false;
            User user = base.GetFirst(x => x.UserName.Equals(model.UserName));
            string password = AES.Decrypt(user.Password);
            if (
                //user.SecurityQuestion1 == model.SecurityQuestion1
                user.SecurityAnswer1 == model.SecurityAnswer1
                //&& user.SecurityQuestion2 == model.SecurityQuestion2
                && user.SecurityAnswer2 == model.SecurityAnswer2
                )
            {
                StringBuilder emailBody = new StringBuilder(System.IO.File.ReadAllText(HttpContext.Current.Server.MapPath("~/HtmlTemplates/ForgotPasswordEmailTemplate.html")));
                emailBody.Replace("$$UserName$$", user.UserName).Replace("$$Password$$", password);
                new EmailManagement().SendMailToUserWithCCANdAttachment(emailBody.ToString(), "Forgot Password", null, user.EmailID, null, new List<byte[]>(), new List<string>());

                result = true;
            }
            return result;
        }
        public SecurityQustionOfUserModel GetSecurityQuestionOfUser(string userName, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.RepositoryContext.SP_GetSecurityQustionOfUser(userName);
            return Mapper.Map<SP_GetSecurityQustionOfUser_Result, SecurityQustionOfUserModel>(data.FirstOrDefault());
        }
        public bool ValidateUserEmail(string email, int Userid, int OrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.EmailID == email);
            if (data != null && !string.IsNullOrWhiteSpace(data.EmailID))
            {
                if (data.UserID != Userid)
                    result = false;
            }
            return result;
        }
        public bool ValidateUserName(string userName, int Userid, int OrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.UserName == userName);
            if (data != null && !string.IsNullOrWhiteSpace(data.UserName))
            {
                if (data.UserID != Userid)
                    result = false;
            }
            return result;
        }
        public UserViewList GetUserList(bool? InactiveFilter, int PageNo, int PageSize, string sortColumn, string sortOrder, string OrganizationFilte = "", string RoleFilter = ""
             , string userName = "", string firstName = "", string lastName = "", string emailId = "", int Userid = 0, int OrganizationId = 0)
        {
            UserViewList list = new UserViewList();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.sp_GetUserList(PageNo, PageSize, sortColumn, sortOrder, OrganizationFilte, RoleFilter,
               userName, firstName, lastName, emailId, InactiveFilter, OrganizationId, totalRecords).ToList();
            list.UserViewListModel = Mapper.Map<List<sp_GetUserList_Result>, List<UserViewListModel>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public LoggedInUserModel ValidateUserLogin(string userName, string password, int LoggedInUserId, int LoggedInOrganizationId)
        {
            LoggedInUserModel model = new LoggedInUserModel();
            string decryptedPassword = AES.Encrypt(password);
            try
            {
                var user = this.Get(x => x.UserName.Equals(userName) && x.Password.Equals(decryptedPassword) && x.InActive == true);
                if (user != null && user.UserID > 0)
                {
                    model.IsNewUser = Convert.ToBoolean(user.IsNewUser);
                    model.UserId = user.UserID;
                    model.UserName = user.UserName;
                    model.Password = user.Password;
                    model.OrganizationId = user.OrganizationID;
                    model.RoleList = this._IUserRoleRepository.GetAll(user.UserID, user.OrganizationID, user.UserID).Select(x => x.RoleId).ToList<int>();
                }
            }
            catch (Exception ex)
            {

            }
            return model;
        }
        public void UpdateInactive(int userid, bool inactive, int OrganizationId)
        {
            var data = base.GetByID(userid);
            data.InActive = inactive;
            Update(data);
        }
        public void Update(User entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public LoggedInUserModel ValidateEncryptedUserLogin(string userName, string password, int LoggedInUserId, int LoggedInOrganizationId)
        {
            LoggedInUserModel model = new LoggedInUserModel();
            string decryptedPassword = password;
            string decryptrdUserName = userName;
            try
            {
                var user = this.Get(x => x.UserName.Equals(decryptrdUserName) && x.Password.Equals(decryptedPassword) && x.InActive == true);
                if (user != null && user.UserID > 0)
                {
                    model.IsNewUser = Convert.ToBoolean(user.IsNewUser);
                    model.UserId = user.UserID;
                    model.OrganizationId = user.OrganizationID;
                    model.UserName = AES.Encrypt(user.UserName);
                    model.Password = user.Password;
                    model.RoleList = this._IUserRoleRepository.GetAll(user.UserID, user.OrganizationID, user.UserID).Select(x => x.RoleId).ToList<int>();
                }
            }
            catch
            {
            }
            return model;
        }

        public List<GetUserWithRoleViewResult> GetUserWithRole(int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<SP_GetUserWithRole_Result> data = base.RepositoryContext.SP_GetUserWithRole(LoggedInOrganizationId).ToList();
            return Mapper.Map<List<SP_GetUserWithRole_Result>, List<GetUserWithRoleViewResult>>(data);
        }
    }
}
