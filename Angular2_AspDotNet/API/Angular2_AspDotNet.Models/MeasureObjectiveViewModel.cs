using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class MeasureObjectiveViewModel
    {
        public int MeasureObjectiveId { get; set; }
        public int MeasureId { get; set; }
        public string Description { get; set; }
        public int OrganizationId { get; set; }
    }
}
