﻿using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface INotificationRepository
    {
        IEnumerable<Notification> GetAll(int LoggedInUserId, int LoggedInOrganizationId);
        List<NotificationViewModel> GetAllNotificationList(int Userid, int OrganizationId);

        void Add(RiskManagement.Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Notification GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateNotification(NotificationViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        void DisMissNotification(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}