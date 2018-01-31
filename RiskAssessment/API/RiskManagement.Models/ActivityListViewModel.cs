using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class ActionList
    {
        public int ActionID { get; set; }
        public string Title { get; set; }
        public string Duedate { get; set; }
        public Nullable<int> EventActionStatusID { get; set; }
        public string EventActionStatusText { get; set; }
        public string SourceText { get; set; }
        public Nullable<int> SourceID { get; set; }
        public string AddedBy { get; set; }
        public string AssignedTo { get; set; }
        public Nullable<long> RowID { get; set; }



    }

    public class ActionListViewModel
    {
        public List<ActionList> ActionListing { get; set; }
        public int TotalRecords { get; set; }
    }

    public class ActionFilerModel
    {
        public int LoggedInUserID { get; set; }
    }

}
