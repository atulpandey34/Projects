//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace RiskManagement.Data
{
    using System;
    
    public partial class SP_GetDocumentById_Result
    {
        public int DocumentID { get; set; }
        public string DocumentName { get; set; }
        public int DocumentType { get; set; }
        public int FolderID { get; set; }
        public int ReviewFrequency { get; set; }
        public int ReviewFrequencyUnitID { get; set; }
        public int DocumentPathType { get; set; }
        public bool IsDeleted { get; set; }
        public string SummaryOfChanges { get; set; }
        public Nullable<int> UploadedBy { get; set; }
        public Nullable<double> VersionNumber { get; set; }
        public Nullable<int> DocumentVersionID { get; set; }
    }
}