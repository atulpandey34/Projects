using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;


namespace RiskManagement.API
{
    public class SessionHelper
    {
        public static string ApiAuthToken
        {
            get
            {
                var request = HttpContext.Current.Items["MS_HttpRequestMessage"] as HttpRequestMessage;

                if (request == null)
                    return null;

                var httpContext = (HttpContextWrapper)request.Properties["MS_HttpContext"];
                string token = httpContext.Session["ApiAuthToken"] as string;
                return token;
                //return HttpContext.Current.Session["ApiAuthToken"] as string;
            }
            set
            {
                //var request = HttpContext.Current.Items["MS_HttpRequestMessage"] as HttpRequestMessage;
                //var httpContext = (HttpContextWrapper)request.Properties["MS_HttpContext"];
                //httpContext.Session["ApiAuthToken"] = value;
                HttpContext.Current.Session["ApiAuthToken"] = value;
            }
        }
        public static string UserId
        {
            get { return HttpContext.Current.Session["UserId"] as string; }
            set { HttpContext.Current.Session["UserId"] = value; }
        }
        public static void Abandon()
        {
            HttpContext.Current.Session.Abandon();
        }
        public static string SessionId
        {
            get
            {
                return HttpContext.Current.Session.SessionID;
            }
        }
    }
}