//using NCrontab;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NCrontab.Advanced;
using NCrontab.Advanced.Enumerations;

namespace RiskManagement.Core
{
    public class CommonMethods
    {
        private static Random random = new Random();
        public static string RandomString(int length)
        {
            const string chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }
        public static string RandomColor(string ignoreColor = "")
        {
            var color = String.Format("#{0:X6}", random.Next(0x1000000));
            if (!string.IsNullOrEmpty(ignoreColor))
            {
                if (ignoreColor.Equals("#000000"))
                {
                    color = String.Format("#{0:X6}", random.Next(0x1000000));
                }
            }
            return color;
        }
        public static DateTime GenerateNextDateFromCronExpression(string expression)
        {
            var schedule = CrontabSchedule.TryParse(expression, CronStringFormat.WithSecondsAndYears);
            return schedule.GetNextOccurrence(DateTime.Now);
        }
        public static List<DateTime> GenerateAllDateFromCronExpression(string expression)
        {
            var schedule = CrontabSchedule.TryParse(expression, CronStringFormat.WithSecondsAndYears);
            return schedule.GetNextOccurrences(DateTime.Now, DateTime.Now.AddYears(3)).ToList<DateTime>();
        }
        public static List<DateTime> GenerateAllDateFromCronExpression(string expression, DateTime startdate, DateTime endDate)
        {
            var schedule = CrontabSchedule.TryParse(expression, CronStringFormat.WithSecondsAndYears);
            return schedule.GetNextOccurrences(startdate, endDate).ToList<DateTime>();
        }
    }
}
