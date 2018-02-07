using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IAuditSubjectQuestionResponseRepository
    {
        AuditSubjectQuestionResponse GetSingle(int id);
        void UpdateAuditSubQueRes(AuditSubjectReviewViewModel model);
        void UpdateAuditSubQueResMaterial(AuditSubjectReviewQuestionViewModel model);
    }
}
