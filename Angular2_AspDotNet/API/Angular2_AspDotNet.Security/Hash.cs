using System;
using System.Security.Cryptography;
using System.Text;

namespace Angular2_AspDotNet.Security
{
    public class Hash
    {
        public Hash()
        {
        }

        public static int HashPJW(string value)
        {
            return Hash.PJW(Encoding.UTF8.GetBytes(value));
        }

        private static int PJW(byte[] value)
        {
            long num = (long)0;
            for (int i = 0; i < (int)value.Length; i++)
            {
                //num = (long)((num << 4) + (ulong)value[i]);
                num = (long)((ulong)(num << 4) + (ulong)value[i]);

                //ulong num1 = num & (ulong)-268435456;
                ulong num1 = (ulong)num & unchecked((ulong)-268435456);

                long num2 = (long)num1;
                if (num1 != (long)0)
                {
                    num = num ^ num2 >> 24;
                    num = num ^ num2;
                }
            }
            return (int)(num % (long)2147483647);
        }

        public static uint PJWHash(string str)
        {
            const uint BitsInUnsignedInt = (uint)(sizeof(uint) * 8);
            const uint ThreeQuarters = (uint)((BitsInUnsignedInt * 3) / 4);
            const uint OneEighth = (uint)(BitsInUnsignedInt / 8);
            const uint HighBits = (uint)(0xFFFFFFFF) << (int)(BitsInUnsignedInt - OneEighth);
            uint hash = 0;
            uint test = 0;
            uint i = 0;

            for (i = 0; i < str.Length; i++)
            {
                hash = (hash << (int)OneEighth) + ((byte)str[(int)i]);

                if ((test = hash & HighBits) != 0)
                {
                    hash = ((hash ^ (test >> (int)ThreeQuarters)) & (~HighBits));
                }
            }

            return hash;
        }

        public static string SHA1(string value)
        {
            SHA1 sHA1CryptoServiceProvider = new SHA1CryptoServiceProvider();
            byte[] bytes = Encoding.UTF8.GetBytes(value);
            return Convert.ToBase64String(sHA1CryptoServiceProvider.ComputeHash(bytes));
        }
    }
}
