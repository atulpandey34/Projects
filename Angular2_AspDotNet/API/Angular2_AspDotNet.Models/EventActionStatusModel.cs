using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    [DataContract]
    public class EventActionStatusModel
    {
        [DataMember]
        public int EventActionStatusID { get; set; }
        [DataMember]
        public string ActionName { get; set; }
    }

    public class ActionTakenUploadModel
    {
        public ActionTakenUploadModel()
        {
        }
        public string fileName { get; set; }
        public string ActionTaken { get; set; }
        public bool IsReportedAction { get; set; }
        public int ActionId { get; set; }
        public string FilePath { get; set; }
    }
}
