using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class TrainingViewModel
    {
        public int TrainingId { get; set; }
        public string TrainingNeed { get; set; }
        public bool TrainerRequired { get; set; }
        public int TrainingType { get; set; }
        public Nullable<int> TrainingEventID { get; set; }
        public Nullable<bool> IsAssignmentRequired { get; set; }
        public Nullable<int> AssignmentID { get; set; }
        public bool Active { get; set; }
        public System.DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
        public string YouTubeLink { get; set; }
    }

    public class TrainingMaterialViewModel
    {
        public int TrainingMaterialId { get; set; }
        public string YouTubeLink { get; set; }
        public string FilePath { get; set; }

        public string FileName { get; set; }
        public Nullable<int> TrainingId { get; set; }
        public string FileExtension { get; set; }
    }

    public class TrainingListFilterModel
    {
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortColumn { get; set; }
        public string SortOrder { get; set; }
        public string TrainingNeed { get; set; }
        public Nullable<int> TrainerRequired { get; set; }
        public Nullable<int> TrainingType { get; set; }
        public string Assignment { get; set; }
    }

    public class TrainingList
    {
        public int TrainingId { get; set; }
        public string TrainingNeed { get; set; }
        public string TrainerRequired { get; set; }
        public string TrainingType { get; set; }
        public string Assignment { get; set; }
        public Nullable<long> RowID { get; set; }
    }
    public class TrainingListViewModel
    {
        public TrainingListViewModel()
        {
            this.TrainingList = new List<Models.TrainingList>();
        }
        public List<TrainingList> TrainingList { get; set; }
        public int TotalRecords { get; set; }
    }

    public class TrainingNeedList
    {
        public int TrainingId { get; set; }
        public string TrainingNeed { get; set; }
    }

    public class UserList
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
    }

    public class BaseFilterModel
    {
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortColumn { get; set; }
        public string SortOrder { get; set; }
    }

    public class TrainingReportFilterModel: BaseFilterModel
    {
        public Nullable<int> TrainingId { get; set; }
        public string StartDate { get; set; }
        public string EndDate { get; set; }
    }

    public class TrainerReportFilterModel : BaseFilterModel
    {
        public Nullable<int> TrainerId { get; set; }
    }

    public class TrainingUserReportFilterModel : BaseFilterModel
    {
        public Nullable<int> UserId { get; set; }
    }
}
