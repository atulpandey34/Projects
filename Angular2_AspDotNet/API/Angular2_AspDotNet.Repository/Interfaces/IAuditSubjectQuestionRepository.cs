using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAuditSubjectQuestionRepository
    {
        AuditSubjectQuestion GetSingle(int id);
        List<AuditSubjectQuestion> GetAllSubjectQuestion(int auditsubjectidid);
        List<AuditSubjectQuestion> GetAuditSubjectQuestionBuSubjectId(int subjectid);
        void AddUpdateAuditSubjectQuestion(AuditSubject model, int LoggedInOrganizationId);
    }
}
