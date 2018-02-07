using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Security
{
    public class EncryptionXOR
    {
        private readonly string _XOR_DEFAULT_KEY = "Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9Kk0Ll1Mm2Nn3Oo4Pp5Qq6Rr7Ss8Tt9Uu0Vv1Ww2Xx3Yy4Zz567890";

        private string _key;

        public string Key
        {
            get
            {
                return this._key;
            }
            set
            {
                this._key = value;
            }
        }

        public EncryptionXOR()
        {
            this._key = this._XOR_DEFAULT_KEY;
        }

        public string Decrypt(string stringToDecrypt)
        {
            StringBuilder stringBuilder = new StringBuilder(stringToDecrypt.Length / 2);
            for (int i = 0; i < stringToDecrypt.Length / 2; i++)
            {
                byte num = Convert.ToByte(stringToDecrypt.Substring(2 * i, 2), 16);
                byte num1 = (byte)this._key[i % this._key.Length];
                stringBuilder.Append(Convert.ToChar((int)(num ^ num1)));
            }
            return stringBuilder.ToString();
        }

        public string Encrypt(string stringToEncrypt)
        {
            StringBuilder stringBuilder = new StringBuilder();
            for (int i = 0; i < stringToEncrypt.Length; i++)
            {
                stringBuilder.AppendFormat("{0:X2}", (int)(stringToEncrypt[i] ^ this._key[i % this._key.Length]));
            }
            return stringBuilder.ToString();
        }
    }
}
