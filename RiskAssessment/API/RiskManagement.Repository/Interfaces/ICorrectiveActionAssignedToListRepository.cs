using RiskManagement.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ICorrectiveActionAssignedToListRepository
    {
        IEnumerable<RiskManagement.Data.CorrectiveActionAssignedToList> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.CorrectiveActionAssignedToList GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.CorrectiveActionAssignedToList entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<CorrectiveActionAssignedToList> GetAllWithCorrectionid(int correctionId, int LoggedInUserId, int LoggedInOrganizationId);



    }
}
