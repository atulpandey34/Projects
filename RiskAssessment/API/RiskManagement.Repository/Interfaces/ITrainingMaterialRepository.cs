using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface ITrainingMaterialRepository
    {
        IEnumerable<RiskManagement.Data.TrainingMaterial> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.TrainingMaterial entity, int OrganizationId);

        RiskManagement.Data.TrainingMaterial GetSingle(int id, int OrganizationId);

        void Update(RiskManagement.Data.TrainingMaterial entity, int LoggedInUserId, int LoggedInOrganizationId);

        TrainingMaterial Delete(int id, int OrganizationId);

        int AddUpdateTrainingMaterial(TrainingMaterialViewModel model, int userid, int OrganizationId);

        List<TrainingMaterialViewModel> GetSngleByTrainingId(int id, int OrganizationId);
    }
}
