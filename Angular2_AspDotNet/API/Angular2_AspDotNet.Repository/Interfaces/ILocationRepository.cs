using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ILocationRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Location> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Location entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Location GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Location entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<Angular2_AspDotNet.Models.LocationModel> GetAllLocation(int Userid, int OrganizationId);


    }
}
