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
    
    public partial class CorrectiveAction
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public CorrectiveAction()
        {
            this.CorrectiveActionAssignedToLists = new HashSet<CorrectiveActionAssignedToList>();
        }
    
        public int CorrectiveActionId { get; set; }
        public Nullable<int> AcitonId { get; set; }
        public string Title { get; set; }
        public Nullable<int> AssignedBy { get; set; }
        public Nullable<int> CategoryID { get; set; }
        public Nullable<int> ActionSourceID { get; set; }
        public string ActionTaken { get; set; }
        public Nullable<System.DateTime> Duedate { get; set; }
        public string RootCause { get; set; }
        public Nullable<bool> CorrectiveActionNeeded { get; set; }
        public string IdentifiedCorrectiveAction { get; set; }
        public Nullable<int> RiskLevel { get; set; }
        public Nullable<int> ResponsibleParty { get; set; }
        public Nullable<System.DateTime> CorrectiveActionDueDate { get; set; }
        public Nullable<bool> IssueResolved { get; set; }
        public Nullable<System.DateTime> DateResolved { get; set; }
        public int OrganizationID { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CorrectiveActionAssignedToList> CorrectiveActionAssignedToLists { get; set; }
        public virtual Organization Organization { get; set; }
    }
}