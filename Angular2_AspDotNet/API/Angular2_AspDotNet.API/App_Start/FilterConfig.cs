using System.Web;
using System.Web.Mvc;

namespace Angular2_AspDotNet.API
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
