using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAssignmentRepository
    {
        IEnumerable<RiskManagement.Data.Assignment> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Assignment entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Assignment GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Assignment entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int DeleteAssignment(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<AssignmentListFilterModel> GetAllAssignment( int LoggedInUserId, int LoggedInOrganizationId);

        AssignmentListFilterModel GetAssginmentListWithAssignmentId(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId);
        //int AddUpdateAssignmentQuestion(AssignmentModel model, int Userid);

        AssignmentListViewResult GetAssignmentListData(AssignmentListFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateAssignment(AssignmentListFilterModel model, int Userid, int OrganizationId);

    }
}
