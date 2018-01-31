using RiskManagement.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAssignmentQuestionOptionRepository
    {
        IEnumerable<RiskManagement.Data.AssignmentQuestionOption> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.AssignmentQuestionOption GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.AssignmentQuestionOption entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<AssignmentQuestionOption> GetWithQuestionId(int QuestionId, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
