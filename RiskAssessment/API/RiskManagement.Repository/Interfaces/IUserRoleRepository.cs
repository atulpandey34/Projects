using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IUserRoleRepository
    {
        IEnumerable<UserRole> GetAll(int LoggedInUserId, int LoggedInOrganizationId, int UserId);

        void Add(RiskManagement.Data.UserRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.UserRole GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.UserRole entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);


    }
}
