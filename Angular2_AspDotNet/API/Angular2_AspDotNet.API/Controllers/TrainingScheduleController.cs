using Angular2_AspDotNet.Data.UnitOfWork;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Collections.Specialized;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Configuration;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/trainingschedule")]
    public class TrainingScheduleController : APIBaseController
    {
        private ITrainingScheduleRepository _ITrainingScheduleRepository = null;
        private CacheManagement _caching = null;
        private IUserScheduleResultRepository _IUserScheduleResultRepository = null;
        public TrainingScheduleController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._ITrainingScheduleRepository = new TrainingScheduleRepository(unitOfWork);
            this._IUserScheduleResultRepository = new UserScheduleResultRepository(unitOfWork);
            this._caching = new CacheManagement();
        }
        [HttpPost]
        public int AddUpdateTrainingSchedule(TrainingScheduleViewModel model)
        {
            return this._ITrainingScheduleRepository.AddUpdateTrainingSchedule(model, base.OrganizationId);
        }

        [HttpGet]
        public List<TrainingScheduleListViewModel> GetTrainingScheduleList(int id)
        {
            return this._ITrainingScheduleRepository.GetTrainingScheduleList(id, base.OrganizationId);
        }
        [HttpGet]
        public List<TrainingScheduleUserListViewModel> GetTrainingScheduleUserList(int id)
        {
            return this._ITrainingScheduleRepository.GetTrainingScheduleUserList(id, base.OrganizationId);
        }

        [HttpGet]
        public List<TrainingScheduleListByUserIdViewModel> GetTrainingScheduleListByUserId()
        {
            return this._ITrainingScheduleRepository.GetTrainingScheduleListByUserId(base.UserId, base.OrganizationId);
        }
        [HttpPost]
        public int AddUpdateUserScheduleResult(UserScheduleResultViewModel model)
        {
            return this._IUserScheduleResultRepository.AddUpdateUserScheduleResult(model, base.UserId, base.OrganizationId);
        }
        [HttpGet]
        public List<UserScheduleResultViewModel> GetTrainingScheduleUserResultList(int id)
        {
            return this._ITrainingScheduleRepository.GetTrainingScheduleUserResultList(id, base.OrganizationId);
        }
        [HttpGet]
        public string DeleteTrainingSchedule(int id)
        {
            this._ITrainingScheduleRepository.Delete(id, base.OrganizationId);
            return "";
        }
        [HttpGet]
        public void UpdateTrainingScheduleStatus(int id, bool Status)
        {
            this._ITrainingScheduleRepository.UpdateTrainingScheduleStatus(id, Status, base.OrganizationId);
        }

        //TrainingAssignmentAttemptId, UserId
        [HttpGet]
        public TrainingAssignmentAttemptViewModel GetAssignmentForUser(int id, int id1)
        {
            return this._ITrainingScheduleRepository.GetAssignmentForUser(id, id1, base.OrganizationId);
        }

        [HttpPost]
        public int SaveAssignmentScoreForUser(TrainingAssignmentAttemptViewModel model)
        {
            return this._ITrainingScheduleRepository.SaveAssignmentScoreForUser(model, base.OrganizationId);
        }
    }
}
