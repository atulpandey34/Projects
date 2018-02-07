using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class AssignmentListFilterModel
    {
        public int AssignmentID { get; set; }
        public string Title { get; set; }
        public bool Active { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class AssignmentListData
    {
        public AssignmentListData()
        {
            this.AssignmentListQuestionResult = new List<Models.AssignmentListQuestionResult>();
        }
        public int TotalRecords { get; set; }
        public List<AssignmentListQuestionResult> AssignmentListQuestionResult { get; set; }
    }
    public class AssignmentListResult
    {
        public string Title { get; set; }
        public int AssignmentID { get; set; }
        public Nullable<long> RowID { get; set; }
        public string Active { get; set; }
    }
    public class AssignmentListViewResult
    {
        public AssignmentListViewResult()
        {
            this.AssignmentListResult = new List<AssignmentListResult>();
        }
        public int TotalRecords { get; set; }
        public List<AssignmentListResult> AssignmentListResult { get; set; }
    }

    public class AssignmentQuestionListViewModel
    {
        public int AssignmentID { get; set; }
        public string QuestionText { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> Order { get; set; }
        public string MultipleOptionSet { get; set; }
        public string QuestionType { get; set; }
        public Nullable<int> QuestionID { get; set; }
    }

}
