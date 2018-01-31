﻿using RiskManagement.Data;
using RiskManagement.Data.Repository;
using RiskManagement.Repository.Interfaces;
using System;
using System.Collections.Generic;
using AutoMapper;
using RiskManagement.Models;
using System.Linq;

namespace RiskManagement.Repository.Repository
{
    public class TrainingMaterialRepository : RepositoryBase<RiskManagement.Data.TrainingMaterial>, ITrainingMaterialRepository, IDisposable
    {
        private RiskManagement.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public TrainingMaterialRepository(RiskManagement.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }
        public void Add(RiskManagement.Data.TrainingMaterial entity, int OrganizationId)
        {
            entity.OrganizationId = OrganizationId;
            base.Insert(entity);
            _unitOfWork.Save();
        }

        public TrainingMaterial Delete(int id, int OrganizationId)
        {
            var data = GetSingle(id, OrganizationId);
            base.Delete(id);
            _unitOfWork.Save();
            return data;
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<TrainingMaterial> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }



        public TrainingMaterial GetSingle(int id, int OrganizationId)
        {
            return base.Get(x => x.TrainingMaterialId == id && x.OrganizationId == OrganizationId);
        }
        public List<TrainingMaterialViewModel> GetSngleByTrainingId(int id, int OrganizationId)
        {
            var data = GetAll().Where(x => x.TrainingId == id && x.OrganizationId == OrganizationId).ToList();
            return Mapper.Map<List<TrainingMaterial>, List<TrainingMaterialViewModel>>(data);
        }
        public int AddUpdateTrainingMaterial(TrainingMaterialViewModel model, int userid, int OrganizationId)
        {
            TrainingMaterial training = Mapper.Map<TrainingMaterialViewModel, TrainingMaterial>(model);
            training.OrganizationId = OrganizationId;
            if (model.TrainingMaterialId == 0)
            {
                base.Insert(training);
            }
            else
            {
                training = GetSingle(model.TrainingMaterialId, OrganizationId);
                base.Update(training);
            }
            this._unitOfWork.Save();
            return training.TrainingMaterialId;
        }

        public void Update(TrainingMaterial entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }
    }
}


