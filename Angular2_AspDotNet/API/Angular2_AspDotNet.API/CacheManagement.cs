using RiskManagement.Models;
using RiskManagement.Repository.Interfaces;
using RiskManagement.Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace RiskManagement.API
{
    public class CacheManagement
    {
        private ICacheManager _IcacheManager = null;
        public CacheManagement()
        {
            this._IcacheManager = new MemoryCacheManager();
        }
        public Dictionary<string, SessionData> SessionModel
        {
            get
            {
                if (this._IcacheManager.IsSet("SessionModel"))
                {
                    var loginModel = this._IcacheManager.Get<LoginModel>("SessionModel");
                    return loginModel.model;
                }
                return new Dictionary<string, SessionData>();
            }
            set
            {
                if (this._IcacheManager.IsSet("SessionModel"))
                {
                    var loginModel = this._IcacheManager.Get<LoginModel>("SessionModel");
                    loginModel.model.Add(value.FirstOrDefault().Key, value.FirstOrDefault().Value);
                    this._IcacheManager.Remove("SessionModel");
                    this._IcacheManager.Set("SessionModel", loginModel, 120);
                }
                else
                {
                    var loginModel = new LoginModel();
                    loginModel.model.Add(value.FirstOrDefault().Key, value.FirstOrDefault().Value);
                    this._IcacheManager.Set("SessionModel", loginModel, 120);
                }
            }
        }

        public SessionData GetSessionData(string sessionID)
        {
            SessionData data = new SessionData();
            var model = this.SessionModel;
            if (model != null && model.Count() > 0)
            {
                model.TryGetValue(sessionID, out data);
            }
            return data;
        }
        public void DeleteSession(string sessionID)
        {
            var model = this.SessionModel;
            if (model != null && model.Count() > 0)
            {
                model.Remove(sessionID);
            }
        }
    }
}