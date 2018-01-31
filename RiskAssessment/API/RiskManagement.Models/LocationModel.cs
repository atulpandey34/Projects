using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    [DataContract]
    public class LocationModel
    {
        [DataMember]
        public int LocationID { get; set; }
        [DataMember]
        public string LocationName { get; set; }
        [DataMember]
        public string RoomName { get; set; }
    }
}
