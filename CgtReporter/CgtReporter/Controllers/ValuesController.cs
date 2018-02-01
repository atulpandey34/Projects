using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CgtReporter.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorld.Controllers
{
  [Route("api/portfolio")]
  //[EnableCors("AllowAllOrigins")]
  public class PortfolioController : Controller
  {
    private CgtReporterContext cgtcontext;

    public PortfolioController(CgtReporterContext context)
    {
      this.cgtcontext = context;
    }

    // GET api/portfolio
    [HttpGet]
    public List<Portfolio> Get()
    {

      return cgtcontext.Portfolio.ToList();
    }

    // GET api/values/5
    [HttpGet("{id}")]
    public string Get(int id)
    {
      return "value";
    }

    // POST api/values
    [HttpPost]
    public void Post([FromBody]string value)
    {
      Portfolio p = new Portfolio();
      p.PortfolioName = "Portfolio name";
      cgtcontext.Portfolio.Add(p);
      cgtcontext.SaveChanges();
    }

    // PUT api/values/5
    [HttpPut("{id}")]
    public void Put(int id, [FromBody]string value)
    {
    }

    // DELETE api/values/5
    [HttpDelete("{id}")]
    public void Delete(int id)
    {
    }
  }
}
