using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAuditRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Audit> GetAll( int LoggedInUserId, int LoggedInOrganizationId);
        Angular2_AspDotNet.Data.Audit GetSingle(int id,int orgid);
        void Add(Angular2_AspDotNet.Data.Audit entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Audit entity, int LoggedInUserId, int LoggedInOrganizationId);

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
