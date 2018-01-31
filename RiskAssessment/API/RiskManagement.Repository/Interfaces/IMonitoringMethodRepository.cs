using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IMonitoringMethodRepository
    {
        IEnumerable<RiskManagement.Data.MonitoringMethod> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.MonitoringMethod GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.MonitoringMethod entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<MonitoringMethodModel> GetAllMonitoringMethod(int LoggedInUserId, int LoggedInOrganizationId);
    }
}
