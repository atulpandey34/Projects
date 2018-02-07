using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class MeasureColumnDataViewModel
    {
        public int MeasureColumnDataId { get; set; }
        public int MeasureId { get; set; }
        public int MeasureColumnId { get; set; }
        public string ColumnName { get; set; }
        public string ColumnValue { get; set; }
        public System.DateTime Date { get; set; }
    }

    public class MeasureColumnDataByDateViewModel
    {
        public int MeasureId { get; set; }
        public DateTime Date { get; set; }
        public List<MeasureColumnDataViewModel> MeasureColumnData { get; set; }
    }

    public class MeasureColumnChartData
    {
        public List<string> labels { get; set; }
        public List<MeasureColumnDataSet> datasets { get; set; }
    }
    public class MeasureColumnDataSet
    {
        public string label { get; set; }
        public List<int> data { get; set; }
        public bool fill { get; set; }
        public string borderColor { get; set; }
    }
}
