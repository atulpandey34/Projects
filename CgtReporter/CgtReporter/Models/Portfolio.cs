using System;
using System.Collections.Generic;

namespace CgtReporter.Models
{
    public partial class Portfolio
    {
        public Portfolio()
        {
            PortfolioSecurityHeld = new HashSet<PortfolioSecurityHeld>();
        }

        public int Id { get; set; }
        public string PortfolioName { get; set; }

        public ICollection<PortfolioSecurityHeld> PortfolioSecurityHeld { get; set; }
    }
}
