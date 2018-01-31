using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RiskManagement.API.Common
{
    public static class ErrorLog
    {
        public static void LogError(Exception ex)
        {
            try
            {
                Elmah.ErrorSignal.FromCurrentContext().Raise(ex);
            }
            catch
            {
            }
            finally
            {
            }
        }
    }
}