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
    
    public partial class RiskAssessmentHazardReview
    {
        public int RiskAssessmentHazardReviewId { get; set; }
        public Nullable<int> RiskAssessmentHazardId { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<System.DateTime> ReviewDate { get; set; }
        public Nullable<int> Consequence { get; set; }
        public Nullable<int> Likelihood { get; set; }
        public Nullable<int> MonitoringMethodId { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual MonitoringMethod MonitoringMethod { get; set; }
        public virtual RiskAssessmentHazard RiskAssessmentHazard { get; set; }
    }
}
