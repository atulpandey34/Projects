using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
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
