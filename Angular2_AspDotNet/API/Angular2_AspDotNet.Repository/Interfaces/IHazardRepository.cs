using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IHazardRepository
    {
        IEnumerable<RiskManagement.Data.Hazard> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Hazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Hazard GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Hazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<HazardModel> GetAllHazard( int LoggedInUserId, int LoggedInOrganizationId);
    }
}
