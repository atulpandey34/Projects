using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Models
{
    // Detail page models
    public class FolderPopupViewModel
    {
        public FolderPopupViewModel()
        {
            RoleList = new List<DocumentFolderRoleViewModel>();
            UserList = new List<DocumentFolderUserViewModel>();
            Roles = new List<int>();
            Users = new List<int>();
        }
        public int MasterDocumentFolderID { get; set; }
        public string FolderName { get; set; }
        public List<int> Users { get; set; }
        public List<int> Roles { get; set; }
        public List<DocumentFolderRoleViewModel> RoleList { get; set; }
        public List<DocumentFolderUserViewModel> UserList { get; set; }
    }
    public class DocumentFolderRoleViewModel
    {
        public int DocumentFolderRoleID { get; set; }
        public int DocumentFolderID { get; set; }
        public int RoleID { get; set; }
    }
    public class DocumentFolderUserViewModel
    {
        public int DocumentFolderUserID { get; set; }
        public int DocumentFolderID { get; set; }
        public int UserID { get; set; }
    }
    //Folder list view model
    public class MasterDocumentFolderListFilterModel
    {
        public int MasterDocumentFolderID { get; set; }
        public string FolderName { get; set; }
        public string RoleName { get; set; }
        public string UserName { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class MasterDocumentFolderListViewResult
    {
        public MasterDocumentFolderListViewResult()
        {
            this.DocumentFolderListResult = new List<MasterDocumentFolderListResult>();
        }
        public int TotalRecords { get; set; }
        public List<MasterDocumentFolderListResult> DocumentFolderListResult { get; set; }
    }
    public class MasterDocumentFolderListResult
    {
        public int MasterDocumentFolderID { get; set; }
        public string FolderName { get; set; }
        public Nullable<int> TotalDocuments { get; set; }
        public string RoleName { get; set; }
        public string UserName { get; set; }
        public Nullable<long> RowID { get; set; }
    }
}
