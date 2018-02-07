using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    //Detail page view model
    public class MasterDocumentTypeViewModel
    {
        public int MasterDocumentTypeID { get; set; }
        public string Type { get; set; }
    }
    public class MasterReviewFrequencyUnitViewModel
    {
        public int MasterReviewFrequencyUnitID { get; set; }
        public string ReviewFrequencyUnit { get; set; }
    }
    public class MasterDocumentFolderViewModel
    {
        public int MasterDocumentFolderID { get; set; }
        public string FolderName { get; set; }
    }
    public class DocumentViewModel
    {
        public int DocumentId { get; set; }
        public string DocumentName { get; set; }
        public int DocumentType { get; set; }
        public int FolderID { get; set; }
        public int ReviewFrequency { get; set; }
        public int ReviewFrequencyUnitID { get; set; }
        public int DocumentVersionID { get; set; }
        public double VersionNumber { get; set; }
        public int DocumentPathType { get; set; }
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public string ExternalLink { get; set; }
        public string SummaryOfChanges { get; set; }
    }
    public class DocumentVersionViewModel
    {
        public int DocumentVersionID { get; set; }
        public int DocumentId { get; set; }
        public string UploadedBy { get; set; }
        public int ApprovedBy { get; set; }
        public string VersionNumber { get; set; }
        public string FilePath { get; set; }
        public string FileName { get; set; }
        public string ExternalLink { get; set; }
        public string UploadDate { get; set; }
        public string SummaryOfChanges { get; set; }
    }
    // Document List view model
    public class DocumentListFilterModel
    {
        public int DocumentID { get; set; }
        public string DocumentName { get; set; }
        public string UploadBy { get; set; }
        public string Version { get; set; }
        public string Review { get; set; }
        public string Type { get; set; }
        public string FolderName { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class DocumentListData
    {
        public DocumentListData()
        {
            //this.DocumentListQuestionResult = new List<Models.DocumentListQuestionResult>();
        }
        public int TotalRecords { get; set; }
        //public List<DocumentListQuestionResult> DocumentListQuestionResult { get; set; }
    }
    public class DocumentListResult
    {
        public int DocumentID { get; set; }
        public string DocumentName { get; set; }
        public string UploadedBy { get; set; }
        public string VersionNumber { get; set; }
        public string Review { get; set; }
        public string DocumentType { get; set; }
        public string FolderName { get; set; }
        public Nullable<long> RowID { get; set; }
    }
    public class DocumentListViewResult
    {
        public DocumentListViewResult()
        {
            this.DocumentListResult = new List<DocumentListResult>();
        }
        public int TotalRecords { get; set; }
        public List<DocumentListResult> DocumentListResult { get; set; }
    }

    public class DocumentQuestionListViewModel
    {
        public int DocumentID { get; set; }
        public string QuestionText { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> Order { get; set; }
        public string MultipleOptionSet { get; set; }
        public string QuestionType { get; set; }
        public Nullable<int> QuestionID { get; set; }
    }
}
