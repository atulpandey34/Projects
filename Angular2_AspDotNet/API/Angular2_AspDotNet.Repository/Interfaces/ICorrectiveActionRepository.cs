using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ICorrectiveActionRepository
    {
        IEnumerable<CorrectiveAction> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId);

        CorrectiveActionDataModel GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        IEnumerable<CorrectiveActionModel> GetAllCorrectionAction( int LoggedInUserId, int LoggedInOrganizationId);
        void AddUpdateAction(CorrectiveActionModel entity, int LoggedInUserId, int LoggedInOrganizationId);
        CorrectiveActionDataModel GetCorrectiveActionByActionId(int actionId, int LoggedInUserId, int LoggedInOrganizationId);

        void AddCorrectiveActionFromAction(CorrectiveActionDataModel model, int userId, int LoggedInUserId, int LoggedInOrganizationId);

        CorrectiveActionList GetCorrectiveActionList(CorretiveActionListPageFilterModel filterModel, int LoggedInUserId, int LoggedInOrganizationId);

        void DeleteCorrectiveAction(int CorrectiveActionId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
