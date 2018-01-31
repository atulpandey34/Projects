using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ILocationRepository
    {
        IEnumerable<RiskManagement.Data.Location> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Location entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Location GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Location entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.LocationModel> GetAllLocation(int Userid, int OrganizationId);


    }
}
