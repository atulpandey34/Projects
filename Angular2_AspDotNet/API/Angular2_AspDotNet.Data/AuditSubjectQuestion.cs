//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2_AspDotNet.Data
{
    using System;
    using System.Collections.Generic;
    
    public partial class AuditSubjectQuestion
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public AuditSubjectQuestion()
        {
            this.AuditSubjectQuestionResponses = new HashSet<AuditSubjectQuestionResponse>();
        }
    
        public int AuditSubjectQuestionID { get; set; }
        public int AuditSubjectID { get; set; }
        public string QuestionText { get; set; }
        public bool IsDeleted { get; set; }
    
        public virtual AuditSubject AuditSubject { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<AuditSubjectQuestionResponse> AuditSubjectQuestionResponses { get; set; }
    }
}
