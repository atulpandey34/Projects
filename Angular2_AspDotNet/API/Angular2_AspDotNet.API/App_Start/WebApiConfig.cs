using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json.Serialization;
using System.Net.Http.Headers;
using Newtonsoft.Json;

namespace Angular2_AspDotNet.API
{
    public static class WebApiConfig
    {
        public static string UrlPrefix { get { return "api"; } }
        public static string UrlPrefixRelative { get { return "~/api"; } }
        public static void Register(HttpConfiguration config)
        {
            config.Filters.Add(new CustomExceptionLogFilterAttribute());
            config.EnableCors();
            var json = config.Formatters.JsonFormatter;
            json.SerializerSettings.PreserveReferencesHandling = Newtonsoft.Json.PreserveReferencesHandling.Objects;
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            config.Formatters.JsonFormatter.SerializerSettings = new JsonSerializerSettings();
            //StructureMapper.Run();
            // Web API configuration and services
            // Configure Web API to use only bearer token authentication.
            config.SuppressDefaultHostAuthentication();
            config.Filters.Add(new HostAuthenticationFilter(OAuthDefaults.AuthenticationType));

            // Web API routes
            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "DefaultApi",
               routeTemplate: "api/{controller}/{action}/{id}",
               defaults: new { id = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi1",
               routeTemplate: "api/{controller}/{action}/{id}/{id1}",
               defaults: new { id = RouteParameter.Optional, id1 = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi2",
               routeTemplate: "api/{controller}/{action}/{id}/{id1}/{id2}",
               defaults: new { id = RouteParameter.Optional, id1 = RouteParameter.Optional, id2 = RouteParameter.Optional }
            );
            config.Routes.MapHttpRoute(
                name: "DefaultApi3",
               routeTemplate: "api/{controller}/{action}/{id}/{id1}/{id2}/{id3}",
               defaults: new { id = RouteParameter.Optional, id1 = RouteParameter.Optional, id2 = RouteParameter.Optional, id3 = RouteParameter.Optional }
            );
            //4 config.Routes.MapHttpRoute(
            // name: "DefaultApi",
            // routeTemplate: "{*catchall}",
            // defaults: new { controller = "Assignment" });





            //config.Routes.MapHttpRoute(
            //    name: "AddEvent",
            //   routeTemplate: "api/{controller}/{action}"

            //);
            config.Formatters.JsonFormatter.SupportedMediaTypes
    .Add(new MediaTypeHeaderValue("text/html"));

            config.Formatters.JsonFormatter.SupportedMediaTypes
    .Add(new MediaTypeHeaderValue("text/xml"));
        }
    }
}
