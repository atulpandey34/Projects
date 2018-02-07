using Angular2_AspDotNet.Data.UnitOfWork;
using Angular2_AspDotNet.Models;
using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Angular2_AspDotNet.API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    [RoutePrefix("api/trainee")]
    public class TraineeController : APIBaseController
    {
        private ITrainingScheduleUserRepository _ITrainingScheduleUserRepository;
        private CacheManagement _caching = null;
        public TraineeController()
        {
            UnitOfWork unitOfWork = new UnitOfWork();
            this._ITrainingScheduleUserRepository = new TrainingScheduleUserRepository(unitOfWork);
            this._caching = new CacheManagement();
        }

        [HttpGet]
        public List<TraineeScheduleListByUserIdViewModel> GetTraineeScheduleListByUserId()
        {
            return this._ITrainingScheduleUserRepository.GetTraineeScheduleListByUserId(base.UserId, base.OrganizationId);
        }

        //Gets //TrainingScheduleId, AssignmentId, Retest, IstrainingRequired
        [HttpGet]
        public TrainingAssignmentAttemptViewModel GetTrainingScheduleAssignmentForUser(int id, int id1, bool id2, bool id3)
        {
            int userId = base.UserId;
            return this._ITrainingScheduleUserRepository.GetTrainingScheduleAssignmentForUser(id, id1, id2, id3, userId, base.OrganizationId);
        }

        [HttpPost]
        public int SaveTrainingScheduleAssignmentForUser(TrainingAssignmentAttemptViewModel model)
        {
            model.UserId = base.UserId;
            model.AttemptDate = DateTime.Now;
            return this._ITrainingScheduleUserRepository.SaveTrainingScheduleAssignmentForUser(model, base.OrganizationId);
        }
    }
}
