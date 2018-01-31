using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class ObjectiveViewModel
    {
        public int ObjectiveId { get; set; }
        public string Text { get; set; }
        public int OrganizationId { get; set; }
        public int SourceId { get; set; }
        public string ObjectiveSource { get; set; }
    }

    public class RevieweeObjectiveViewModel
    {
        public string CreatedDate { get; set; }
        public List<string> Text { get; set; }
    }
}
