using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMasterDocumentFolderRepository
    {
        bool ValidateFolder(string foldername, int LoggedInUserId, int LoggedInOrganizationId);
        IEnumerable<Angular2_AspDotNet.Data.MasterDocumentFolder> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.MasterDocumentFolder GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);
        FolderPopupViewModel GetSingleFolder(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        int DeleteFolder(int folderid, int LoggedInUserId, int LoggedInOrganizationId);
        //void Update(Angular2_AspDotNet.Data.MasterDocumentFolder entity, int LoggedInUserId, int LoggedInOrganizationId);
        List<Angular2_AspDotNet.Models.MasterDocumentFolderViewModel> GetAllMasterDocumentFolder( int LoggedInUserId, int LoggedInOrganizationId);
        int AddMasterDocumentFolder(string folderValue, int LoggedInUserId, int LoggedInOrganizationId);
        int SaveFolderFormData(FolderPopupViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        MasterDocumentFolderListViewResult GetMasterDocumentFoldertListData(MasterDocumentFolderListFilterModel filter, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
