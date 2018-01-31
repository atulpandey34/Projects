using RiskManagement.API.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace RiskManagement.API
{
    [CustomApiAuthorize]
    [CustomExceptionLogFilter]
    public class APIBaseController : ApiController
    {
        private CacheManagement _caching = null;
        public APIBaseController()
        {
        }
        protected override void Initialize(HttpControllerContext controllerContext)
        {
            try
            {
                base.Initialize(controllerContext);
                this._caching = new CacheManagement();
                string token = controllerContext.Request.Headers.Authorization.ToString();
                this.UserId = this._caching.GetSessionData(token).UserId;
                this.OrganizationId = this._caching.GetSessionData(token).OrganizationId;
                this.RoleId = this._caching.GetSessionData(token).RoleId;
            }
            catch (Exception ex)
            {
                ErrorLog.LogError(ex);
            }
        }
        public int OrganizationId { get; set; } = 0;
        public List<int> RoleId { get; set; } = new List<int>();
        public int UserId { get; set; } = 0;
    }
}