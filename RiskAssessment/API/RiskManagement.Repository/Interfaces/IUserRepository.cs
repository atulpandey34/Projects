using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IUserRepository
    {
        IEnumerable<RiskManagement.Data.User> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.User entity, int LoggedInUserId, int LoggedInOrganizationId);

        UserViewModel GetSingle(int Userid, int OrganizationId);

        void Update(RiskManagement.Data.User entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int Userid, int OrganizationId);

        IEnumerable<RiskManagement.Models.UserModel> GetAllUser(int Userid, int OrganizationId);
        IEnumerable<RiskManagement.Models.UserModel> GetAllauditor(int OrganizationId);
        void AddUser(UserViewModel model, int Userid, int OrganizationId);
        bool ValidateUserEmail(string email, int Userid, int OrganizationId);
        bool ValidateUserName(string userName, int Userid, int OrganizationId);
        LoggedInUserModel ValidateUserLogin(string userName, string password, int LoggedInUserId, int LoggedInOrganizationId);
        UserViewList GetUserList(bool? InactiveFilter, int PageNo, int PageSize, string sortColumn, string sortOrder, string OrganizationFilte = "", string RoleFilter = ""
             , string userName = "", string firstName = "", string lastName = "", string emailId = "", int Userid=0, int OrganizationId=0);

        void ResetPassword(ResetPassswordModel model, int Userid, int OrganizationId);
        bool ForgotPassword(ForgotPassswordModel model, int LoggedInUserId, int LoggedInOrganizationId);
        SecurityQustionOfUserModel GetSecurityQuestionOfUser(string userName, int LoggedInUserId, int LoggedInOrganizationId);

        void UpdateInactive(int userid, bool inactive,  int OrganizationId);

        void ResetPassword(int Userid, int OrganizationId);

        void ChangePassword(UserResetPassword model, int Userid, int OrganizationId);
        bool VerifyPassword(string password, int Userid, int OrganizationId);
        LoggedInUserModel ValidateEncryptedUserLogin(string userName, string password, int LoggedInUserId, int LoggedInOrganizationId);
        List<GetUserWithRoleViewResult> GetUserWithRole(int LoggedInUserId, int LoggedInOrganizationId);
    }
}
