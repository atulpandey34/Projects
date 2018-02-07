using Angular2_AspDotNet.API.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;
using System.Web.Security;

namespace Angular2_AspDotNet.API
{
    [AttributeUsage(AttributeTargets.Class | AttributeTargets.Method | AttributeTargets.Property, AllowMultiple = false)]
    public class CustomApiAuthorize : AuthorizeAttribute, IAuthorizationFilter
    {

        protected override bool IsAuthorized(System.Web.Http.Controllers.HttpActionContext actionContext)
        {

            var headers = actionContext.Request.Headers.Authorization;

            if (headers != null)
            {
                try
                {
                    if (string.IsNullOrWhiteSpace(SessionHelper.SessionId))
                        return false;
                    CacheManagement _cache = new CacheManagement();
                    var sessionData = _cache.GetSessionData(headers.Scheme);
                    if (sessionData.ExpirationDate > DateTime.Now)
                        return true;
                }
                catch
                {
                    //return false;
                }
                finally
                {
                }
            }
            return false;
        }

        public override void OnAuthorization(HttpActionContext filterContext)
        {
            base.OnAuthorization(filterContext);

        }
        protected override void HandleUnauthorizedRequest(System.Web.Http.Controllers.HttpActionContext filterContext)
        {
            filterContext.Response = new HttpResponseMessage()
            {
                Content = new StringContent("Session expired, Please login."),
                ReasonPhrase = "Session expired, Please login.",
                StatusCode = HttpStatusCode.Unauthorized

            };
        }

    }

    public class CustomExceptionLogFilterAttribute : ExceptionFilterAttribute
    {
        public override void OnException(HttpActionExecutedContext context)
        {
            ErrorLog.LogError(context.Exception);
        }
    }
}