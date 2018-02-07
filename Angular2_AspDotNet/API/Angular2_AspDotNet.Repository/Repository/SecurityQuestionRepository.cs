using Angular2_AspDotNet.Models;
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
    public class SecurityQuestionRepository : RepositoryBase<Angular2_AspDotNet.Data.SecurityQuestion>, ISecurityQuestionRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public SecurityQuestionRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;

        }

        public void Add(Data.SecurityQuestion entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Insert(entity);

        }

        public  void Update(Data.SecurityQuestion entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.SecurityQuestion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetByID(id);
        }

        public  IEnumerable<SecurityQuestion> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();

        }

        public List<SecurityQuestionModel> GetAllSecurityQuestion(int Userid, int OrganizationId)
        {
            var data = base.GetAll();
            return Mapper.Map<IEnumerable<SecurityQuestion>, IEnumerable<Angular2_AspDotNet.Models.SecurityQuestionModel>>(data).ToList();
        }



        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
