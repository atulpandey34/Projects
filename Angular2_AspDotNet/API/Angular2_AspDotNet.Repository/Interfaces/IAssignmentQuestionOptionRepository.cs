using Angular2_AspDotNet.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAssignmentQuestionOptionRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.AssignmentQuestionOption> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.AssignmentQuestionOption GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<AssignmentQuestionOption> GetWithQuestionId(int QuestionId, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
