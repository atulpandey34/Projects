using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    [DataContract]
    public class ActionSourceModel
    {
        [DataMember]
        public int ActionSourceID { get; set; }
        [DataMember]
        public string Source { get; set; }
    }
    [DataContract]
    public  class ActionCommentsListModel
    {
        [DataMember]
        public string Comment { get; set; }
        [DataMember]
        public Nullable<System.DateTime> AddedON { get; set; }
        [DataMember]
        public string AddedBy { get; set; }
    }
}
