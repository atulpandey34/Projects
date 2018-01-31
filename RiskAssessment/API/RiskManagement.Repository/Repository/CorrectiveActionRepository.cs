using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Linq;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Data.Entity.Core.Objects;

namespace RiskManagement.Repository.Repository
{
    public class CorrectiveActionRepository : RepositoryBase<RiskManagement.Data.CorrectiveAction>, ICorrectiveActionRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;
        private IActionRepository _IActionRepository = null;
        private ICorrectiveActionAssignedToListRepository _ICorrectiveActionAssignedToListRepository = null;
        public CorrectiveActionRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
            this._IActionRepository = new ActionRepository(unitOfWork);
            this._ICorrectiveActionAssignedToListRepository = new CorrectiveActionAssignedToListRepository(unitOfWork);
        }
        public void Add(RiskManagement.Data.CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationID = LoggedInOrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }
        public void AddUpdateAction(CorrectiveActionModel entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = Mapper.Map<CorrectiveActionModel, CorrectiveAction>(entity);
            if (data.CorrectiveActionId == 0)
            {
                data.OrganizationID = LoggedInOrganizationId;
                base.Insert(data);
            }
            else
                Update(data);
            _unitOfWork.Save();
        }
        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<CorrectiveAction> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetManyQueryable(x => x.OrganizationID == LoggedInOrganizationId);
        }

        public IEnumerable<CorrectiveActionModel> GetAllCorrectionAction(int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = GetAll(LoggedInUserId, LoggedInOrganizationId);
            return Mapper.Map<IEnumerable<CorrectiveAction>, IEnumerable<CorrectiveActionModel>>(data);
        }



        public CorrectiveActionDataModel GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            var data = Get(x => x.CorrectiveActionId == id && x.OrganizationID == LoggedInOrganizationId);
            var data1 = Mapper.Map<CorrectiveAction, CorrectiveActionDataModel>(data);
            var childData = this._ICorrectiveActionAssignedToListRepository.GetAllWithCorrectionid(id, LoggedInUserId, LoggedInOrganizationId);
            if (childData != null && childData.Any())
            {
                foreach (var child in childData)
                {
                    data1.ActionResponsiblePersonDataModel.Add(new ActionResponsiblePersonDataModel()
                    {
                        UserID = child.UserId
                    });
                }
            }
            return data1;
        }

        public CorrectiveActionDataModel GetCorrectiveActionByActionId(int actionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            CorrectiveActionDataModel model = new CorrectiveActionDataModel();
            var action = this._IActionRepository.GetSingle(actionId, LoggedInUserId, LoggedInOrganizationId);
            if (action != null)
            {
                model.ActionID = action.ActionID;
                model.ActionSourceID = Convert.ToInt32(action.ActionSourceID);
                model.ActionTaken = action.ActionTaken;
                model.AssignedBy = action.AssignedBy;
                model.CategoryID = action.CategoryID;
                model.Duedate = action.Duedate;
                model.RootCause = action.RootCause;
                model.Title = action.Title;

            }
            return model;
        }
        public CorrectiveActionList GetCorrectiveActionList(CorretiveActionListPageFilterModel filterModel, int LoggedInUserId, int LoggedInOrganizationId)
        {
            CorrectiveActionList list = new CorrectiveActionList();
            ObjectParameter totalRecords = new ObjectParameter("TotalRecords", typeof(int));
            var data = base.RepositoryContext.SP_GetCorrectiveActionList(filterModel.PageNo, filterModel.PageSize, filterModel.SortColumn,
                filterModel.SortOrder, filterModel.TitleFilter, filterModel.AssignedByFilter
                , filterModel.CategoryFilter, filterModel.SourceFilter, filterModel.ActionTakenFilter, filterModel.DueDateFilter, filterModel.RootCauseFilter, LoggedInOrganizationId, totalRecords).ToList();
            list.CorrectiveActionListModel = Mapper.Map<List<SP_GetCorrectiveActionList_Result>, List<CorrectiveActionListModel>>(data);
            list.TotalRecords = Convert.ToInt32(totalRecords.Value);
            return list;
        }
        public void AddCorrectiveActionFromAction(CorrectiveActionDataModel model, int userId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            if (model.CorrectiveActionId == 0)
            {
                var data = Mapper.Map<CorrectiveActionDataModel, CorrectiveAction>(model);
                data.AcitonId = model.ActionID;
                data.OrganizationID = LoggedInOrganizationId;
                Add(data, LoggedInUserId, LoggedInOrganizationId);
                model.CorrectiveActionId = data.CorrectiveActionId;
            }
            else
            {
                var data = Mapper.Map<CorrectiveActionDataModel, CorrectiveAction>(model);
                if (model.ActionID > 0)
                    data.AcitonId = model.ActionID;
                model.CorrectiveActionId = data.CorrectiveActionId;
                //data.DateResolved = DateTime.Now;
                Update(data);
            }
            base.RepositoryContext.SP_DeleteCorrectiveList(model.CorrectiveActionId, LoggedInOrganizationId);
            if (model.ActionResponsiblePersonDataModel != null && model.ActionResponsiblePersonDataModel.Any())
            {
                foreach (var childModel in model.ActionResponsiblePersonDataModel)
                {
                    if (childModel == null || childModel.UserID == 0)
                        continue;
                    CorrectiveActionAssignedToList child = new CorrectiveActionAssignedToList();
                    child.CorrectiveActionId = model.CorrectiveActionId;
                    child.UserId = childModel.UserID;
                    child.OrganizationId = LoggedInOrganizationId;
                    this._ICorrectiveActionAssignedToListRepository.Add(child, LoggedInUserId, LoggedInOrganizationId);
                }

            }
            if (model.ResultList != null && model.ResultList.Any())
            {
                foreach (string result in model.ResultList)
                {
                    base.RepositoryContext.SP_AddCorrectiveActionResult(userId, model.CorrectiveActionId, result, LoggedInOrganizationId);
                }
            }
        }
        public void DeleteCorrectiveAction(int CorrectiveActionId, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.RepositoryContext.SP_DeleteCorrectiveAction(CorrectiveActionId, LoggedInOrganizationId);
        }
        public void Update(CorrectiveAction entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}
