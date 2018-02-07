using Angular2_AspDotNet.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ICorrectiveActionAssignedToListRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.CorrectiveActionAssignedToList> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.CorrectiveActionAssignedToList GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<CorrectiveActionAssignedToList> GetAllWithCorrectionid(int correctionId, int LoggedInUserId, int LoggedInOrganizationId);



    }
}
