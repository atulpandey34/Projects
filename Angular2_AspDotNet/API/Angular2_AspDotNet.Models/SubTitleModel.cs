using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    [DataContract]
    public class SubTitleModel
    {
        [DataMember]
        public int SubTitleId { get; set; }
        [DataMember]
        public int TitleID { get; set; }
        [DataMember]
        public string SubTitleName { get; set; }
    }
}
