using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class NotificationViewModel
    {
        public int NotificationID { get; set; }
        public string Text { get; set; }
        public Nullable<int> SourceType { get; set; }
        public string SourceLinkID { get; set; }
        public Nullable<int> AddedBy { get; set; }
        public Nullable<System.DateTime> Added_Date { get; set; }
        public Nullable<int> NotificationType { get; set; }
        public int OrganizationId { get; set; }
        public Nullable<int> UserId { get; set; }
        public bool IsReadByUser { get; set; }
        public string AddedByUser { get; set; }
        public string AddedDateString { get; set; }
    }
}
