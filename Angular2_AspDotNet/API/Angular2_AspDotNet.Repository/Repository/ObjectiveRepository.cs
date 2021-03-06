﻿using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
namespace Angular2_AspDotNet.Repository.Repository
{
    public class ObjectiveRepository : RepositoryBase<Angular2_AspDotNet.Data.Objective>, IObjectiveRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public ObjectiveRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.Objective entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Objective> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public List<string> GetAllTextWithCreatedDate(int revieweeId, DateTime? createdDate, int organizationid)
        {
            return base.GetManyQueryable(x => x.RevieweeUserId == revieweeId && x.CreatedDate == createdDate && x.OrganizationId == organizationid).Select(x => x.Text).ToList<string>();
        }

        public Objective GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.ObjectiveId == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(Objective entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
