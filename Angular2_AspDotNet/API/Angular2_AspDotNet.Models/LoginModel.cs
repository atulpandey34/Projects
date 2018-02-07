using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class LoginModel
    {
        public LoginModel()
        {
            this.model = new Dictionary<string, SessionData>();
        }
        public Dictionary<string, SessionData> model { get; set; }
    }
    public class SessionData
    {
        public SessionData()
        {
        }
        public int UserId { get; set; }
        public string Token { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int OrganizationId { get; set; }
        public List<int> RoleId { get; set; } = new List<int>();
    }

    public class LoggedInUserModel
    {
        public int UserId { get; set; } = 0;
        public string Message { get; set; }
        public Nullable<int> RoleId { get; set; }
        public string Token { get; set; }
        public bool IsNewUser { get; set; } = false;

        public string UserName { get; set; }
        public string Password { get; set; }
        public int OrganizationId { get; set; }
        public List<int> RoleList { get; set; } = new List<int>();

    }
}
