using AutoMapper;
using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.Entity.Core.Objects;
using System.Data.Entity.Infrastructure;
using System.Data.SqlClient;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class ActionRepository : RepositoryBase<RiskManagement.Data.Action>, IActionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IActionResponsiblePersonRepository _ActionResponsiblePersonRepository = null;
        private IActionCommentRepository _actionCommentRepository = null;

        public ActionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._ActionResponsiblePersonRepository = new ActionResponsiblePersonRepository(unitOfWork);
            this._actionCommentRepository = new ActionCommentRepository(unitOfWork);
        }

        public void Add(Data.Action entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);

        }

        public void Update(Data.Action entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteAction(id, LoggedInOrganizationId);
        }


        public Data.Action GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.ActionID == id && x.OrganizationID == LoggedInOrganizationId);
        }

        public ActionDataModel GetSingleWithResponsiblePerson(int actionID, int Userid, int OrganizationId)
        {
            ActionDataModel model = new ActionDataModel();
            var data = GetSingle(actionID, Userid, OrganizationId);
            model = Mapper.Map<Data.Action, ActionDataModel>(data);
            var data1 = this._ActionResponsiblePersonRepository.GetByActionId(actionID, Userid, OrganizationId);
            var commentsList = base.RepositoryContext.SP_GetActionComments(actionID, OrganizationId).ToList();
            model.ActionResponsiblePersonDataModel = Mapper.Map<List<ActionResponsiblePerson>, List<ActionResponsiblePersonDataModel>>(data1);
            model.ActionCommentsListModel = Mapper.Map<List<SP_GetActionComments_Result>, List<ActionCommentsListModel>>(commentsList);
            return model;
        }

        public IEnumerable<Data.Action> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x=>x.OrganizationID== LoggedInOrganizationId);
        }

        public ActionListViewModel GetAllActionData(ActionFilerModel filterModel, int LoggedInUserId, int LoggedInOrganizationId)
        {
            DbDataReader reader = null;
            ActionListViewModel model = new ActionListViewModel();
            try
            {
                RepositoryContext.Database.Initialize(force: false);

                var cmd = RepositoryContext.Database.Connection.CreateCommand();

                cmd.CommandText = "SP_GetEventActionList";
                cmd.CommandType = System.Data.CommandType.StoredProcedure;

                SqlParameter parm1 = new SqlParameter();
                parm1.ParameterName = "@LoggedInUserId";
                parm1.Value = LoggedInUserId;
                parm1.SqlDbType = SqlDbType.Int;

                SqlParameter parm2 = new SqlParameter();
                parm2.ParameterName = "@OrganizationId";
                parm2.Value = LoggedInOrganizationId;
                parm2.SqlDbType = SqlDbType.Int;

                cmd.Parameters.Add(parm1);
                cmd.Parameters.Add(parm2);

                if (RepositoryContext.Database.Connection.State == ConnectionState.Closed)
                {
                    RepositoryContext.Database.Connection.Open();
                }
                reader = cmd.ExecuteReader();

                model.ActionListing = (from n in ((IObjectContextAdapter)RepositoryContext)
                       .ObjectContext.Translate<ActionList>(reader)
                                       select n).ToList();



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

        public ActionListViewModel GetAllActionData(int PageNo, int PageSize, string sortColumn, string sortOrder
            , string titleFilter = "", string dueDateFilter = "", string statusFilter = "",
            string organizerFilter = "", int LoggedInUserId=0, int LoggedInOrganizationId=0)
        {
            ActionListViewModel list = new ActionListViewModel();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetEventActionListV1(PageNo, PageSize, sortColumn, sortOrder,
                 titleFilter, dueDateFilter, statusFilter, organizerFilter, LoggedInOrganizationId,
                totalRecords
                ).ToList();
            list.ActionListing = Mapper.Map<List<SP_GetEventActionListV1_Result>, List<ActionList>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }

        public int UpdateActionData(ActionDataModel model, int Userid, int OrganizationId)
        {
            
            var data = Mapper.Map<ActionDataModel, RiskManagement.Data.Action>(model);
            data.OrganizationID = OrganizationId;
            if (model.ActionID > 0)
            {
                base.Update(data);
                base.RepositoryContext.Sp_DeleteActionResponsiblePerson(model.ActionID);
            }
            else
                base.Insert(data);


            foreach (ActionResponsiblePersonDataModel resposibleModel in model.ActionResponsiblePersonDataModel)
            {
                var childData = Mapper.Map<ActionResponsiblePersonDataModel, ActionResponsiblePerson>(resposibleModel);
                childData.Action = data;
                _ActionResponsiblePersonRepository.Add(childData, Userid, OrganizationId);

            }
            if (!string.IsNullOrWhiteSpace(model.Comments))
            {
                this._actionCommentRepository.Add(new ActionComment()
                {
                    ActionId = model.ActionID,
                    Action = data,
                    AddedBy = 1,
                    Comment = model.Comments,
                    AddedOn = DateTime.Now
                }, Userid, OrganizationId);
            }
            _unitOfWork.Save();
            return data.ActionID;
        }

        public void UpdateActionTakenData(ActionTakenUploadModel model, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = base.GetByID(model.ActionId);
            data.ActionTaken = model.ActionTaken;
            data.IsReportedAction = model.IsReportedAction;
            data.FilePath = model.FilePath;
            data.FileName = model.fileName;
            data.EventActionStatusID = 3;
            Update(data);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }
    }
}
