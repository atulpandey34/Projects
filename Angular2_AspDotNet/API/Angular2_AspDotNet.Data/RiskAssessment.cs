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
    
    public partial class RiskAssessment
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public RiskAssessment()
        {
            this.RiskAssessmentTeams = new HashSet<RiskAssessmentTeam>();
            this.RiskAssessmentHazards = new HashSet<RiskAssessmentHazard>();
            this.RiskAssessmentReviews = new HashSet<RiskAssessmentReview>();
        }
    
        public int RiskAssessmentId { get; set; }
        public string Area { get; set; }
        public Nullable<System.DateTime> AssessmentDate { get; set; }
        public Nullable<int> ReviewDuration { get; set; }
        public Nullable<int> ReviewDurationUnit { get; set; }
        public Nullable<bool> TrainingRequired { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<System.DateTime> ReviewDate { get; set; }
        public Nullable<bool> IsArchived { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual DurationUnit DurationUnit { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RiskAssessmentTeam> RiskAssessmentTeams { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RiskAssessmentHazard> RiskAssessmentHazards { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<RiskAssessmentReview> RiskAssessmentReviews { get; set; }
    }
}
