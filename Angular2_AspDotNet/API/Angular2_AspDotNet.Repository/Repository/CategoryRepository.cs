using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class CategoryRepository : RepositoryBase<Angular2_AspDotNet.Data.Category>, ICategoryRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public CategoryRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(Angular2_AspDotNet.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId)
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

        public IEnumerable<Angular2_AspDotNet.Models.CategoryModel> GetAllCategory(int Userid, int OrganizationId)
        {
            var userList = GetAll(Userid, OrganizationId);
            return Mapper.Map<IEnumerable<Category>, IEnumerable<Angular2_AspDotNet.Models.CategoryModel>>(userList);
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

