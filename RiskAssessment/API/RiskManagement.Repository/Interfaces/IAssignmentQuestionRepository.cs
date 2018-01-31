using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAssignmentQuestionRepository
    {
        IEnumerable<RiskManagement.Data.AssignmentQuestion> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.AssignmentQuestion entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.AssignmentQuestion GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.AssignmentQuestion entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        int AddUpdateQuestionAssignment(AssignmentListQuestionFilterModel model, int Userid, int LoggedInUserId, int LoggedInOrganizationId);

        //int AddUpdateRiskAssessmentHazard(RiskAssessmentHazardViewModel model, int Userid);

        //RiskAssessmentViewModel GetSingleWithTeam(int id);

        //List<HazardListModel> GetHazardListWithRiskAssessmentId(int RiskAssessmentId);

       // AssignmentListData GetAssignmentListdata(AssignmentListFilterModel filter);

        void UpdateAssignmentStatus(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId);
        List<AssignmentQuestionViewModel> GetQuestionOptionList(int AssignmentId, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteQuestionWithOption(int QuestionId, int LoggedInUserId, int LoggedInOrganizationId);
        //void UpdateRiskAssessmentTrainingRequired(int RiskAssessmentId);

        //void UpdateSignatureDate(int UserId, int RiskAssessmentId);
        //List<SignedUserList> GetSignedUserList(int RiskAssessmentId);

        AssignmentListQuestionFilterModel GetQuestionDetailData(int questionId, int LoggedInUserId, int LoggedInOrganizationId);

    }
}
