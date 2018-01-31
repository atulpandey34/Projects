using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace RiskManagement.Repository.Repository
{
    public class MasterDocumentTypeRepository : RepositoryBase<RiskManagement.Data.MasterDocumentType>, IMasterDocumentTypeRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public MasterDocumentTypeRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public  IEnumerable<MasterDocumentType> GetAll( int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
        }
        public MasterDocumentType GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x=>x.MasterDocumentTypeID==id && x.OrganizationId==LoggedInOrganizationId);
        }

        public List<RiskManagement.Models.MasterDocumentTypeViewModel> GetAllDocumentsType(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var userList = base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
            return Mapper.Map<IEnumerable<MasterDocumentType>, IEnumerable<RiskManagement.Models.MasterDocumentTypeViewModel>>(userList).ToList();
        }

        public int AddMasterDocumentType(string documentTypeValue, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterDocumentType documentType = new MasterDocumentType();
            documentType.Type = documentTypeValue;
            documentType.OrganizationId = LoggedInOrganizationId;
            base.Insert(documentType);
            this._unitOfWork.Save();
            return documentType.MasterDocumentTypeID;
        }
        public bool ValidateDocumentType(string documentType, int LoggedInUserId, int LoggedInOrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.Type == documentType && x.OrganizationId==LoggedInOrganizationId);
            if (data != null && !string.IsNullOrWhiteSpace(data.Type))
            {
                result = false;
            }
            return result;
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
