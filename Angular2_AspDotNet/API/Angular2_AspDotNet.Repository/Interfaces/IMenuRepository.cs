using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IMenuRepository
    {
        IEnumerable<RiskManagement.Data.Menu> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.Menu entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.Menu GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Menu entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateMenu(MenuViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        void Deactivate(int id, int LoggedInUserId, int LoggedInOrganizationId);

        MenuViewModel GetSingleById(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<MenuViewModel> GetAllMenu(int LoggedInUserId, int LoggedInOrganizationId);

        MenuViewList GetAllMenuListData(MenuFilterModel model, int Userid = 0, int OrganizationId = 0);

    }
}
