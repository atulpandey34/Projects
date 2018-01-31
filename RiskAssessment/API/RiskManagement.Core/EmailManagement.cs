using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Mail;

namespace RiskManagement.Core
{
    public class EmailManagement
    {
        string SMTPUserName = ConfigurationManager.AppSettings["SMTPUserName"];
        string SMTPMailPassword = ConfigurationManager.AppSettings["SMTPMailPassword"];
        string SmtpClient = ConfigurationManager.AppSettings["SmtpClient"];
        string SmtpPort = ConfigurationManager.AppSettings["SmtpPort"];
        string MailFrom = ConfigurationManager.AppSettings["MailFrom"];
        public EmailManagement()
        {
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="body"></param>
        /// <param name="Subject"></param>
        /// <param name="MailCC"></param>
        /// <param name="MailTo"></param>
        /// <param name="MailFrom"></param>
        /// <param name="fileContentList"></param>
        /// <param name="fileNameList"></param>
        public void SendMailToUserWithCCANdAttachment(string body, string Subject, string MailCC, string MailTo, string MailFrom, List<byte[]> fileContentList, List<string> fileNameList)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(MailFrom))
                    MailFrom = this.MailFrom;

                MailMessage myMail = new MailMessage();
                myMail.From = (new MailAddress(MailFrom));
                MailTo += "|";
                if (!string.IsNullOrWhiteSpace(MailTo))
                {
                    string[] arr = MailTo.Trim().Split('|');
                    foreach (var item in arr)
                    {
                        if (!string.IsNullOrWhiteSpace(item))
                            myMail.To.Add(item);
                    }
                }
                MailCC += "|";
                if (!string.IsNullOrWhiteSpace(MailCC))
                {
                    string[] arr = MailCC.Trim().Split('|');
                    foreach (var item in arr)
                    {
                        if (!string.IsNullOrWhiteSpace(item))
                            myMail.CC.Add(item);
                    }
                }
                myMail.Subject = Subject;
                myMail.IsBodyHtml = true;
                try
                {
                    myMail.Body = body;
                }
                catch
                { }

                int counter = 0;
                foreach (byte[] attachment in fileContentList)
                {
                    if (attachment.Length > 0)
                    {
                        Stream stream = new MemoryStream(attachment);
                        myMail.Attachments.Add(new Attachment(stream, fileNameList[counter]));
                        counter++;
                    }
                }


                SmtpClient smtpclient = new SmtpClient();
                smtpclient.Host = SmtpClient;
                smtpclient.Port = Convert.ToInt32(SmtpPort);
                smtpclient.Credentials = new System.Net.NetworkCredential(SMTPUserName, SMTPMailPassword);
                smtpclient.EnableSsl = true;
                smtpclient.DeliveryMethod = SmtpDeliveryMethod.Network;

                smtpclient.Send(myMail);

                myMail.Dispose();
            }
            catch (Exception ex)
            {
                throw new Exception("Error while sending email" + ex.Message);
            }
        }
    }
}