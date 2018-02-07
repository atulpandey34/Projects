using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class SubTitleRepository : RepositoryBase<RiskManagement.Data.SubTitle>, ISubTitleRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public SubTitleRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<SubTitle> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public IEnumerable<RiskManagement.Models.SubTitleModel> GetAllSubTitleWithTitleID(int titleId, int Userid, int OrganizationId)
        {
            var subTitleList = base.GetAll(x => x.TitleID == titleId && x.OrganizationId == OrganizationId);
            return Mapper.Map<IEnumerable<SubTitle>, IEnumerable<RiskManagement.Models.SubTitleModel>>(subTitleList);
        }


        public SubTitle GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.SubTitleId == id && x.OrganizationId == LoggedInOrganizationId);
        }
        public List<SubTitle> GetByTitleId(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.TitleID == id && x.OrganizationId == LoggedInOrganizationId);
        }


        public void Update(SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
