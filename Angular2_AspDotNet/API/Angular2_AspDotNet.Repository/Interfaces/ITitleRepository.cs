using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ITitleRepository
    {

        IEnumerable<RiskManagement.Data.Title> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Title entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Title GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Title entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.TitleModel> GetAllTitle(int Userid, int OrganizationId);
    }
}
