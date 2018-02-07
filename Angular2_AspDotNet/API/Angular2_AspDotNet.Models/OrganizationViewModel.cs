using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class OrganizationViewModel
    {
        public int OrganizationID { get; set; }
        public string OrganizationName { get; set; }
        public string Logo { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string AddressLine { get; set; }
        public Boolean IsActive { get; set; }
    }

    //Organization list view model
    public class OrganizationListFilterModel
    {
        public string OrganizationName { get; set; }
        public string OrganizationAddress { get; set; }
        public int PageNo { get; set; }
        public int PageSize { get; set; }
        public string SortOrder { get; set; }
        public string SortColumn { get; set; }
    }
    public class OrganizationListViewResult
    {
        public OrganizationListViewResult()
        {
            this.OrganizationListResult = new List<OrganizationListResult>();
        }
        public int TotalRecords { get; set; }
        public List<OrganizationListResult> OrganizationListResult { get; set; }
    }
    public class OrganizationListResult
    {
        public int OrganizationID { get; set; }
        public string OrganizationName { get; set; }
        public string OrganizationAddress { get; set; }
        public string OrganizationLogo { get; set; }
        public Nullable<long> RowID { get; set; }
    }
}
