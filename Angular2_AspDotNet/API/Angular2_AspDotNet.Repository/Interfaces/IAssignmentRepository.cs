using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAssignmentRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Assignment> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Assignment entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Assignment GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Assignment entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int DeleteAssignment(int id, int LoggedInUserId, int LoggedInOrganizationId);
        List<AssignmentListFilterModel> GetAllAssignment( int LoggedInUserId, int LoggedInOrganizationId);

        AssignmentListFilterModel GetAssginmentListWithAssignmentId(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId);
        //int AddUpdateAssignmentQuestion(AssignmentModel model, int Userid);

        AssignmentListViewResult GetAssignmentListData(AssignmentListFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateAssignment(AssignmentListFilterModel model, int Userid, int OrganizationId);

    }
}
