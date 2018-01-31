using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class MeetingListModel
    {
        public int EventID { get; set; }
        public string TitleName { get; set; }
        public string SubTitleName { get; set; }
        public string MeetingDate { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string LocationName { get; set; }
        public string RoomName { get; set; }
        public string AddedBy { get; set; }
        public Nullable<long> RowID { get; set; }
        public string Attendees { get; set; }
        public Nullable<int> TotalAction { get; set; }
        public Nullable<int> CompleteAction { get; set; }
        public Nullable<int> InCompleteAction { get; set; }
        public string Reviewee { get; set; }
        public string NextReviewDate { get; set; }
        public string RecurrenceDateColor { get; set; }
    }
    public class MeetingList
    {
        public MeetingList()
        {
            this.MeetingListModel = new List<Models.MeetingListModel>();
        }
        public List<MeetingListModel> MeetingListModel { get; set; }
        public int TotalRecords { get; set; } = 0;
    }
}
