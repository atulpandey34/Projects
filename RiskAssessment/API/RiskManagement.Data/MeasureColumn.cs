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
    
    public partial class MeasureColumn
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public MeasureColumn()
        {
            this.MeasureColumnDatas = new HashSet<MeasureColumnData>();
        }
    
        public int MeasureColumnId { get; set; }
        public int MeasureId { get; set; }
        public string ColumnName { get; set; }
        public int OrganizationId { get; set; }
    
        public virtual Measure Measure { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MeasureColumnData> MeasureColumnDatas { get; set; }
    }
}