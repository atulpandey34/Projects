using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Category> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Category GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Category entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        IEnumerable<Angular2_AspDotNet.Models.CategoryModel> GetAllCategory(int Userid, int OrganizationId);
    }
}
