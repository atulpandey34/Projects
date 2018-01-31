using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
using RiskMgmtRepository.Services;

[assembly: OwinStartup(typeof(RiskManagement.API.Startup))]

namespace RiskManagement.API
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
            MapperConfiguration.Configure();
        }
    }
}
