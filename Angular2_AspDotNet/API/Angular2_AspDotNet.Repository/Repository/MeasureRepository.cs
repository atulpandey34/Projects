using AutoMapper;
using Angular2_AspDotNet.Data;
using Angular2_AspDotNet.Data.Repository;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Data.Entity;
using Angular2_AspDotNet.Core;

namespace Angular2_AspDotNet.Repository.Repository
{
    public class MeasureRepository : RepositoryBase<Angular2_AspDotNet.Data.Measure>, IMeasureRepository, IDisposable
    {
        private Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork _unitOfWork = null;

        public MeasureRepository(Angular2_AspDotNet.Data.UnitOfWork.UnitOfWork unitOfWork) : base(unitOfWork.Context)
        {
            this._unitOfWork = unitOfWork;
        }

        public void Add(Angular2_AspDotNet.Data.Measure entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            entity.OrganizationId = LoggedInOrganizationId;
            if (entity.Target == null)
                entity.Target = 0;
            base.Insert(entity);

        }

        public void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Delete(id);
        }

        public void Dispose()
        {
            this._unitOfWork.Dispose();
        }

        public IEnumerable<Measure> GetAll(int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.GetAll(x => x.OrganizationId == LoggedInOrganizationId);
        }

        public Measure GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId)
        {
            return base.Get(x => x.MeasureId == id && x.OrganizationId == LoggedInOrganizationId);
        }

        public void Update(Measure entity, int LoggedInUserId, int LoggedInOrganizationId)
        {
            base.Update(entity);
            _unitOfWork.Save();
        }

        public List<FrequencyViewModel> GetFrequency()
        {
            var list = base.RepositoryContext.Frequencies.ToList();
            return Mapper.Map<List<Frequency>, List<FrequencyViewModel>>(list);
        }

        public List<MeasureViewModel> GetAllMeasures(int userId, int organizationId)
        {
            var list = base.RepositoryContext.Measures.Where(m => m.UserId == userId && m.OrganizationId == organizationId).ToList();
            List<MeasureViewModel> mModel = Mapper.Map<List<Measure>, List<MeasureViewModel>>(list);
            if (mModel != null && mModel.Any())
            {
                foreach (MeasureViewModel m in mModel)
                {
                    try
                    {
                        var dates = base.RepositoryContext.SP_GetMeasureDate(m.MeasureId, organizationId).FirstOrDefault();
                        m.LastDate = dates.LastDate;
                        m.NextDate = dates.NextDate;
                    }
                    catch
                    {
                    }
                }
            }


            return mModel;
        }

        public MeasureViewModel GetMeasure(int id, int LoggedInUserId, int organizationId)
        {
            var measure = base.RepositoryContext.Measures.Where(m => m.MeasureId == id && m.OrganizationId == organizationId).Single();
            return Mapper.Map<Measure, MeasureViewModel>(measure);
        }

        public List<MeasureColumnViewModel> GetMeasureColumns(int measureId, int userId, int organizationId)
        {
            var list = base.RepositoryContext.MeasureColumns.Where(m => m.MeasureId == measureId && m.OrganizationId == organizationId).ToList();
            return Mapper.Map<List<MeasureColumn>, List<MeasureColumnViewModel>>(list);
        }

        public List<MeasureColumnDataViewModel> GetMeasureColumnData(int measureId, int measureColumnId, int userId, int organizationId)
        {
            var list = base.RepositoryContext.MeasureColumnDatas.Where(m => m.MeasureId == measureId &&
                               m.MeasureColumnId == measureColumnId && m.UserId == userId).ToList();
            return Mapper.Map<List<MeasureColumnData>, List<MeasureColumnDataViewModel>>(list);
        }

        public List<MeasureColumnDataByDateViewModel> GetMeasureColumnDataByDate(int measureId, int userId, int organizationId)
        {
            var list = base.RepositoryContext.MeasureColumnDatas.Where(m => m.MeasureId == measureId && m.UserId == userId)
                        .GroupBy(m => m.Date).Select(m => new MeasureColumnDataByDateViewModel
                        {
                            Date = m.Key,
                            MeasureId = measureId,
                            MeasureColumnData = m.Select(c => new MeasureColumnDataViewModel
                            {
                                MeasureId = c.MeasureId,
                                MeasureColumnId = c.MeasureColumnId,
                                MeasureColumnDataId = c.MeasureColumnDataId,
                                ColumnName = c.MeasureColumn.ColumnName,
                                ColumnValue = c.ColumnValue,
                                Date = c.Date
                            }).ToList()
                        }).ToList();
            return list;
        }

        public MeasureColumnChartData GetChartData(int measureId, int measureColumnId, int userId, int organizationId, DateTime? sD, DateTime? eD)
        {
            var measure = base.RepositoryContext.Measures.Where(m => m.MeasureId == measureId && m.OrganizationId == organizationId).FirstOrDefault();
            var measureColumns = base.RepositoryContext.MeasureColumns.Where(m => m.MeasureId == measureId && m.OrganizationId == organizationId).ToList();
            if (sD == null)
                sD = DateTime.MinValue;
            if (eD == null)
                eD = DateTime.MaxValue;
            var data = new MeasureColumnChartData();
            {
                data.labels = measureColumns[0].MeasureColumnDatas
                    .Where(x => x.Date >= sD && x.Date <= eD)
                    .OrderBy(x => x.Date)
                    .Select(md => md.Date.ToShortDateString()).ToList();

                data.datasets = measureColumns.Select(mc => new MeasureColumnDataSet
                {
                    label = mc.ColumnName,
                    data = mc.MeasureColumnDatas
                    .Where(x => x.Date >= sD && x.Date <= eD)
                    .Select(md => Convert.ToInt32(md.ColumnValue)).ToList(),
                    borderColor = CommonMethods.RandomColor()
                }).ToList();

                MeasureColumnDataSet dd = new MeasureColumnDataSet();
                dd.label = "Target(" + Convert.ToInt32(measure.Target) + ")";
                dd.data = new List<int>();
                foreach (string lab in data.labels)
                {
                    dd.data.Add(Convert.ToInt32(measure.Target));
                }
                dd.borderColor = "#000000";
                data.datasets.Add(dd);


            }
            return data;
        }

        public int SaveMeasure(MeasureViewModel model, int userId, int organizationId)
        {
            var measure = new Measure();
            if (model.MeasureId == 0)
            {
                measure = Mapper.Map<MeasureViewModel, Measure>(model);
                measure.UserId = userId;
                measure.OrganizationId = organizationId;
                if (measure.Target == null)
                    measure.Target = 0;
                base.RepositoryContext.Measures.Add(measure);
            }
            else
            {
                model.MeasureColumns = null;
                model.MeasureColumnDatas = null;
                model.MeasureObjectives = null;
                Mapper.Map(model, measure);
                base.RepositoryContext.Entry(measure).State = EntityState.Modified;
            }
            base.RepositoryContext.SaveChanges();
            return measure.MeasureId;
        }

        public MeasureColumnViewModel SaveMeasureColumn(MeasureColumnViewModel model, int organizationId)
        {
            if (model.MeasureColumnId == 0)
            {
                var measureColumn = Mapper.Map<MeasureColumnViewModel, MeasureColumn>(model);
                measureColumn.OrganizationId = organizationId;
                base.RepositoryContext.MeasureColumns.Add(measureColumn);
                base.RepositoryContext.SaveChanges();
                model = Mapper.Map<MeasureColumn, MeasureColumnViewModel>(measureColumn);
            }
            else
            {
                var measureColumn = new MeasureColumn();
                Mapper.Map(model, measureColumn);
                base.RepositoryContext.Entry(measureColumn).State = EntityState.Modified;
                base.RepositoryContext.SaveChanges();
                model = Mapper.Map<MeasureColumn, MeasureColumnViewModel>(measureColumn);
            }
            return model;
        }

        public MeasureObjectiveViewModel SaveMeasureObjective(MeasureObjectiveViewModel model, int organizationId)
        {
            if (model.MeasureObjectiveId == 0)
            {
                var measureObjective = Mapper.Map<MeasureObjectiveViewModel, MeasureObjective>(model);
                measureObjective.OrganizationId = organizationId;
                base.RepositoryContext.MeasureObjectives.Add(measureObjective);
                base.RepositoryContext.SaveChanges();
                model = Mapper.Map<MeasureObjective, MeasureObjectiveViewModel>(measureObjective);
            }
            else
            {
                var measureObjective = new MeasureObjective();
                Mapper.Map(model, measureObjective);
                base.RepositoryContext.Entry(measureObjective).State = EntityState.Modified;
                base.RepositoryContext.SaveChanges();
                model = Mapper.Map<MeasureObjective, MeasureObjectiveViewModel>(measureObjective);
            }
            return model;
        }

        public int SaveMeasureColumnData(List<MeasureColumnDataViewModel> model, int userId, int organizationId)
        {
            model.ForEach(data =>
            {
                if (data.MeasureColumnDataId == 0)
                {
                    var measureData = Mapper.Map<MeasureColumnDataViewModel, MeasureColumnData>(data);
                    measureData.UserId = userId;
                    if (string.IsNullOrWhiteSpace(measureData.ColumnValue))
                        measureData.ColumnValue = "0";
                    base.RepositoryContext.MeasureColumnDatas.Add(measureData);
                }
                else
                {
                    var measureData = new MeasureColumnData();
                    Mapper.Map(model, measureData);
                    base.RepositoryContext.Entry(measureData).State = EntityState.Modified;
                }
            });
            return base.RepositoryContext.SaveChanges();
        }
    }
}
