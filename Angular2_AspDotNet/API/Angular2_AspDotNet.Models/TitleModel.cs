﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    [DataContract]
    public class TitleModel
    {
        [DataMember]
        public int TitleID { get; set; }
        [DataMember]
        public string TitleName { get; set; }
    }
}
