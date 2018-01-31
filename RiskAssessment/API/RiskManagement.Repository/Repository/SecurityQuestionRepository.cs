using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;
using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;

namespace RiskManagement.Repository.Repository
{
    public class SecurityQuestionRepository : RepositoryBase<RiskManagement.Data.SecurityQuestion>, ISecurityQuestionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;



        public SecurityQuestionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
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
            return Mapper.Map<IEnumerable<SecurityQuestion>, IEnumerable<RiskManagement.Models.SecurityQuestionModel>>(data).ToList();
        }



        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
