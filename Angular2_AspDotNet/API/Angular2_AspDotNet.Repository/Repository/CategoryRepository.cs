using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;

namespace RiskManagement.Repository.Repository
{
    public class CategoryRepository : RepositoryBase<RiskManagement.Data.Category>, ICategoryRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public CategoryRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
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

        public IEnumerable<Category> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationID == LoggedInOrganizationId);
        }

        public IEnumerable<RiskManagement.Models.CategoryModel> GetAllCategory(int Userid, int OrganizationId)
        {
            var userList = GetAll(Userid, OrganizationId);
            return Mapper.Map<IEnumerable<Category>, IEnumerable<RiskManagement.Models.CategoryModel>>(userList);
        }

        public Category GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.CategoryID == id && x.OrganizationID == LoggedInOrganizationId);
        }

        public void Update(Category entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}

