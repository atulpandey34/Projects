using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMonitoringMethodRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.MonitoringMethod> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.MonitoringMethod GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<MonitoringMethodModel> GetAllMonitoringMethod(int LoggedInUserId, int LoggedInOrganizationId);
    }
}
