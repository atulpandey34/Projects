using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class RoleViewModel
    {
        public int RoleId { get; set; }
        public string RoleName { get; set; }
        public bool IsAdmin { get; set; }
    }
    public class RoleMultiSelectViewModel
    {
        public int id { get; set; }
        public string name { get; set; }
    }

    public class RoleMultiSelectModel
    {
        public int id { get; set; }
        public string name { get; set; }
    }

    public class RoleMenuMappingViewModel
    {
        public int RoleMenuMappingId { get; set; }
        public int RoleId { get; set; }
        public int MenuId { get; set; }
        public int OrganizationId { get; set; }
        public int CreatedBy { get; set; }
        public System.DateTime CreatedDate { get; set; }
    }

    public class RoleMenuMappingListModel
    {
        public RoleMenuMappingListModel()
        {
            this.RoleMenuMappingViewModel = new List<Models.RoleMenuMappingViewModel>();
        }
        public List<RoleMenuMappingViewModel> RoleMenuMappingViewModel { get; set; }
        public int RoleId { get; set; }
    }
}
