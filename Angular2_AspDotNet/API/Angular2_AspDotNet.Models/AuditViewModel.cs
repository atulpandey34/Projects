using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    //Audit Report View Model
    public class AuditReportViewModel
    {
        public AuditReportViewModel()
        {
            this.AuditReport = new AuditReport();
        }

        public AuditReport AuditReport { get; set; }

    }

    public class AuditReport
    {
        public AuditReport()
        {
            this.AuditReportSubjectList = new List<AuditReportSubject>();
        }
        public string Title { get; set; }
        public string Scope { get; set; }
        public string Auditors { get; set; }
        public string AuditeeMainContact { get; set; }

        public List<AuditReportSubject> AuditReportSubjectList { get; set; }

    }

    public class AuditReportSubject
    {
        public AuditReportSubject()
        {
            this.AuditSubjectReviewList = new List<AuditReportSubjectReviewViewModel>();
            this.AuditReportSubjectQuestionResponseList = new List<AuditReportSubjectQuestionResponse>();
        }
        public int AuditSubjectID { get; set; }
        public int AuditID { get; set; }
        public string Subject { get; set; }

        public List<AuditReportSubjectReviewViewModel> AuditSubjectReviewList { get; set; }//List of Auditdates
        public List<AuditReportSubjectQuestionResponse> AuditReportSubjectQuestionResponseList { get; set; }
    }

    public class AuditReportSubjectReviewViewModel
    {
        public int AuditSubjectReviewID { get; set; }
        public int AuditID { get; set; }
        public int SubjectID { get; set; }
        public string AuditDate { get; set; }
    }
    public class AuditReportSubjectQuestionResponse
    {
        public int AuditSubjectQuestionResponseID { get; set; }
        public int SubjectID { get; set; }
        public string AuditDate { get; set; }
        public string Subject { get; set; }
        public string QuestionText { get; set; }
        public string ActionCode { get; set; }
        public string Comment { get; set; }
        public string ImagePath { get; set; }
        public string ImageName { get; set; }
    }
    // Audit Review Detail page model
    public class AuditSubjectReviewViewModel
    {
        public AuditSubjectReviewViewModel()
        {
            this.AuditSubjectQuestionResponses = new List<AuditSubjectReviewQuestionViewModel>();
        }
        public int AuditSubjectReviewID { get; set; }
        public int AuditID { get; set; }
        public int SubjectID { get; set; }
        public Nullable<System.DateTime> PlannedAuditDate { get; set; }
        public Nullable<System.DateTime> AuditDate { get; set; }
        public int AuditorID { get; set; }
        public int AuditeeID { get; set; }
        public int LocationID { get; set; }
        public string Comment { get; set; }
        public string Subject { get; set; }
        public bool Status { get; set; }
        public bool IsDeleted { get; set; }
        public List<AuditSubjectReviewQuestionViewModel> AuditSubjectQuestionResponses { get; set; }
    }

    public class AuditSubjectReviewQuestionViewModel
    {
        public int AuditSubjectQuestionResponseID { get; set; }
        public int AuditSubjectReviewID { get; set; }
        public int AuditSubjectQuestionID { get; set; }
        public string Comment { get; set; }
        public bool Observation { get; set; }
        public bool NonCompliance { get; set; }
        public bool None { get; set; }
        public string ImagePath { get; set; }
        public string ImageName { get; set; }
        public string QuestionText { get; set; }
    }
    //Audit detail page
    public class AuditViewModel
    {
        public int AuditID { get; set; }
        public string Title { get; set; }
        public string Scope { get; set; }
        public DateTime DueDate { get; set; }
        public List<AuditSubjectViewModel> AuditSubjects { get; set; }
        public List<AuditSubjectReviewViewModel> AuditSubjectReviews { get; set; }
    }

    public class AuditSubjectViewModel
    {
        public int AuditSubjectID { get; set; }
        public int AuditID { get; set; }
        public string Subject { get; set; }
        public int AuditorID { get; set; }
        public int AuditeeID { get; set; }
        public int Location { get; set; }
        public bool IsDeleted { get; set; }
        public string FrequencyRecurrence { get; set; }
        //public Nullable<System.DateTime> StartDate { get; set; }
        //public Nullable<System.DateTime> EndDate { get; set; }
        public string InsertQuestion { get; set; }

        public List<AuditSubjectQuestionViewModel> AuditSubjectQuestions { get; set; }

    }

    public class AuditSubjectQuestionViewModel
    {
        public int AuditSubjectQuestionID { get; set; }
        public int AuditSubjectID { get; set; }
        public string QuestionText { get; set; }
        public bool IsDeleted {get;set;}
    }
    //Audit Subject list view model
    public class AuditSubjectListFilterModel
    {
        public string Subject { get; set; }
        public string Auditee { get; set; }
        public string Location { get; set; }
        public string PlannedAuditDate { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class AuditSubjectListViewResult
    {
        public AuditSubjectListViewResult()
        {
            this.AuditSubjectListResult = new List<AuditSubjectListResult>();
        }
        public int TotalRecords { get; set; }
        public List<AuditSubjectListResult> AuditSubjectListResult { get; set; }
    }
    public class AuditSubjectListResult
    {
        public int AuditSubjectReviewID { get; set; }
        public int AuditSubjectID { get; set; }
        public int AuditID { get; set; }
        public string Subject { get; set; }
        public string Auditee { get; set; }
        public string Location { get; set; }
        public string PlannedAuditDate { get; set; }
        public string ReviewStatus { get; set; }
        public Nullable<long> RowID { get; set; }
    }


    //Audit list view model
    public class AuditListFilterModel
    {
        public string Title { get; set; }
        public string Scope { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class AuditListViewResult
    {
        public AuditListViewResult()
        {
            this.AuditListResult = new List<AuditListResult>();
        }
        public int TotalRecords { get; set; }
        public List<AuditListResult> AuditListResult { get; set; }
    }
    public class AuditListResult
    {
        public int AuditID { get; set; }
        public string Title { get; set; }
        public string Scope { get; set; }
        public int Status { get; set; }
        public int OrganizationID { get; set; }
        public string AuditSubjects { get; set; }
        public Nullable<int> AuditSubjectCount { get; set; }
        public Nullable<long> RowID { get; set; }
    }
}
