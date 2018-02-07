
using System;
using System.Security.Cryptography;
using System.Text;

namespace Angular2_AspDotNet.Security
{
    public class AES
    {
        private static byte[] KEY_OLD;

        public static byte[] KEY;

        static AES()
        {
            AES.KEY_OLD = new byte[] { 17, 30, 247, 12, 129, 74, 136, 206, 58, 52, 163, 113, 89, 13, 76, 26 };
            AES.KEY = new byte[] { 17, 30, 247, 12, 129, 74, 136, 206, 58, 52, 163, 113, 89, 13, 76, 26, 146, 74, 148, 42, 179, 59, 16, 32 };
        }

        public AES()
        {
        }

        public static string Decrypt(string text)
        {
            return AES.Decrypt(AES.KEY, text);
        }

        public static string Decrypt(byte[] key, string text)
        {
            string str;
            byte[] numArray = new byte[8];
            Array.Copy(key, 0, numArray, 0, 8);
            TripleDESCryptoServiceProvider tripleDESCryptoServiceProvider = new TripleDESCryptoServiceProvider()
            {
                BlockSize = 64,
                KeySize = 192,
                Mode = CipherMode.CBC,
                Padding = PaddingMode.PKCS7,
                Key = key,
                IV = numArray
            };
            byte[] numArray1 = Convert.FromBase64String(text);
            try
            {
                ICryptoTransform cryptoTransform = tripleDESCryptoServiceProvider.CreateDecryptor();
                byte[] numArray2 = cryptoTransform.TransformFinalBlock(numArray1, 0, (int)numArray1.Length);
                return Encoding.Unicode.GetString(numArray2);
            }
            catch (CryptographicException cryptographicException1)
            {
                CryptographicException cryptographicException = cryptographicException1;
                //Errorlog
                str = AES.DecryptOld(AES.KEY_OLD, text);
            }
            return str;
        }

        private static string DecryptOld(byte[] key, string text)
        {
            RijndaelManaged rijndaelManaged = new RijndaelManaged()
            {
                BlockSize = 128,
                KeySize = 128,
                Mode = CipherMode.CBC,
                Padding = PaddingMode.PKCS7,
                Key = key,
                IV = key
            };
            byte[] numArray = Convert.FromBase64String(text);
            ICryptoTransform cryptoTransform = rijndaelManaged.CreateDecryptor();
            byte[] numArray1 = cryptoTransform.TransformFinalBlock(numArray, 0, (int)numArray.Length);
            return Encoding.Unicode.GetString(numArray1);
        }

        public static string Encrypt(string text)
        {
            return AES.Encrypt(AES.KEY, text);
        }

        public static string Encrypt(byte[] key, string text)
        {
            byte[] numArray = new byte[8];
            Array.Copy(key, 0, numArray, 0, 8);
            TripleDESCryptoServiceProvider tripleDESCryptoServiceProvider = new TripleDESCryptoServiceProvider()
            {
                BlockSize = 64,
                KeySize = 192,
                Mode = CipherMode.CBC,
                Padding = PaddingMode.PKCS7,
                Key = key,
                IV = numArray
            };
            byte[] bytes = Encoding.Unicode.GetBytes(text);
            ICryptoTransform cryptoTransform = tripleDESCryptoServiceProvider.CreateEncryptor();
            byte[] numArray1 = cryptoTransform.TransformFinalBlock(bytes, 0, (int)bytes.Length);
            return Convert.ToBase64String(numArray1);
        }
    }
}
