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
    
    public partial class Event
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Event()
        {
            this.Appointments = new HashSet<Appointment>();
            this.PerformanceReviews = new HashSet<PerformanceReview>();
        }
    
        public int EventID { get; set; }
        public Nullable<int> EventType { get; set; }
        public Nullable<int> EventSubType { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> StartTime { get; set; }
        public Nullable<System.DateTime> EndTime { get; set; }
        public Nullable<bool> Recurring { get; set; }
        public int OrganizationID { get; set; }
        public Nullable<int> LocationID { get; set; }
        public Nullable<int> AddedBy { get; set; }
        public string RecurringPattern { get; set; }
        public Nullable<int> ParentEventID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Appointment> Appointments { get; set; }
        public virtual Location Location { get; set; }
        public virtual SubTitle SubTitle { get; set; }
        public virtual Title Title { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PerformanceReview> PerformanceReviews { get; set; }
    }
}
