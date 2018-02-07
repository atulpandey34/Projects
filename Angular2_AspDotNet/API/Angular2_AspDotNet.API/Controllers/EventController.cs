using System.Web.Http;
using System.Collections.Generic;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Models;
using RiskManagement.Repository.Repository;
using RiskManagement.Data.UnitOfWork;
using System.Linq;
using RiskManagement.Data;
using System.Web.Http.Cors;
using System;
using RiskManagement.Core;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/Event")]
    public class EventController : APIBaseController
    {
        private IUserRepository _userRepository = null;
        private IEventRepository _eventRepository = null;
        private ILocationRepository _locationRepository = null;
        private ITitleRepository _titleRepository = null;
        private ISubTitleRepository _subTitleRepository = null;
        private IEventActionStatusRepository _eventActionStatusRepository = null;
        private IActionRepository _ActionRepository = null;
        private ICategoryRepository _CategoryRepository = null;
        private IActionSourceRepository _ActionSourceRepository = null;
        public EventController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._userRepository = new UserRepository(unitOfWork);
            this._eventRepository = new EventRepository(unitOfWork);
            this._locationRepository = new LocationRepository(unitOfWork);
            this._titleRepository = new TitleRepository(unitOfWork);
            this._subTitleRepository = new SubTitleRepository(unitOfWork);
            this._eventActionStatusRepository = new EventActionStatusRepository(unitOfWork);
            this._ActionRepository = new ActionRepository(unitOfWork);
            this._CategoryRepository = new CategoryRepository(unitOfWork);
            this._ActionSourceRepository = new ActionSourceRepository(unitOfWork);
        }
        [HttpGet]
        public List<UserModel> GetAllUser()
        {
            return this._userRepository.GetAllUser(base.UserId, base.OrganizationId).ToList();

        }

        [HttpGet]
        public List<UserModel> GetAllauditor()
        {
            return this._userRepository.GetAllauditor( base.OrganizationId).ToList();

        }
        [HttpGet]
        public List<CategoryModel> GetAllCategories()
        {
            return this._CategoryRepository.GetAllCategory(base.UserId, base.OrganizationId).ToList();

        }
        [HttpGet]
        public List<ActionSourceModel> GetAllActionSource()
        {
            return this._ActionSourceRepository.GetAllActionSource(base.UserId, base.OrganizationId).ToList();

        }
        [HttpPost]
        public string AddEvent([FromBody] EventViewModel eventData)
        {
            this._eventRepository.AddEventData(eventData, base.UserId, base.OrganizationId);
            return "Event added successfully";
        }
        [HttpPost]
        public string AddPerformanceReviewMeeting([FromBody] EventViewModel eventData)
        {
            this._eventRepository.AddPerformanceReviewMeeting(eventData, base.UserId, base.OrganizationId);
            return "Event added successfully";
        }
        [HttpPost]
        public int UpdateAction([FromBody] ActionDataModel eventData)
        {
            return this._ActionRepository.UpdateActionData(eventData, base.UserId, base.OrganizationId);

        }
        [HttpPost]
        public EventFilterViewModel GetEventFilteredData([FromBody] EventFilterModel eventData)
        {
            return this._eventRepository.GetAllEventData(eventData, base.UserId, base.OrganizationId);

        }
        [HttpGet]
        public EventFilterViewModel GetEventData(int EventID)
        {
            return this._eventRepository.GetEventData(EventID, base.UserId, base.OrganizationId);

        }

        [HttpGet]
        public List<LocationModel> GetLocationList()
        {
            return _locationRepository.GetAllLocation(base.UserId, base.OrganizationId).ToList();
        }

        [HttpGet]
        public List<TitleModel> GeTitleList()
        {
            return _titleRepository.GetAllTitle(base.UserId, base.OrganizationId).ToList();
        }

        [HttpGet]
        public List<EventActionStatusModel> GeEventStatusList()
        {
            return _eventActionStatusRepository.GetAllStatus(base.UserId, base.OrganizationId).ToList();
        }

        [HttpGet]
        public List<SubTitleModel> GeSubTitleList(int titleID)
        {
            return _subTitleRepository.GetAllSubTitleWithTitleID(titleID, base.UserId, base.OrganizationId).ToList();
        }

        [HttpGet]
        public string DeleteEvent(int eventID)
        {
            this._eventRepository.Delete(eventID, base.UserId, base.OrganizationId);
            return "Event deleted successfully";
        }
        [HttpGet]
        public ActionDataModel GetActionData(int actionID)
        {
            return this._ActionRepository.GetSingleWithResponsiblePerson(actionID, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public MeetingList GetMeetingList(int PageNo = 1, int PageSize = 10, string sortColumn = "SubTitleName", string sortOrder = "asc"
            , string subTitle = "", string action = "", string date = "", string location = ""
            )
        {
            return this._eventRepository.GetMeetingList(base.UserId, base.OrganizationId, PageNo, PageSize, sortColumn, sortOrder, subTitle, action, date, location);
        }
        [HttpGet]
        public MeetingList GetPerformanceReviewMeetingList(int PageNo = 1, int PageSize = 10, string sortColumn = "SubTitleName", string sortOrder = "asc"
            , string subTitle = "", string action = "", string date = "", string location = "",
            string reviewee = "", string reviewer = ""
            )
        {
            return this._eventRepository.GetPerformanceReviewMeetingList(base.UserId, base.OrganizationId, PageNo, PageSize, sortColumn, sortOrder, subTitle, action, date, location, reviewee, reviewer);
        }

        [HttpGet]
        public List<RevieweeObjectiveViewModel> GetRevieweeObjectives(int revieweeId)
        {
            return this._eventRepository.GetRevieweeObjectives(revieweeId, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<RevieweeObjectiveViewModel> GetRevieweeAction(int revieweeId)
        {
            return this._eventRepository.GetRevieweeAction(revieweeId, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<DateTime> GenerateAllDateFromCronExpression(string expression)
        {
            return CommonMethods.GenerateAllDateFromCronExpression(expression);
        }
    }
}
