using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    [DataContract]
    public class UserModel
    {
        [DataMember]
        public int id { get { return UserID; } }
        [DataMember]
        public string name
        {
            get { return FirstName + " " + LastName; }
            set { }
        }
        public int UserID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }

    public class UserViewModel
    {


        public int UserID { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailID { get; set; }
        public Nullable<int> OrganizationID { get; set; }
        public Nullable<int> RoleID { get; set; }
        public Nullable<int> SecurityQuestion1 { get; set; }
        public Nullable<int> SecurityQuestion2 { get; set; }
        public string SecurityAnswer1 { get; set; }
        public string SecurityAnswer2 { get; set; }
        public string Password { get; set; }
        public Nullable<System.DateTime> Addedon { get; set; }
        public Nullable<int> AddedBy { get; set; }
        public Nullable<bool> IsNewUser { get; set; }
        public List<int> RoleList { get; set; } = new List<int>();
        public bool OverRideOrganizationId { get; set; } = false;

    }

    public class UserViewListModel
    {
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailID { get; set; }
        public Nullable<int> OrganizationID { get; set; }
        public Nullable<int> RoleID { get; set; }
        public Nullable<int> SecurityQuestion1 { get; set; }
        public Nullable<int> SecurityQuestion2 { get; set; }
        public string SecurityAnswer1 { get; set; }
        public string SecurityAnswer2 { get; set; }
        public string OrganizationName { get; set; }
        public string RoleName { get; set; }
        public string SQ1 { get; set; }
        public string SQ2 { get; set; }
        public Nullable<long> RowID { get; set; }
        public Nullable<bool> InActive { get; set; }
        public string InActiveText
        {
            get
            {
                if (InActive == true)
                    return "Yes";
                else
                    return
                        "No";
            }
        }
    }

    public class UserViewList
    {
        public List<UserViewListModel> UserViewListModel { get; set; }
        public int TotalRecords { get; set; }
    }

    public class UserMenuModel
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string AddedDate { get; set; }
        public int UserId { get; set; }
    }

    public class UserResetPassword
    {
        public string OldPassword { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

    }

    public class GetUserWithRoleViewResult
    {
        public string UserName { get; set; }
        public int UserID { get; set; }
        public Nullable<int> RoleId { get; set; }
    }
}
