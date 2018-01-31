using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    public class MenuViewModel
    {
        public int MenuId { get; set; }
        public string Title { get; set; }
        public string RouterLink { get; set; }
        public string Href { get; set; }
        public string Icon { get; set; }
        public string Target { get; set; }
        public Nullable<bool> HasSubMenu { get; set; }
        public Nullable<int> ParentMenuId { get; set; }
        public Nullable<int> SortOrder { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public int CreatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
    }

    public class MenuFilterModel
    {
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortColumn { get; set; }
        public string SortOrder { get; set; }
        public string TitleFilter { get; set; }
        public string HrefFilter { get; set; }
        public string RouterFilter { get; set; }
        public string ParentMenuFilter { get; set; }

    }

    public class GetAllMenuListDataViewResult
    {
        public int MenuId { get; set; }
        public string Title { get; set; }
        public string RouterLink { get; set; }
        public string Href { get; set; }
        public string Icon { get; set; }
        public string Target { get; set; }
        public Nullable<bool> HasSubMenu { get; set; }
        public Nullable<int> ParentMenuId { get; set; }
        public Nullable<int> SortOrder { get; set; }
        public System.DateTime CreatedDate { get; set; }
        public int CreatedBy { get; set; }
        public bool IsActive { get; set; }
        public bool IsDeleted { get; set; }
        public string ParentMenu { get; set; }
    }

    public class MenuViewList
    {
        public List<GetAllMenuListDataViewResult> GetAllMenuListDataViewResult { get; set; }
        public int TotalRecords { get; set; }
    }
}
