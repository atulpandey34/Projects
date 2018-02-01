using System;
using System.Collections.Generic;

namespace CgtReporter.Models
{
    public partial class PortfolioSecurityHeld
    {
        public int PortfolioSecurityHeldId { get; set; }
        public string Asx { get; set; }
        public int AsxNum { get; set; }
        public int PortfolioId { get; set; }

        public Portfolio Portfolio { get; set; }
    }
}
