using RiskManagement.Data.UnitOfWork;
using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Cors;
using System.Web.Mvc;

namespace RiskManagement.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/measure")]
    public class MeasureController : APIBaseController
    {
        IMeasureRepository _measureRepository;
        private CacheManagement _caching = null;
        //Constructor
        public MeasureController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._measureRepository = new MeasureRepository(unitOfWork);
            this._caching = new CacheManagement();
        }

        // GET: Frequency
        [HttpGet]
        public List<FrequencyViewModel> GetFrequency()
        {
            return this._measureRepository.GetFrequency();
        }

        [HttpGet]
        public List<MeasureViewModel> GetAllMeasures()
        {
            return this._measureRepository.GetAllMeasures(base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public MeasureViewModel GetMeasure(int id)
        {
            return this._measureRepository.GetMeasure(id, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<MeasureColumnViewModel> GetMeasureColumns(int id)
        {
            return this._measureRepository.GetMeasureColumns(id, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public MeasureColumnChartData GetChartData(int id, int id1, DateTime? sD, DateTime? eD)
        {
            return this._measureRepository.GetChartData(id, id1, base.UserId, base.OrganizationId,sD,eD);
        }

        [HttpGet]
        public List<MeasureColumnDataViewModel> GetMeasureColumnData(int id, int id1)
        {
            return this._measureRepository.GetMeasureColumnData(id, id1, base.UserId, base.OrganizationId);
        }

        [HttpGet]
        public List<MeasureColumnDataByDateViewModel> GetMeasureColumnDataByDate(int id)
        {
            return this._measureRepository.GetMeasureColumnDataByDate(id, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public int SaveMeasure(MeasureViewModel model)
        {
            return this._measureRepository.SaveMeasure(model, base.UserId, base.OrganizationId);
        }

        [HttpPost]
        public MeasureColumnViewModel SaveMeasureColumn(MeasureColumnViewModel model)
        {
            return this._measureRepository.SaveMeasureColumn(model, base.OrganizationId);
        }

        [HttpPost]
        public MeasureObjectiveViewModel SaveMeasureObjective(MeasureObjectiveViewModel model)
        {
            return this._measureRepository.SaveMeasureObjective(model, base.OrganizationId);
        }

        [HttpPost]
        public int SaveMeasureColumnData(List<MeasureColumnDataViewModel> model)
        {
            return this._measureRepository.SaveMeasureColumnData(model, base.UserId, base.OrganizationId);
        }
    }
}