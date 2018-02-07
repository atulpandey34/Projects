using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAuditSubjectRepository
    {
        AuditSubject GetSingle(int id, int orgid);
        List<AuditSubject> GetAllSubject(int auditid, int orgid);
        void AddAuditSubject(AuditViewModel model, int LoggedInOrganizationId);
        void AddUpdateAuditSubject(AuditViewModel model, int LoggedInOrganizationId);
        AuditSubjectViewModel GetAuditSubject(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
