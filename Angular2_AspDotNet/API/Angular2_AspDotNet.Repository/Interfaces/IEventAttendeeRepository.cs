using System.Collections.Generic;


namespace Angular2_AspDotNet.Repository.Interfaces
{
    public interface IEventAttendeeRepository
    {
        IEnumerable<Angular2_AspDotNet.Data.EventAttendee> GetAll(int LoggedInUserId, int LoggedInOrganizationId);


        void Add(Angular2_AspDotNet.Data.EventAttendee entity, int LoggedInUserId, int LoggedInOrganizationId);

        Angular2_AspDotNet.Data.EventAttendee GetSingle(int id, int LoggedInUserId, int LoggedInOrganizationId);

        void Update(Angular2_AspDotNet.Data.EventAttendee entity, int LoggedInUserId, int LoggedInOrganizationId);

        void Delete(int id, int LoggedInUserId, int LoggedInOrganizationId);
    }
}
