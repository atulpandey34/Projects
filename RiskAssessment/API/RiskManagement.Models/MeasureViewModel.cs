using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class MeasureViewModel
    {
        public MeasureViewModel()
        {
            this.MeasureColumns = new List<MeasureColumnViewModel>();
            this.MeasureColumnDatas = new HashSet<MeasureColumnDataViewModel>();
            this.MeasureObjectives = new HashSet<MeasureObjectiveViewModel>();
        }

        public int MeasureId { get; set; }
        public int FrequencyId { get; set; }
        public string Description { get; set; }
        public Nullable<int> Target { get; set; }
        public int OrganizationId { get; set; }

        public string LastDate { get; set; }
        public string NextDate { get; set; }
        public virtual FrequencyViewModel Frequency { get; set; }
        public virtual ICollection<MeasureColumnViewModel> MeasureColumns { get; set; }
        
        public virtual ICollection<MeasureColumnDataViewModel> MeasureColumnDatas { get; set; }
        
        public virtual ICollection<MeasureObjectiveViewModel> MeasureObjectives { get; set; }
    }
}
