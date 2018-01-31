using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ICorrectiveActionRepository
    {
        IEnumerable<CorrectiveAction> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId);

        CorrectiveActionDataModel GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        IEnumerable<CorrectiveActionModel> GetAllCorrectionAction( int LoggedInUserId, int LoggedInOrganizationId);
        void AddUpdateAction(CorrectiveActionModel entity, int LoggedInUserId, int LoggedInOrganizationId);
        CorrectiveActionDataModel GetCorrectiveActionByActionId(int actionId, int LoggedInUserId, int LoggedInOrganizationId);

        void AddCorrectiveActionFromAction(CorrectiveActionDataModel model, int userId, int LoggedInUserId, int LoggedInOrganizationId);

        CorrectiveActionList GetCorrectiveActionList(CorretiveActionListPageFilterModel filterModel, int LoggedInUserId, int LoggedInOrganizationId);

        void DeleteCorrectiveAction(int CorrectiveActionId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
