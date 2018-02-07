using System.Collections.Generic;


namespace RiskManagement.Repository.Interfaces
{
    public interface IEventAttendeeRepository
    {
        IEnumerable<RiskManagement.Data.EventAttendee> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(RiskManagement.Data.EventAttendee entity, int LoggedInUserId, int LoggedInOrganizationId);

        RiskManagement.Data.EventAttendee GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(RiskManagement.Data.EventAttendee entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
