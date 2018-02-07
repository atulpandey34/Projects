using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using Angular2_AspDotNet.Models;
using System.Linq;
using System.Data.Entity.Core.Objects;
using System.Data.Entity;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class MasterReviewFrequencyUnitRepository : RepositoryBase<Angular2_AspDotNet.Data.MasterReviewFrequencyUnit>, IMasterReviewFrequencyUnitRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        public MasterReviewFrequencyUnitRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public IEnumerable<MasterReviewFrequencyUnit> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }
        public MasterReviewFrequencyUnit GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.MasterReviewFrequencyUnitID == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public bool ValidateReviewFrequencyUnit(string reviewFrequencyUnit, int LoggedInUserId, int LoggedInOrganizationId)
        {
            bool result = true;
            var data = base.Get(x => x.ReviewFrequencyUnit == reviewFrequencyUnit && x.OrganizationId==LoggedInOrganizationId);
            if (data != null && !string.IsNullOrWhiteSpace(data.ReviewFrequencyUnit))
            {
                result = false;
            }
            return result;
        }
        public List<Angular2_AspDotNet.Models.MasterReviewFrequencyUnitViewModel> GetMasterReviewFrequency(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var userList = base.GetAll(x=>x.OrganizationId==LoggedInOrganizationId);
            return Mapper.Map<IEnumerable<MasterReviewFrequencyUnit>, IEnumerable<Angular2_AspDotNet.Models.MasterReviewFrequencyUnitViewModel>>(userList).ToList();
        }
        public int AddMasterReviewFrequencyUnit(string frequencyValue, int LoggedInUserId, int LoggedInOrganizationId)
        {
            MasterReviewFrequencyUnit frequency = new MasterReviewFrequencyUnit();
            frequency.ReviewFrequencyUnit = frequencyValue;
            frequency.OrganizationId = LoggedInOrganizationId;
            base.Insert(frequency);
            this._unitOfWork.Save();
            return frequency.MasterReviewFrequencyUnitID;
        }
        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
