using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface INotificationRepository
    {
        IEnumerable<Notification> GetAll(int LoggedInUserId, int LoggedInOrganizationId);
        List<NotificationViewModel> GetAllNotificationList(int Userid, int OrganizationId);

        void Add(Angular2_AspDotNet.Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Notification GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateNotification(NotificationViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        void DisMissNotification(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
