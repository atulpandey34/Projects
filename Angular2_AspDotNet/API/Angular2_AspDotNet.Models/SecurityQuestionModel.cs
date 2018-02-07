using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class SecurityQuestionModel
    {
        public int SecurityQuestionID { get; set; }
        public string Question { get; set; }
    }
    public partial class SecurityQustionOfUserModel
    {
        public string SecurityQuestion1 { get; set; }
        public string SecurityQuestion2 { get; set; }
    }
}
