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
    using System.Collections.Generic;
    
    public partial class AssignmentQuestion
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AssignmentQuestion()
        {
            this.AssignmentQuestionOptions = new HashSet<AssignmentQuestionOption>();
        }
    
        public int QuestionID { get; set; }
        public Nullable<int> AssignmentID { get; set; }
        public string QuestionText { get; set; }
        public Nullable<int> QuestionType { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> Order { get; set; }
        public Nullable<int> Active { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual Assignment Assignment { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AssignmentQuestionOption> AssignmentQuestionOptions { get; set; }
    }
}