using RiskManagement.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ISubTitleRepository
    {
        IEnumerable<RiskManagement.Data.SubTitle> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.SubTitle GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<SubTitle> GetByTitleId(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.SubTitleModel> GetAllSubTitleWithTitleID(int titleId, int Userid, int OrganizationId);
    }
}
