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
    
    public partial class ActionResponsiblePerson
    {
        public int ActionResponsiblePersonID { get; set; }
        public int ActionID { get; set; }
        public int UserID { get; set; }
        public Nullable<int> AddedBy { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual Action Action { get; set; }
        public virtual User User { get; set; }
        public virtual User User1 { get; set; }
    }
}
