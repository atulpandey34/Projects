using Angular2_AspDotNet.Repository.Interfaces;
using Angular2_AspDotNet.Repository.Repository;
using StructureMap;
using StructureMap.Configuration.DSL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Elmah;
using Angular2_AspDotNet.Data.UnitOfWork;

namespace Angular2_AspDotNet.API
{
    public class StructureMapControllerFactory : DefaultControllerFactory
    {
        private readonly string _controllerName = "SeoUrl";
        private readonly string _actionName = "Seourl";
        protected override IController GetControllerInstance(RequestContext requestContext, Type controllerType)
        {
            try
            {
                if ((requestContext == null) || (controllerType == null) || !typeof(IController).IsAssignableFrom(controllerType))
                {
                    var controllerName = requestContext.RouteData.Values["controller"];
                    requestContext.RouteData.Values["controller"] = _controllerName;
                    requestContext.RouteData.Values["action"] = _actionName;
                    return (Controller)ObjectFactory.GetInstance(this.GetControllerType(requestContext, _controllerName));

                }

                return (Controller)ObjectFactory.GetInstance(controllerType);
            }
            catch (StructureMapException ex)
            {
                ErrorSignal.FromCurrentContext().Raise(ex);
                throw new Exception(ObjectFactory.WhatDoIHave());
            }
        }
    }
    public static class StructureMapper
    {
        public static void Run()
        {
            ControllerBuilder.Current
                .SetControllerFactory(new StructureMapControllerFactory());

            ObjectFactory.Initialize(action =>
            {
                action.AddRegistry(new RepositoryRegistry());
            });
        }
    }

    public class RepositoryRegistry : Registry
    {
        public RepositoryRegistry()
        {
            Scan(
 scan =>
                  {

                      scan.TheCallingAssembly();

                      scan.WithDefaultConventions();

                  });
            For<HttpContextBase>().Use(x => new HttpContextWrapper(HttpContext.Current));
            For<IUserRepository>().Use(x => new UserRepository(new UnitOfWork()));

        }
    }

}