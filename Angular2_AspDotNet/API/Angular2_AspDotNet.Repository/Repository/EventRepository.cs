using AutoMapper;
using RiskManagement.Core;
using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class EventRepository : RepositoryBase<RiskManagement.Data.Event>, IEventRepository, IDisposable
    {
        private int LoggedInUserID = 1;
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IEventAttendeeRepository _IEventAttendeeRepository = null;
        private IActionRepository _IActionRepository = null;
        private IActionResponsiblePersonRepository _IActionResponsiblePersonRepository = null;
        private IAgendaRepository _IAgendaRepository = null;
        private IAppointmentRepository _IAppointmentRepository = null;
        private IObjectiveRepository _IObjectiveRepository = null;
        private IPerformanceReviewRepository _IPerformanceReviewRepository = null;
        private IRoleResponsibilityRepository _IRoleResponsibilityRepository = null;
        public EventRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            _IEventAttendeeRepository = new EventAttendeeRepository(this._unitOfWork);
            _IActionRepository = new ActionRepository(this._unitOfWork);
            _IActionResponsiblePersonRepository = new ActionResponsiblePersonRepository(this._unitOfWork);
            _IAgendaRepository = new AgendaRepository(this._unitOfWork);
            this._IAppointmentRepository = new AppointmentRepository(this._unitOfWork);
            this._IObjectiveRepository = new ObjectiveRepository(this._unitOfWork);
            this._IPerformanceReviewRepository = new PerformanceReviewRepository(this._unitOfWork);
            this._IRoleResponsibilityRepository = new RoleResponsibilityRepository(this._unitOfWork);
        }
        public void Add(RiskManagement.Data.Event entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public void AddEventData(EventViewModel eventData, int Userid, int OrganizationId)
        {
            Event evenT = Mapper.Map<EventDataModel, Event>(eventData.EventDataModel);
            evenT.AddedBy = Userid;
            if (evenT.EventID == 0)
            {
                evenT.OrganizationID = OrganizationId;
                base.Insert(evenT);
                if (eventData.IsAppointmnet)
                {
                    Appointment appointment = new Appointment();
                    appointment.EventId = evenT.EventID;
                    appointment.Event = evenT;
                    appointment.OrganizationID = OrganizationId;
                    this._IAppointmentRepository.Add(appointment, Userid, OrganizationId);
                }
            }
            else
                base.Update(evenT);
            _unitOfWork.Save();
            if (evenT.EventID > 0)
            {
                base.RepositoryContext.SP_DeleteEventAgenda(evenT.EventID, OrganizationId);
                base.RepositoryContext.SP_DeleteEventAttendees(evenT.EventID, OrganizationId);
            }

            foreach (EventAttendeeDataModel model in eventData.EventAttendeeDataModel)
            {
                var data = Mapper.Map<EventAttendeeDataModel, EventAttendee>(model);
                //data.Event = evenT;
                data.EventID = evenT.EventID;
                data.OrganizationId = OrganizationId;
                _IEventAttendeeRepository.Add(data, Userid, OrganizationId);
            }
            foreach (AgendaDataModel model in eventData.AgendaDataModel)
            {
                model.SourceID = evenT.EventID;
                var data = Mapper.Map<AgendaDataModel, Agendum>(model);
                data.OrganizationID = OrganizationId;
                _IAgendaRepository.Add(data, Userid, OrganizationId);
            }
            foreach (ActionDataModel model in eventData.ActionDataModel)
            {

                model.SourceID = evenT.EventID;
                var data = Mapper.Map<ActionDataModel, RiskManagement.Data.Action>(model);
                if (model.ActionID == 0)
                {
                    data.OrganizationID = OrganizationId;
                    _IActionRepository.Add(data, Userid, OrganizationId);
                }
                else
                {
                    _IActionRepository.Update(data, Userid, OrganizationId);
                    base.RepositoryContext.Sp_DeleteActionResponsiblePerson(model.ActionID);
                }
                foreach (ActionResponsiblePersonDataModel resposibleModel in model.ActionResponsiblePersonDataModel)
                {
                    var childData = Mapper.Map<ActionResponsiblePersonDataModel, ActionResponsiblePerson>(resposibleModel);
                    childData.Action = data;
                    childData.AddedBy = LoggedInUserID;
                    childData.OrganizationId = OrganizationId;
                    _IActionResponsiblePersonRepository.Add(childData, Userid, OrganizationId);

                }
            }
            _unitOfWork.Save();
        }
        public void Delete(int id, int Userid, int OrganizationId)
        {
            this._unitOfWork.Context.SP_DeleteEvent(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Event> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationID == LoggedInOrganizationId);
        }

        public Event GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.EventID == id && x.OrganizationID == LoggedInOrganizationId);
        }

        public EventFilterViewModel GetAllEventData(EventFilterModel filterModel, int Userid, int OrganizationId)
        {
            DbDataReader reader = null;
            EventFilterViewModel model = new EventFilterViewModel();
            try
            {
                RepositoryContext.Database.Initialize(force: false);

                var cmd = RepositoryContext.Database.Connection.CreateCommand();

                cmd.CommandText = "SP_GetAllEventData";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter parm1 = new SqlParameter();
                parm1.ParameterName = "@type";
                parm1.Value = filterModel.type;
                parm1.SqlDbType = SqlDbType.Int;

                SqlParameter parm2 = new SqlParameter();
                parm2.ParameterName = "@subType";
                parm2.Value = filterModel.subType;
                parm2.SqlDbType = SqlDbType.Int;

                SqlParameter parm3 = new SqlParameter();
                parm3.ParameterName = "@viewType";
                parm3.Value = filterModel.viewType;
                parm3.SqlDbType = SqlDbType.VarChar;

                SqlParameter parm4 = new SqlParameter();
                parm4.ParameterName = "@selectedDate";
                parm4.Value = filterModel.date;
                parm4.SqlDbType = SqlDbType.VarChar;

                SqlParameter parm5 = new SqlParameter();
                parm5.ParameterName = "@OrganizationId";
                parm5.Value = OrganizationId;
                parm5.SqlDbType = SqlDbType.Int;

                cmd.Parameters.Add(parm1);
                cmd.Parameters.Add(parm2);
                cmd.Parameters.Add(parm3);
                cmd.Parameters.Add(parm4);
                cmd.Parameters.Add(parm5);

                if (RepositoryContext.Database.Connection.State == ConnectionState.Closed)
                {
                    RepositoryContext.Database.Connection.Open();
                }
                reader = cmd.ExecuteReader();

                model.EventDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                       .ObjectContext.Translate<EventDataModel>(reader)
                                        select n).ToList();

                reader.NextResult();

                model.EventAttendeeDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<EventAttendeeDataModel>(reader)
                                                select n).ToList();

                reader.NextResult();

                model.ActionDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<ActionDataModel>(reader)
                                         select n).ToList();

                reader.NextResult();

                model.AgendaDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                     .ObjectContext.Translate<AgendaDataModel>(reader)
                                         select n).ToList();

                if (model.ActionDataModel != null && model.ActionDataModel.Any())
                {
                    foreach (ActionDataModel actionModel in model.ActionDataModel)
                    {
                        var data = this._IActionResponsiblePersonRepository.GetByActionId(actionModel.ActionID, Userid, OrganizationId);
                        actionModel.ActionResponsiblePersonDataModel = Mapper.Map<List<ActionResponsiblePerson>, List<ActionResponsiblePersonDataModel>>(data);
                    }
                }


            }
            finally
            {
                if (reader != null)
                {
                    if (!reader.IsClosed)
                    {
                        reader.Close();
                    }
                }
                if (RepositoryContext.Database.Connection.State == ConnectionState.Open)
                {
                    RepositoryContext.Database.Connection.Close();
                    RepositoryContext.Database.Connection.Dispose();
                }
            }
            return model;
        }

        public EventFilterViewModel GetEventData(int EventId, int Userid, int OrganizationId)
        {
            DbDataReader reader = null;
            EventFilterViewModel model = new EventFilterViewModel();
            try
            {
                RepositoryContext.Database.Initialize(force: false);

                var cmd = RepositoryContext.Database.Connection.CreateCommand();

                cmd.CommandText = "SP_GetEventData";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter parm1 = new SqlParameter();
                parm1.ParameterName = "@EventId";
                parm1.Value = EventId;
                parm1.SqlDbType = SqlDbType.Int;

                SqlParameter parm5 = new SqlParameter();
                parm5.ParameterName = "@OrganizationId";
                parm5.Value = OrganizationId;
                parm5.SqlDbType = SqlDbType.Int;

                cmd.Parameters.Add(parm1);
                cmd.Parameters.Add(parm5);

                if (RepositoryContext.Database.Connection.State == ConnectionState.Closed)
                {
                    RepositoryContext.Database.Connection.Open();
                }
                reader = cmd.ExecuteReader();

                model.EventDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                       .ObjectContext.Translate<EventDataModel>(reader)
                                        select n).ToList();

                reader.NextResult();

                model.EventAttendeeDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<EventAttendeeDataModel>(reader)
                                                select n).ToList();

                reader.NextResult();

                model.ActionDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<ActionDataModel>(reader)
                                         select n).ToList();

                reader.NextResult();

                model.AgendaDataModel = (from n in ((IObjectContextAdapter)RepositoryContext)
                     .ObjectContext.Translate<AgendaDataModel>(reader)
                                         select n).ToList();

                if (model.ActionDataModel != null && model.ActionDataModel.Any())
                {
                    foreach (ActionDataModel actionModel in model.ActionDataModel)
                    {
                        var data = this._IActionResponsiblePersonRepository.GetByActionId(actionModel.ActionID, Userid, OrganizationId);
                        actionModel.ActionResponsiblePersonDataModel = Mapper.Map<List<ActionResponsiblePerson>, List<ActionResponsiblePersonDataModel>>(data);
                    }
                }


            }
            finally
            {
                if (reader != null)
                {
                    if (!reader.IsClosed)
                    {
                        reader.Close();
                    }
                }
                if (RepositoryContext.Database.Connection.State == ConnectionState.Open)
                {
                    RepositoryContext.Database.Connection.Close();
                    RepositoryContext.Database.Connection.Dispose();
                }
            }
            return model;
        }

        public MeetingList GetMeetingList(int Userid, int OrganizationId, int PageNo, int PageSize, string sortColumn, string sortOrder, string subTitle = "", string action = "", string date = "", string location = "")
        {
            MeetingList list = new MeetingList();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetMeetingList(PageNo, PageSize, sortColumn, sortOrder, subTitle, action, date, location, OrganizationId, totalRecords).ToList();
            list.MeetingListModel = Mapper.Map<List<SP_GetMeetingList_Result>, List<MeetingListModel>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public MeetingList GetPerformanceReviewMeetingList(int Userid, int OrganizationId, int PageNo,
            int PageSize, string sortColumn, string sortOrder, string subTitle = "",
            string action = "", string date = "", string location = ""
            , string reviewee = "", string reviewer = "")
        {
            MeetingList list = new MeetingList();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetPerformanceReviewMeetingList(PageNo, PageSize, sortColumn, sortOrder, subTitle, action, date, location, OrganizationId, reviewee, reviewer, totalRecords).ToList();
            list.MeetingListModel = Mapper.Map<List<SP_GetPerformanceReviewMeetingList_Result>, List<MeetingListModel>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public void Update(Event entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
        public void AddPerformanceReviewMeeting(EventViewModel eventData, int Userid, int OrganizationId)
        {
            Event evenT = Mapper.Map<EventDataModel, Event>(eventData.EventDataModel);
            evenT.AddedBy = Userid;
            if (evenT.EventID == 0)
            {
                evenT.OrganizationID = OrganizationId;
                base.Insert(evenT);
                _unitOfWork.Save();
                //setting parent event id with all the events for recurring events
                base.RepositoryContext.SP_SetParentEventId(eventData.EventDataModel.Reviewee, OrganizationId, evenT.EventID);
                if (eventData.IsAppointmnet)
                {
                    Appointment appointment = new Appointment();
                    appointment.EventId = evenT.EventID;
                    appointment.Event = evenT;
                    appointment.OrganizationID = OrganizationId;
                    this._IAppointmentRepository.Add(appointment, Userid, OrganizationId);
                }

                PerformanceReview review = new PerformanceReview();
                review.OrganizationID = OrganizationId;
                review.EventID = evenT.EventID;
                review.RevieweeUserID = eventData.EventDataModel.Reviewee;
                review.RecurrencePattern = eventData.EventDataModel.RecurrencePattern;
                review.RecurrenceEndDate = eventData.EventDataModel.RecurrenceEndDate;
                if (!string.IsNullOrWhiteSpace(eventData.EventDataModel.RecurrencePattern))
                {
                    review.NextReviewDate = CommonMethods.GenerateNextDateFromCronExpression(eventData.EventDataModel.RecurrencePattern);
                    
                }
                review.ReviewerUserID = Userid;
                this._IPerformanceReviewRepository.Add(review, Userid, OrganizationId);
                _unitOfWork.Save();
                this._IRoleResponsibilityRepository.SetRoleResponsibilityOfPerformanceReview(eventData.EventDataModel.Reviewee, review.PerformanceReviewID, OrganizationId);
            }
            else
            {
                base.Update(evenT);
                _unitOfWork.Save();
                PerformanceReview review = base.RepositoryContext.PerformanceReviews.Where(x => x.EventID == evenT.EventID).FirstOrDefault();
                review.RecurrencePattern = eventData.EventDataModel.RecurrencePattern;
                review.RecurrenceEndDate = eventData.EventDataModel.RecurrenceEndDate;
                if (!string.IsNullOrWhiteSpace(eventData.EventDataModel.RecurrencePattern))
                    review.NextReviewDate = CommonMethods.GenerateNextDateFromCronExpression(eventData.EventDataModel.RecurrencePattern);
                this._IPerformanceReviewRepository.Update(review, Userid, OrganizationId);
            }
            // for recuurencing event
            if (!string.IsNullOrWhiteSpace(eventData.EventDataModel.RecurrencePattern))
            {
                base.RepositoryContext.SP_DeletePerformanceReviewEvent(Userid, OrganizationId, eventData.EventDataModel.Reviewee);
                Event nextEvent = new Event();
                nextEvent.Date = CommonMethods.GenerateNextDateFromCronExpression(eventData.EventDataModel.RecurrencePattern);
                nextEvent.EventType = eventData.EventDataModel.EventType;
                nextEvent.EventSubType = eventData.EventDataModel.EventSubType;
                nextEvent.StartTime = eventData.EventDataModel.StartTime;
                nextEvent.EndTime = eventData.EventDataModel.EndTime;
                nextEvent.OrganizationID = OrganizationId;
                nextEvent.Recurring = true;
                nextEvent.LocationID = eventData.EventDataModel.LocationID;
                nextEvent.AddedBy = Userid;
                base.Insert(nextEvent);
                _unitOfWork.Save();
                base.RepositoryContext.SP_SetParentEventId(eventData.EventDataModel.Reviewee, OrganizationId, nextEvent.EventID);

                foreach (EventAttendeeDataModel model in eventData.EventAttendeeDataModel)
                {
                    var data = Mapper.Map<EventAttendeeDataModel, EventAttendee>(model);
                    data.EventID = nextEvent.EventID;
                    data.OrganizationId = OrganizationId;
                    _IEventAttendeeRepository.Add(data, Userid, OrganizationId);
                }

            }
            if (evenT.EventID > 0)
            {
                //base.RepositoryContext.SP_DeletePerformanceReview(evenT.EventID, OrganizationId);
                base.RepositoryContext.SP_DeleteEventAgenda(evenT.EventID, OrganizationId);
                //base.RepositoryContext.SP_DeleteEventAttendees(evenT.EventID, OrganizationId);
            }



            foreach (EventAttendeeDataModel model in eventData.EventAttendeeDataModel)
            {
                var data = Mapper.Map<EventAttendeeDataModel, EventAttendee>(model);
                data.EventID = evenT.EventID;
                data.OrganizationId = OrganizationId;
                _IEventAttendeeRepository.Add(data, Userid, OrganizationId);
            }
      
            
            foreach (AgendaDataModel model in eventData.AgendaDataModel)
            {
                model.SourceID = evenT.EventID;
                var data = Mapper.Map<AgendaDataModel, Agendum>(model);
                data.OrganizationID = OrganizationId;
                data.CreatedDate = DateTime.Now;
                data.RevieweeUserId = eventData.EventDataModel.Reviewee;
                _IAgendaRepository.Add(data, Userid, OrganizationId);
            }
            foreach (ObjectiveViewModel model in eventData.ObjectiveViewModel)
            {
                var data = Mapper.Map<ObjectiveViewModel, Objective>(model);
                data.SourceId = evenT.EventID;
                data.OrganizationId = OrganizationId;
                data.ObjectiveSource = "P";
                data.CreatedDate = DateTime.Now;
                data.RevieweeUserId = eventData.EventDataModel.Reviewee;
                _IObjectiveRepository.Add(data, Userid, OrganizationId);
            }
            foreach (ActionDataModel model in eventData.ActionDataModel)
            {

                model.SourceID = evenT.EventID;
                var data = Mapper.Map<ActionDataModel, RiskManagement.Data.Action>(model);
                if (model.ActionID == 0)
                {
                    data.CreatedDate = DateTime.Now;
                    data.RevieweeUserId = eventData.EventDataModel.Reviewee;
                    data.OrganizationID = OrganizationId;
                    _IActionRepository.Add(data, Userid, OrganizationId);
                }
                else
                {
                    _IActionRepository.Update(data, Userid, OrganizationId);
                    base.RepositoryContext.Sp_DeleteActionResponsiblePerson(model.ActionID);
                }
                foreach (ActionResponsiblePersonDataModel resposibleModel in model.ActionResponsiblePersonDataModel)
                {
                    var childData = Mapper.Map<ActionResponsiblePersonDataModel, ActionResponsiblePerson>(resposibleModel);
                    childData.Action = data;
                    childData.AddedBy = LoggedInUserID;
                    childData.OrganizationId = OrganizationId;
                    _IActionResponsiblePersonRepository.Add(childData, Userid, OrganizationId);

                }
            }
            _unitOfWork.Save();
        }

        public List<RevieweeObjectiveViewModel> GetRevieweeObjectives(int revieweeId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<RevieweeObjectiveViewModel> RevieweeObjectiveViewModel = new List<RevieweeObjectiveViewModel>();
            List<SP_FetObjectiveDate_Result> data = base.RepositoryContext.SP_FetObjectiveDate(revieweeId, LoggedInOrganizationId).ToList();
            if (data != null && data.Count > 0)
            {
                foreach (SP_FetObjectiveDate_Result date in data)
                {
                    RevieweeObjectiveViewModel obj = new RevieweeObjectiveViewModel();
                    obj.CreatedDate = date.CreatedDate;
                    obj.Text = base.RepositoryContext.SP_GetObjectiveTextForRevieweeUser(revieweeId, LoggedInOrganizationId, date.CreatedDate, date.EventId).ToList();
                    RevieweeObjectiveViewModel.Add(obj);
                }
            }
            return RevieweeObjectiveViewModel;
        }

        public List<RevieweeObjectiveViewModel> GetRevieweeAction(int revieweeId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            List<RevieweeObjectiveViewModel> RevieweeObjectiveViewModel = new List<RevieweeObjectiveViewModel>();
            List<SP_GetActionDate_Result> data = base.RepositoryContext.SP_GetActionDate(revieweeId, LoggedInOrganizationId).ToList();
            if (data != null && data.Count > 0)
            {
                foreach (SP_GetActionDate_Result date in data)
                {
                    RevieweeObjectiveViewModel obj = new RevieweeObjectiveViewModel();
                    obj.CreatedDate = date.CreatedDate;
                    obj.Text = base.RepositoryContext.SP_GetActionTextForRevieweeUser(revieweeId, LoggedInOrganizationId, date.CreatedDate, date.EventId).ToList();
                    RevieweeObjectiveViewModel.Add(obj);
                }
            }
            return RevieweeObjectiveViewModel;
        }
    }
}
