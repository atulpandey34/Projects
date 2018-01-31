using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Globalization;
using System.IO;
using System.Reflection;

namespace RiskManagement.API.Common
{

    public static class Extension
    {
        public static string BuildCsvString<T>(this List<T> myList)
        {
            if (myList != null && myList.Count > 0)
            {
                //Csv string
                StringWriter mySw = new StringWriter();

                //Add headers by looping properties of type
                PropertyInfo[] properties = myList[0].GetType().GetProperties();
                foreach (PropertyInfo curProp in properties)
                {
                    mySw.Write('"' + curProp.Name.ToUpper() + '"' + ",");
                }
                mySw.Write('\n');

                //Loop items in list (rows)
                object curValue;
                foreach (T curItem in myList)
                {
                    //Loop properties (columns)
                    foreach (PropertyInfo curProp in properties)
                    {
                        //Get value, check, and write
                        curValue = curItem.GetType().GetProperty(curProp.Name).GetValue(curItem, null);
                        if (curValue != null)
                        {
                            mySw.Write('"' + curValue.ToString() + '"' + ",");
                        }
                        else
                        {
                            mySw.Write('"' + "" + '"' + ",");
                        }

                    }
                    mySw.Write('\n');
                }

                //Clean up and return
                mySw.Close();
                return mySw.ToString();
            }
            else
            {
                return "";
            }
        }
    }
}