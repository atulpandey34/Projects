

using System;
using System.Collections.Generic;

namespace RiskManagement.Models
{
    public class EventViewModel
    {
        public EventViewModel()
        {
            this.EventDataModel = new EventDataModel();
            this.EventAttendeeDataModel = new List<Models.EventAttendeeDataModel>();
            this.ActionDataModel = new List<ActionDataModel>();
            this.AgendaDataModel = new List<AgendaDataModel>();
            this.ObjectiveViewModel = new List<Models.ObjectiveViewModel>();
        }

        public EventDataModel EventDataModel { get; set; }
        public List<EventAttendeeDataModel> EventAttendeeDataModel { get; set; }
        public List<ActionDataModel> ActionDataModel { get; set; }

        public List<AgendaDataModel> AgendaDataModel { get; set; }

        public List<ObjectiveViewModel> ObjectiveViewModel { get; set; }
        public bool IsAppointmnet { get; set; } = false;
    }
    public class EventDataModel
    {
        public int EventID { get; set; }
        public Nullable<int> EventType { get; set; }
        public Nullable<int> EventSubType { get; set; }
        public Nullable<System.DateTime> Date { get; set; }
        public Nullable<System.DateTime> StartTime { get; set; }
        public Nullable<System.DateTime> EndTime { get; set; }
        public Nullable<bool> Recurring { get; set; }
        public Nullable<int> OrganizationID { get; set; }
        public string TitleName { get; set; }

        public string SubTitleName { get; set; }
        public Nullable<int> LocationID { get; set; }

        public Nullable<int> AddedBy { get; set; }

        public int Reviewee { get; set; }
        public int RoleResponsibilityVersionId { get; set; }
        public string RecurrencePattern { get; set; }
        public System.DateTime RecurrenceEndDate { get; set; }
    }

    public class EventAttendeeDataModel
    {
        public int EventAttendeeID { get; set; }
        public int EventID { get; set; }
        public int UserID { get; set; }
    }

    public class ActionDataModel
    {
        public ActionDataModel()
        {
            this.ActionResponsiblePersonDataModel = new List<Models.ActionResponsiblePersonDataModel>();
            this.ActionCommentsListModel = new List<Models.ActionCommentsListModel>();
        }
        public int ActionID { get; set; }
        public string Title { get; set; }
        public System.DateTime Duedate { get; set; }

        public Nullable<int> SourceID { get; set; }
        public Nullable<int> OrganizationID { get; set; }

        public Nullable<int> EventActionStatusID { get; set; }
        public Nullable<bool> IsActionRequired { get; set; }

        public Nullable<int> CategoryID { get; set; }
        public string RootCause { get; set; }
        public Nullable<int> AddedBy { get; set; }
        public Nullable<int> ActionSourceID { get; set; }
        public Nullable<int> CorrectiveActionID { get; set; }

        public string ActionTaken { get; set; }
        public Nullable<bool> IsReportedAction { get; set; }
        public string FilePath { get; set; }
        public List<ActionResponsiblePersonDataModel> ActionResponsiblePersonDataModel { get; set; }
        public string Comments { get; set; }
        public Nullable<int> AssignedBy { get; set; }
        public List<ActionCommentsListModel> ActionCommentsListModel { get; set; }
    }

    public class ActionResponsiblePersonDataModel
    {
        public int ActionResponsiblePersonID { get; set; }
        public int ActionID { get; set; }
        public int UserID { get; set; }
        public Nullable<int> AddedBy { get; set; }


    }

    public class AgendaDataModel
    {
        public int AgendaID { get; set; }
        public string Title { get; set; }
        public string AgendaSource { get; set; }
        public Nullable<int> SourceID { get; set; }
        public Nullable<int> OrganizationID { get; set; }


    }
    public class EventFilterModel
    {
        public int type { get; set; }
        public int subType { get; set; }
        public string viewType { get; set; }
        public string date { get; set; }
    }

    public class EventFilterViewModel
    {
        public EventFilterViewModel()
        {
            this.EventDataModel = new List<EventDataModel>();
            this.EventAttendeeDataModel = new List<Models.EventAttendeeDataModel>();
            this.ActionDataModel = new List<ActionDataModel>();
            this.AgendaDataModel = new List<AgendaDataModel>();
        }

        public List<EventDataModel> EventDataModel { get; set; }
        public List<EventAttendeeDataModel> EventAttendeeDataModel { get; set; }
        public List<ActionDataModel> ActionDataModel { get; set; }

        public List<AgendaDataModel> AgendaDataModel { get; set; }
    }

    
}
