﻿using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRoleMenuMappingRepository
    {
       


        void Add(Angular2_AspDotNet.Data.RoleMenuMapping entity, int LoggedInUserId, int LoggedInOrganizationId);



        List<RoleMenuMappingViewModel> GetAllMenu(int RoleId, int LoggedInUserId, int LoggedInOrganizationId);

        void AddUpdateRoleMenu(RoleMenuMappingListModel model, int LoggedInUserId, int LoggedInOrganizationId);

        List<MenuViewModel> GetMenuByRoleId(List<int> RoleId, int LoggedInUserId, int LoggedInOrganizationId);

        string GetDefaultUrl(string Url, List<int> roleId, int LoggedINOrganizationId);

    }
}
