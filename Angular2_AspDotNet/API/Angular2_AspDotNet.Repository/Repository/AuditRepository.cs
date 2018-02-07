using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;

namespace Angular2_AspDotNet.Repository.Repository
{

    public class AuditRepository : RepositoryBase<Angular2_AspDotNet.Data.Audit>, IAuditRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IAuditSubjectRepository _IAuditSubjectRepository = null;
        public AuditRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            _IAuditSubjectRepository = new AuditSubjectRepository(_unitOfWork);
        }
        public void Add(Angular2_AspDotNet.Data.Audit entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public Audit GetSingle(int id, int orgid)
        {
            return Get(x => x.AuditID == id && x.OrganizationID == orgid);
        }

        public AuditViewModel AddUpdateAudit(AuditViewModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            Audit _audit = Mapper.Map<AuditViewModel, Audit>(model);
            _audit.AuditSubjects = null;
            _audit.OrganizationID = LoggedInOrganizationId;

            if (model.AuditID == 0)
            {
                base.Insert(_audit);
                this._unitOfWork.Save();
                model.AuditSubjects.ForEach(x =>
                {
                    x.AuditID = _audit.AuditID;
                });
                _IAuditSubjectRepository.AddAuditSubject(model, LoggedInOrganizationId);
            }
            else
            {
                _audit = GetSingle(model.AuditID, LoggedInOrganizationId);
                _audit.Title = model.Title;
                _audit.Scope = model.Scope;
                _audit.DueDate = model.DueDate;
                base.Update(_audit);
                this._unitOfWork.Save();

                //base.RepositoryContext.SP_DeleteAuditSubject(model.AuditID);
                model.AuditSubjects.ForEach(x =>
                {
                    x.AuditID = _audit.AuditID;
                });
                _IAuditSubjectRepository.AddUpdateAuditSubject(model, LoggedInOrganizationId);
            }

            model = Mapper.Map<Audit, AuditViewModel>(_audit);
            return model;
        }

        public AuditViewModel GetSingleAudit(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var aud = GetSingle(id, LoggedInOrganizationId);

            aud.AuditSubjectReviews = (from asr in aud.AuditSubjectReviews
                                       join asu in aud.AuditSubjects on asr.SubjectID equals asu.AuditSubjectID
                                       where asr.IsDeleted == false && asu.IsDeleted == false
                                       select asr 
                                      ).ToList();
                
            aud.AuditSubjects = aud.AuditSubjects.Where(x => x.IsDeleted == false).ToList();
            return Mapper.Map<Audit, AuditViewModel>(aud);
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void DeleteAudit(int auditid, int LoggedInOrganizationId)
        {
            var data = GetSingle(auditid, LoggedInOrganizationId);
            data.IsDeleted = true;
            Update(data);
            this._unitOfWork.Save();
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Audit> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll();
        }
        public List<AuditViewModel> GetAllOrganizationist(int Userid, int OrganizationId)
        {
            var data = base.GetAll();
            return Mapper.Map<IEnumerable<Audit>, IEnumerable<AuditViewModel>>(data).ToList();
        }

        public AuditListViewResult GetAuditListData(AuditListFilterModel filter, int LoggedInOrgId)
        {
            AuditListViewResult list = new AuditListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetAuditList(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.Title, filter.Scope, LoggedInOrgId, totalRecords).ToList();
            list.AuditListResult = Mapper.Map<List<SP_GetAuditList_Result>, List<AuditListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }

        public AuditSubjectListViewResult GetAuditSubjectListData(AuditSubjectListFilterModel filter, int loggedinuserid, int LoggedInOrgId)
        {
            AuditSubjectListViewResult list = new AuditSubjectListViewResult();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetAuditSubjectList(
                filter.PageNo, filter.PageSize, filter.SortColumn,
                filter.SortOrder, filter.Subject, filter.Auditee, filter.Location
                , filter.PlannedAuditDate, loggedinuserid, LoggedInOrgId, totalRecords).ToList();
            list.AuditSubjectListResult = Mapper.Map<List<SP_GetAuditSubjectList_Result>, List<AuditSubjectListResult>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }

        public void Update(Audit entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public AuditReportViewModel GetAuditReport(int Auditid, int Userid, int OrganizationId)
        {
            DbDataReader reader = null;
            AuditReportViewModel model = new AuditReportViewModel();
            var AuditSubjectReviewList = new List<AuditReportSubjectReviewViewModel>();
            var AuditReportSubjectQuestionResponseList = new List<AuditReportSubjectQuestionResponse>();
            try
            {
                RepositoryContext.Database.Initialize(force: false);

                var cmd = RepositoryContext.Database.Connection.CreateCommand();

                cmd.CommandText = "SP_GetAuditReport";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter parm1 = new SqlParameter();
                parm1.ParameterName = "@Auditid";
                parm1.Value = Auditid;
                parm1.SqlDbType = SqlDbType.Int;

                SqlParameter parm2 = new SqlParameter();
                parm2.ParameterName = "@OrganizationId";
                parm2.Value = OrganizationId;
                parm2.SqlDbType = SqlDbType.Int;

                cmd.Parameters.Add(parm1);
                cmd.Parameters.Add(parm2);


                if (RepositoryContext.Database.Connection.State == ConnectionState.Closed)
                {
                    RepositoryContext.Database.Connection.Open();
                }
                reader = cmd.ExecuteReader();

                model.AuditReport = (from n in ((IObjectContextAdapter)RepositoryContext)
                       .ObjectContext.Translate<AuditReport>(reader)
                                     select n).FirstOrDefault();

                reader.NextResult();

                model.AuditReport.AuditReportSubjectList = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<AuditReportSubject>(reader)
                                                            select n).ToList();
                reader.NextResult();

                AuditSubjectReviewList = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<AuditReportSubjectReviewViewModel>(reader)
                                          select n).ToList();
                reader.NextResult();

                AuditReportSubjectQuestionResponseList = (from n in ((IObjectContextAdapter)RepositoryContext)
                      .ObjectContext.Translate<AuditReportSubjectQuestionResponse>(reader)
                                                          select n).ToList();

                foreach (var arsub in model.AuditReport.AuditReportSubjectList)
                {
                    arsub.AuditSubjectReviewList = AuditSubjectReviewList.Where(x => x.SubjectID == arsub.AuditSubjectID).ToList();
                    arsub.AuditReportSubjectQuestionResponseList = AuditReportSubjectQuestionResponseList.Where(x => x.SubjectID == arsub.AuditSubjectID).ToList();
                }


            }
            finally
            {
                if (reader != null)
                {
                    if (!reader.IsClosed)
                    {
                        reader.Close();
                    }
                }
                if (RepositoryContext.Database.Connection.State == ConnectionState.Open)
                {
                    RepositoryContext.Database.Connection.Close();
                    RepositoryContext.Database.Connection.Dispose();
                }
            }
            return model;
        }
    }
}
