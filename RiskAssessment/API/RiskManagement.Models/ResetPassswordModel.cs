using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class ResetPassswordModel
    {
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }

        public int SecurityQuestion1 { get; set; }
        public string SecurityAnswer1 { get; set; }
        public int SecurityQuestion2 { get; set; }
        public string SecurityAnswer2 { get; set; }

    }
    public class ForgotPassswordModel
    {
        public string UserName { get; set; }
        public int SecurityQuestion1 { get; set; }
        public string SecurityAnswer1 { get; set; }
        public int SecurityQuestion2 { get; set; }
        public string SecurityAnswer2 { get; set; }

    }
}
