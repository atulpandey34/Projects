using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IRiskAssessmentRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.RiskAssessment> GetAll( int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.RiskAssessment entity, int Userid, int OrganizationId);

        Angular2_AspDotNet.Data.RiskAssessment GetSingle(int id, int Userid, int OrganizationId);

        void Update(Angular2_AspDotNet.Data.RiskAssessment entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int Userid, int OrganizationId);

        int AddUpdateRiskAssessment(RiskAssessmentViewModel model, int Userid, int OrganizationId);

        int AddUpdateRiskAssessmentHazard(RiskAssessmentHazardViewModel model, int Userid, int OrganizationId);

        RiskAssessmentViewModel GetSingleWithTeam(int id, int Userid, int OrganizationId);

        List<HazardListModel> GetHazardListWithRiskAssessmentId(int RiskAssessmentId, int Userid, int OrganizationId);

        RiskAssessmentListData GetRiskAssessmentListData(RiskAssessmentListFilterModel filter, int Userid, int OrganizationId);

        void UpdateRiskAssessmentStatus(int RiskAssessmentId, int Userid, int OrganizationId);
        void UpdateRiskAssessmentTrainingRequired(int RiskAssessmentId, int Userid, int OrganizationId);

        void UpdateSignatureDate(int UserId, int RiskAssessmentId,  int OrganizationId);
        List<SignedUserList> GetSignedUserList(int RiskAssessmentId, int Userid, int OrganizationId);
        void UpdateReviewDate(int RiskAssessmentId, int Userid, int OrganizationId);

        int ReviewRiskAssessment(int id, int Userid, int OrganizationId);

        RiskAssessmentHazardViewModel GetRiskAssessmentHazardData(int hazardId, int Userid, int OrganizationId);
    }
}
