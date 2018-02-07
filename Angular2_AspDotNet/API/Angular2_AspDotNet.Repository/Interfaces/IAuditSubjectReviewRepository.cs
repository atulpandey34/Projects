using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAuditSubjectReviewRepository
    {
        AuditSubjectReview GetSingle(int AuditSubjectID, int AuditSubjectReviewID, int orgid);
        AuditSubjectReviewViewModel AddUpdateAuditReview(AuditSubjectReviewViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        AuditSubjectReviewViewModel GetAuditSubjectReview(int AuditSubjectID, int AuditSubjectReviewID, int LoggedInUserId, int LoggedInOrganizationId);
        List<AuditSubjectReview> GetAllSubjectReview(int auditsubjectid, int orgid);
        void Delete(int auditSubjectReviewID);
    }
}
