using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class CorrectiveActionModel
    {
        public int CorrectiveActionId { get; set; }
        public string CorrectiveActionName { get; set; }
    }

    public class CorrectiveActionDataModel
    {
        public CorrectiveActionDataModel()
        {
            this.resultList = new List<string>();
            this.ActionResponsiblePersonDataModel = new List<Models.ActionResponsiblePersonDataModel>();
        }
        public int ActionID { get; set; }
        public int CorrectiveActionId { get; set; }
        public string Title { get; set; }
        public Nullable<int> AssignedBy { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public Nullable<int> ActionSourceID { get; set; }
        public string ActionTaken { get; set; }
        public DateTime Duedate { get; set; }
        public string RootCause { get; set; }

        public Nullable<bool> CorrectiveActionNeeded { get; set; }
        public string IdentifiedCorrectiveAction { get; set; }
        public Nullable<int> RiskLevel { get; set; }
        public Nullable<int> ResponsibleParty { get; set; }
        public Nullable<System.DateTime> CorrectiveActionDueDate { get; set; }
        public Nullable<bool> IssueResolved { get; set; }
        public Nullable<System.DateTime> DateResolved { get; set; }
        public List<string> resultList { get; set; }
        public List<string> ResultList { get; set; }
        public List<ActionResponsiblePersonDataModel> ActionResponsiblePersonDataModel { get; set; }

    }
    public class CorretiveActionListPageFilterModel
    {
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortColumn { get; set; }
        public string SortOrder { get; set; }

        public string TitleFilter { get; set; }
        public string AssignedByFilter { get; set; }
        public string CategoryFilter { get; set; }
        public string SourceFilter { get; set; }
        public string ActionTakenFilter { get; set; }
        public string DueDateFilter { get; set; }
        public string RootCauseFilter { get; set; }
    }

    public class CorrectiveActionListModel
    {
        public int CorrectiveActionId { get; set; }
        public string Title { get; set; }
        public string AssignedBy { get; set; }
        public string CategoryName { get; set; }
        public string ActionSource { get; set; }
        public string ActionTaken { get; set; }
        public string DueDate { get; set; }
        public string RootCause { get; set; }
        public Nullable<long> RowID { get; set; }
    }

    public class CorrectiveActionList
    {
        public CorrectiveActionList()
        {
            this.CorrectiveActionListModel = new List<Models.CorrectiveActionListModel>();
        }
        public List<CorrectiveActionListModel> CorrectiveActionListModel { get; set; }
        public int TotalRecords { get; set; }
    }
}
