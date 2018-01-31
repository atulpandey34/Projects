﻿using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IEventRepository
    {
        IEnumerable<RiskManagement.Data.Event> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Event entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Event GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Event entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int Userid, int OrganizationId);

        void AddEventData(EventViewModel eventData, int Userid, int OrganizationId);

        EventFilterViewModel GetAllEventData(EventFilterModel filterModel, int Userid, int OrganizationId);
        EventFilterViewModel GetEventData(int EventId, int Userid, int OrganizationId);
        MeetingList GetMeetingList(int Userid, int OrganizationId, int PageNo, int PageSize, string sortColumn, string sortOrder, string subTitle = "", string action = "", string date = "", string location = "");
        void AddPerformanceReviewMeeting(EventViewModel eventData, int Userid, int OrganizationId);
        MeetingList GetPerformanceReviewMeetingList(int Userid, int OrganizationId, int PageNo, int PageSize, string sortColumn, string sortOrder, string subTitle = "", string action = "", string date = "", string location = "", string reviewee = "", string reviewer = "");

        List<RevieweeObjectiveViewModel> GetRevieweeObjectives(int revieweeId, int LoggedInUserId, int LoggedInOrganizationId);

        List<RevieweeObjectiveViewModel> GetRevieweeAction(int revieweeId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
