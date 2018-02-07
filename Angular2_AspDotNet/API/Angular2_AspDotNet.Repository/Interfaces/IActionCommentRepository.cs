using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IActionCommentRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.ActionComment> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.ActionComment entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.ActionComment GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.ActionComment entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

       
    }
}
