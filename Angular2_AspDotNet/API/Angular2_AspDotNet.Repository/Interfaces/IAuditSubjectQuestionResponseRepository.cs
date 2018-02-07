using RiskManagement.Data;
using RiskManagement.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RiskManagement.Repository.Interfaces
{
    public interface IAuditSubjectQuestionResponseRepository
    {
        AuditSubjectQuestionResponse GetSingle(int id);
        void UpdateAuditSubQueRes(AuditSubjectReviewViewModel model);
        void UpdateAuditSubQueResMaterial(AuditSubjectReviewQuestionViewModel model);
    }
}
