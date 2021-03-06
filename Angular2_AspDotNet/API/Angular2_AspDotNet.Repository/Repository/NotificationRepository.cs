﻿using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class NotificationRepository : RepositoryBase<Angular2_AspDotNet.Data.Notification>, INotificationRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public NotificationRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }

        public void Add(Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.AddedBy = LoggedInUserId;
            entity.Added_Date = DateTime.Now;
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public int AddUpdateNotification(NotificationViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Notification role = Mapper.Map<NotificationViewModel, Notification>(model);
            Add(role, LoggedInUserId, LoggedInOrganizationId);
            this._unitOfWork.Save();
            return role.NotificationID;
        }

        public void Update(Data.Notification entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            // base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.Notification GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetByID(id);
        }
        public void DisMissNotification(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Notification n= base.GetByID(id);
            n.IsReadByUser = true;
            Update(n);
            this._unitOfWork.Save();
        }
        public IEnumerable<Notification> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();

        }

        public List<NotificationViewModel> GetAllNotificationList(int Userid, int OrganizationId)
        {
            List<SP_GetNotificationData_Result> data = base.RepositoryContext.SP_GetNotificationData(Userid, OrganizationId).ToList();
            return Mapper.Map<IEnumerable<SP_GetNotificationData_Result>, IEnumerable<Angular2_AspDotNet.Models.NotificationViewModel>>(data).ToList();
        }



        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
