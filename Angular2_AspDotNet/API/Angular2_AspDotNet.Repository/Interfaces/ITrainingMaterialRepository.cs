using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface ITrainingMaterialRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.TrainingMaterial> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.TrainingMaterial entity, int OrganizationId);

        Angular2_AspDotNet.Data.TrainingMaterial GetSingle(int id, int OrganizationId);

        void Update(Angular2_AspDotNet.Data.TrainingMaterial entity, int LoggedInUserId, int LoggedInOrganizationId);

        TrainingMaterial Delete(int id, int OrganizationId);

        int AddUpdateTrainingMaterial(TrainingMaterialViewModel model, int userid, int OrganizationId);

        List<TrainingMaterialViewModel> GetSngleByTrainingId(int id, int OrganizationId);
    }
}
