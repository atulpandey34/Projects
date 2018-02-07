using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IEventActionStatusRepository
    {
        IEnumerable<RiskManagement.Data.EventActionStatu> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.EventActionStatu entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.EventActionStatu GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.EventActionStatu entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.EventActionStatusModel> GetAllStatus(int Userid, int OrganizationId);
    }
}
