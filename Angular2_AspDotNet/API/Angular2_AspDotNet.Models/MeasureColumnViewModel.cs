using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class MeasureColumnViewModel
    {
        public int MeasureColumnId { get; set; }
        public int MeasureId { get; set; }
        public string ColumnName { get; set; }
        public int OrganizationId { get; set; }
    }
}
