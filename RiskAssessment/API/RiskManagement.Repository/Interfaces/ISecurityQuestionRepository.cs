using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ISecurityQuestionRepository
    {
        IEnumerable<SecurityQuestion> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        List<SecurityQuestionModel> GetAllSecurityQuestion(int Userid, int OrganizationId);

        void Add(RiskManagement.Data.SecurityQuestion entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.SecurityQuestion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.SecurityQuestion entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }

}
