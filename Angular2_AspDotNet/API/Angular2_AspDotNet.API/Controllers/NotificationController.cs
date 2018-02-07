using System.Web.Http;
using System.Collections.Generic;
using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Repository;
using Angular2_AspDotNet.Data.UnitOfWork;
using System.Linq;
using Angular2_AspDotNet.Data;
using System.Web.Http.Cors;
using System;

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/notification/")]
    public class NotificationController : APIBaseController
    {
        private INotificationRepository _INotificationRepository = null;
        public NotificationController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._INotificationRepository = new NotificationRepository(unitOfWork);

        }

        [HttpGet]
        public List<NotificationViewModel> GetAllNotificationList()
        {
            return this._INotificationRepository.GetAllNotificationList(base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public string DisMissNotification(int id)
        {
            this._INotificationRepository.DisMissNotification(id, base.UserId, base.OrganizationId);
            return "";
        }
    }
}
