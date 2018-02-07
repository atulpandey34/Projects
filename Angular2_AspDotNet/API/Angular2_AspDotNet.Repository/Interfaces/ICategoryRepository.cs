using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<RiskManagement.Data.Category> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Category GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<RiskManagement.Models.CategoryModel> GetAllCategory(int Userid, int OrganizationId);
    }
}
