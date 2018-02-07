using Angular2_AspDotNet.Data;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ISubTitleRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.SubTitle> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.SubTitle GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.SubTitle entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<SubTitle> GetByTitleId(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<Angular2_AspDotNet.Models.SubTitleModel> GetAllSubTitleWithTitleID(int titleId, int Userid, int OrganizationId);
    }
}
