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
    
    public partial class CorrectiveActionAssignedToList
    {
        public int CorrectiveActionAssignedToListId { get; set; }
        public int CorrectiveActionId { get; set; }
        public int UserId { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual CorrectiveAction CorrectiveAction { get; set; }
        public virtual User User { get; set; }
    }
}
