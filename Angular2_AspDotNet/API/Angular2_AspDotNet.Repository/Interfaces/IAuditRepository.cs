using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAuditRepository
    {
        IEnumerable<RiskManagement.Data.Audit> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        RiskManagement.Data.Audit GetSingle(int id,int orgid);
        void Add(RiskManagement.Data.Audit entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.Audit entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
        void DeleteAudit(int auditid, int LoggedInOrganizationId);
        List<AuditViewModel> GetAllOrganizationist(int Userid, int OrganizationId);
        AuditListViewResult GetAuditListData(AuditListFilterModel filter, int LoggedInOrgId);
        AuditSubjectListViewResult GetAuditSubjectListData(AuditSubjectListFilterModel filter, int loggedinuserid, int LoggedInOrgId);
        AuditViewModel AddUpdateAudit(AuditViewModel model, int LoggedInUserId, int LoggedInOrganizationId);
        AuditViewModel GetSingleAudit(int id, int LoggedInUserId, int LoggedInOrganizationId);
        AuditReportViewModel GetAuditReport(int Auditid, int Userid, int OrganizationId);
     }
}
