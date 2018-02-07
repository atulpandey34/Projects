using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IHazardRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Hazard> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Hazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Hazard GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Hazard entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<HazardModel> GetAllHazard( int LoggedInUserId, int LoggedInOrganizationId);
    }
}
