using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace Angular2_AspDotNet.Models
{
    public class RiskAssessmentViewModel
    {
        public RiskAssessmentViewModel()
        {
            this.RiskAssessmentTeamViewModel = new List<Models.RiskAssessmentTeamViewModel>();
            this.RiskAssessmentHazardViewModel = new List<Models.RiskAssessmentHazardViewModel>();
        }
        public int RiskAssessmentId { get; set; }
        public string Area { get; set; }
        public Nullable<System.DateTime> AssessmentDate { get; set; }
        public Nullable<int> ReviewDuration { get; set; }
        public Nullable<int> ReviewDurationUnit { get; set; }

        public Nullable<bool> TrainingRequired { get; set; }
        public Nullable<int> Status { get; set; }
        public Nullable<bool> IsDeleted { get; set; }
        public Nullable<bool> IsArchived { get; set; } = false;
        public List<RiskAssessmentTeamViewModel> RiskAssessmentTeamViewModel { get; set; }
        public List<RiskAssessmentHazardViewModel> RiskAssessmentHazardViewModel { get; set; }
    }

    public class RiskAssessmentTeamViewModel
    {
        public int RiskAssessmentTeamId { get; set; }
        public Nullable<int> RiskAssessmentId { get; set; }
        public Nullable<int> UserId { get; set; }


    }

    public class RiskAssessmentHazardViewModel
    {
        public RiskAssessmentHazardViewModel()
        {
            this.RiskAssessmentHazardMeasureViewModel = new List<Models.RiskAssessmentHazardMeasureViewModel>();
            this.RiskAssessmentHazardReviewViewModel = new List<Models.RiskAssessmentHazardReviewViewModel>();
        }
        public int RiskAssessmentHarardId { get; set; }
        public Nullable<int> HazardId { get; set; }
        public Nullable<int> RiskAssessmentId { get; set; }
        public string Description { get; set; }
        public bool IsReadyForReview { get; set; } = false;

        public List<RiskAssessmentHazardMeasureViewModel> RiskAssessmentHazardMeasureViewModel { get; set; }

        public List<RiskAssessmentHazardReviewViewModel> RiskAssessmentHazardReviewViewModel { get; set; }


    }

    public class RiskAssessmentHazardMeasureViewModel
    {
        public int RiskAssessmentHazardMeasureId { get; set; }
        public Nullable<int> RiskAssessmentId { get; set; }
        public Nullable<int> RiskAssessmentHazardId { get; set; }
        public string Text { get; set; }
        public Nullable<int> ActionId { get; set; }
        public Nullable<System.DateTime> DateAdded { get; set; }
    }

    public class RiskAssessmentHazardReviewViewModel
    {
        public int RiskAssessmentHazardReviewId { get; set; }
        public Nullable<int> RiskAssessmentHazardId { get; set; }
        public Nullable<System.DateTime> CreatedDate { get; set; }
        public Nullable<System.DateTime> UpdatedDate { get; set; }
        public Nullable<System.DateTime> ReviewDate { get; set; }
        public Nullable<int> Consequence { get; set; }
        public Nullable<int> Likelihood { get; set; }
        public Nullable<int> MonitoringMethodId { get; set; }


    }

    public class HazardListModel
    {
        public int RiskAssessmentHarardId { get; set; }
        public Nullable<int> HazardId { get; set; }
        public string HazardText { get; set; }
        public string Description { get; set; }
        public Nullable<int> Consequence { get; set; }
        public Nullable<int> Likelihood { get; set; }
        public Nullable<int> Source { get; set; }
        public string Method { get; set; }
        public string MeasureText { get; set; }
        public string ReviewDate { get; set; }
        public string CreatedDate { get; set; }

        public string[] MeasureTextArray
        {
            get
            {
                var data = MeasureText.Split(new string[] { "<br/> " }, StringSplitOptions.None);
                return data;
            }
        }
        public string[] MeasureTextWithReviewDateArray
        {
            get
            {
                return MeasureTextWithReviewDate.Split(new string[] { "<br/> " }, StringSplitOptions.None);
            }
        }
        public string ScoreColor
        {
            get
            {
                string color = "black";
                if (Likelihood == 5)
                {
                    if (Consequence == 5 || Consequence == 4 || Consequence == 3)
                        color = "red";
                    if (Consequence == 2)
                        color = "orange";
                    if (Consequence == 1)
                        color = "yellow";
                }
                if (Likelihood == 4)
                {
                    if (Consequence == 5 || Consequence == 4)
                        color = "red";
                    if (Consequence == 2 || Consequence == 3)
                        color = "orange";
                    if (Consequence == 1)
                        color = "yellow";
                }
                if (Likelihood == 3)
                {
                    if (Consequence == 5)
                        color = "red";
                    if (Consequence == 4 || Consequence == 3)
                        color = "orange";
                    if (Consequence == 2)
                        color = "yellow";
                    if (Consequence == 1)
                        color = "green";
                }
                if (Likelihood == 2)
                {
                    if (Consequence == 5 || Consequence == 4)
                        color = "orange";
                    if (Consequence == 2 || Consequence == 3)
                        color = "yellow";
                    if (Consequence == 1)
                        color = "green";
                }
                if (Likelihood == 1)
                {
                    if (Consequence == 5 || Consequence == 4)
                        color = "yellow";
                    if (Consequence == 2 || Consequence == 3)
                        color = "green";
                    if (Consequence == 1)
                        color = "green";
                }
                return color;
            }

        }

        public string MeasureTextWithReviewDate { get; set; }

        public bool IsReviewed
        {
            get
            {
                bool result = false;
                if (ReviewDate != null)
                    result = true;
                return result;
            }
        }
    }

    public class RiskAssessmentListFilterModel
    {
        public string SubjectFilter { get; set; }
        public string AssessmentDateFilter { get; set; }
        public string DurationUnitFilter { get; set; }
        public string ResponsibleTeamFilter { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }

    }

    public class RiskAssessmentListResult
    {
        public string Area { get; set; }
        public string AssessmentDate { get; set; }
        public Nullable<int> ReviewDuration { get; set; }
        public Nullable<int> ReviewDurationUnit { get; set; }
        public int RiskAssessmentId { get; set; }
        public string DuratiuonUnit { get; set; }
        public Nullable<long> RowID { get; set; }
        public string RiskAssessmentTeam { get; set; }
        public string Status { get; set; }
        public Nullable<System.DateTime> ReviewDate { get; set; }
        //public int MarginDays
        //{
        //    get
        //    {
        //        int result = 0;
        //        if (ReviewDurationUnit == 1)
        //            result = Convert.ToInt32(ReviewDuration) * 7;
        //        else if (ReviewDurationUnit == 2)
        //            result = Convert.ToInt32(ReviewDuration) * 7;
        //        else if (ReviewDurationUnit == 1)
        //            result = Convert.ToInt32(ReviewDuration) * 7;
        //        return result;
        //    }

        //}
        public string DateColor
        {
            get
            {
                string format = "MM/dd/yyyy";
                string color = "black";
                DateTime date = DateTime.ParseExact(AssessmentDate, format, CultureInfo.InvariantCulture);
                if (ReviewDate != null)
                    date = Convert.ToDateTime(ReviewDate);
                DateTime actualdate = date;
                if (ReviewDurationUnit == 1)
                    actualdate = actualdate.AddDays(Convert.ToInt32(ReviewDuration));
                else if (ReviewDurationUnit == 2)
                    actualdate = actualdate.AddMonths(Convert.ToInt32(ReviewDuration));
                else if (ReviewDurationUnit == 3)
                    actualdate = actualdate.AddYears(Convert.ToInt32(ReviewDuration));
                if (actualdate > DateTime.Today)
                    color = "Red";
                return color;
            }
        }
    }

    public class RiskAssessmentListData
    {
        public RiskAssessmentListData()
        {
            this.RiskAssessmentListResult = new List<Models.RiskAssessmentListResult>();
        }
        public int TotalRecords { get; set; }
        public List<RiskAssessmentListResult> RiskAssessmentListResult { get; set; }
    }

    public class SignedUserList
    {
        public int UserID { get; set; }
        public string Column1 { get; set; }
        public Nullable<System.DateTime> SignedDate { get; set; }

        public string SignedDateString
        {
            get
            {
                if (SignedDate != null)
                    return DateTime.ParseExact(SignedDate.ToString(), "MM/dd/yyyy", CultureInfo.InvariantCulture).ToString();
                return "";
            }
        }
    }
}
