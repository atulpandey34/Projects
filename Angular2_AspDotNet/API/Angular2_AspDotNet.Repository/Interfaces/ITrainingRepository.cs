using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ITrainingRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Training> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.Training entity, int OrganizationId);

        Angular2_AspDotNet.Data.Training GetSingle(int id, int OrganizationId);

        void Update(Angular2_AspDotNet.Data.Training entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int OrganizationId);

        int AddUpdateTraining(TrainingViewModel model, int userid, int OrganizationId);

        TrainingViewModel GetTraining(int id, int OrganizationId);

        TrainingListViewModel GetTrainingList(TrainingListFilterModel filterModel, int OrganizationId);

        ReportViewModel<TrainingReportViewModel> GetTrainingReport(TrainingReportFilterModel model, int OrganizationId);

        ReportViewModel<TrainerReportViewModel> GetTrainerReport(TrainerReportFilterModel model, int OrganizationId);

        ReportViewModel<TrainingUserReportViewModel> GetTrainingUserReport(TrainingUserReportFilterModel model, int OrganizationId);

        List<TrainingNeedList> GetTrainingNeedList(int OrganizationId);

        List<UserList> GetTrainerList(int OrganizationId);

        List<UserList> GetUserList(int OrganizationId);
    }
}
