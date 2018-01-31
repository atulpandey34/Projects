using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IActionRepository
    {
        IEnumerable<RiskManagement.Data.Action> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Action entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Action GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Action entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        ActionListViewModel GetAllActionData(ActionFilerModel filterModel, int LoggedInUserId, int LoggedInOrganizationId);
        ActionDataModel GetSingleWithResponsiblePerson(int actionID, int Userid, int OrganizationId);

        int UpdateActionData(ActionDataModel model, int Userid, int OrganizationId);
        ActionListViewModel GetAllActionData(int PageNo, int PageSize, string sortColumn, string sortOrder, string titleFilter = "", string dueDateFilter = "", string statusFilter = "",
            string organizerFilter = "", int LoggedInUserId = 0, int LoggedInOrganizationId = 0);

        void UpdateActionTakenData(ActionTakenUploadModel model, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
