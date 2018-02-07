using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace Angular2_AspDotNet.Models
{
    public class RolesResponsibilityViewModel
    {
        public int RoleResponsibilityID { get; set; }
        public int RoleResponsibilityVersionID { get; set; }
        public int RoleID { get; set; }
        public int Type { get; set; }
        public int SectionID { get; set; }
        public int LatestRoleResponsibilityVersionID { get; set; }
        public string LatestVersion { get; set; }
        public string LatestChanges { get; set; }
        public int OrganizationId { get; set; }
        public List<RoleResponsibilityVersionSectionViewModel> RoleResponsibilityVersionSectionViewModel { get; set; }
    }

    public class RoleResponsibilityVersionSectionViewModel
    {
        //RoleResponsibilityVersion
        public int RoleResponsibilityVersionID { get; set; }
        public int RoleResponsibilityID { get; set; }
        public string Version { get; set; }
        public string DocumentName { get; set; }
        public string DocumentPath { get; set; }
        public string Changes { get; set; }
        public int ApprovedBy { get; set; }
        public string ApprovedByName { get; set; }
        public string ApprovedDate { get; set; }
        public int CreatedBy { get; set; }
        public string CreatedDate { get; set; }
        public string ModifiedByName { get; set; }
        public string ModifiedDate { get; set; }
        //RoleResponsibilityVersionSection
        public int RoleResponsibilityVersionSectionID { get; set; }
        public int SectionID { get; set; }
        public string SectionName { get; set; }
        public string SectionDetails { get; set; }
        public int OrganizationId { get; set; }
    }

    public class MasterRoleSectionViewModel
    {
        public int MasterRoleSectionID { get; set; }
        public string SectionName { get; set; }
        public bool Active { get; set; }

    }

    public class GetRoleResponsibilityViewModel
    {
        private string _sectionDetails = string.Empty;
        public int Type { get; set; }
        public string SectionDetails
        {
            get
            {
                return _sectionDetails;
            }
            set
            {
                _sectionDetails = (value);
            }
        }
        public string SectionName { get; set; }
        public string DocumentName { get; set; }
        public string DocumentPath { get; set; }
        public Nullable<int> RoleResponsibilityVersionID { get; set; }
        public int RoleResponsibilityID { get; set; }
        public string Changes { get; set; }
    }
}
