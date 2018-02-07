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
    
    public partial class AuditSubject
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AuditSubject()
        {
            this.AuditSubjectReviews = new HashSet<AuditSubjectReview>();
            this.AuditSubjectQuestions = new HashSet<AuditSubjectQuestion>();
        }
    
        public int AuditSubjectID { get; set; }
        public int AuditID { get; set; }
        public string Subject { get; set; }
        public int AuditorID { get; set; }
        public int AuditeeID { get; set; }
        public int Location { get; set; }
        public string FrequencyRecurrence { get; set; }
        public Nullable<int> OrganizationID { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual Audit Audit { get; set; }
        public virtual User User { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuditSubjectReview> AuditSubjectReviews { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuditSubjectQuestion> AuditSubjectQuestions { get; set; }
    }
}