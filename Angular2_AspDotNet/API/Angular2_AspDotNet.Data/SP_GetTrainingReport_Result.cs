//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Angular2_AspDotNet.Data
{
    using System;
    
    public partial class SP_GetTrainingReport_Result
    {
        public int TrainingId { get; set; }
        public int TrainingScheduleId { get; set; }
        public string TrainingNeed { get; set; }
        public int TraineeId { get; set; }
        public string TraineeName { get; set; }
        public string TraineeComment { get; set; }
        public int TrainerId { get; set; }
        public string TrainerName { get; set; }
        public string TrainerComment { get; set; }
        public Nullable<bool> IsUserAttendedTraining { get; set; }
        public string AttemptDate { get; set; }
        public Nullable<int> Score { get; set; }
        public Nullable<int> TotalScore { get; set; }
        public Nullable<long> RowID { get; set; }
    }
}
