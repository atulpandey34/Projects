using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class HazardModel
    {
        public int HazardId { get; set; }
        public string Text { get; set; }
        public Nullable<int> OrganizationId { get; set; }
    }
}
