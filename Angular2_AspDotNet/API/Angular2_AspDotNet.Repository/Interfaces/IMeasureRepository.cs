﻿using Angular2_AspDotNet.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IMeasureRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.Measure> GetAll(int LoggedInUserId, int LoggedInOrganizationId);

        MeasureViewModel GetMeasure(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Add(Angular2_AspDotNet.Data.Measure entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.Measure GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.Measure entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);

        List<FrequencyViewModel> GetFrequency();

        List<MeasureViewModel> GetAllMeasures(int userId, int organizationId);

        List<MeasureColumnViewModel> GetMeasureColumns(int measureId, int userId, int organizationId);

        List<MeasureColumnDataViewModel> GetMeasureColumnData(int measureId, int measureColumnId, int userId, int organizationId);

        List<MeasureColumnDataByDateViewModel> GetMeasureColumnDataByDate(int measureId, int userId, int organizationId);

        MeasureColumnChartData GetChartData(int measureId, int measureColumnId, int userId, int organizationId, DateTime? sD, DateTime? eD);

        int SaveMeasure(MeasureViewModel model, int userId, int organizationId);

        MeasureColumnViewModel SaveMeasureColumn(MeasureColumnViewModel model, int organizationId);

        MeasureObjectiveViewModel SaveMeasureObjective(MeasureObjectiveViewModel model, int organizationId);

        int SaveMeasureColumnData(List<MeasureColumnDataViewModel> model, int userId, int organizationId);

    }
}
