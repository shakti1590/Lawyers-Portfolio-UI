const menuItems = {
  Business: [
      {
        heading: "Register your business",
        link: "/register-business",
      },
      {
        heading: "Sole proprietorship",
        link: "/sole-proprietorship",
      },
      {
        heading: "Operating under a business name",
        link: "/operating-under-business-name",
        items: [
          { name: "Partnership", link: "/partnership" },
          { name: "Limited Liability Partnership (LLP)", link: "/llp" },
          { name: "Private Limited Company", link: "/private-limited-company" },
          { name: "Public Limited Company", link: "/public-limited-company" },
        ],
      },
      {
        heading: "Non-Profit",
        link: "/non-profit",
        items: [
          { name: "Trust", link: "/trust" },
          { name: "Society", link: "/society" },
          { name: "Section 8 Company", link: "/section-8-company" },
        ],
      },
      {
        heading: "Run your business",
        link: "/business-protection",
        items: [
          { name: "Get a Business Attorney", link: "/business-attorney" },
          { name: "Finances and Funding", link: "/finances-funding" },
          { name: "Branding and Marketing", link: "/branding-marketing" },
          { name: "Operations and Management", link: "/operations-management" },
        ],
      },
      {
        heading: "Business licenses",
        link: "/business-licenses",
        items: [
          { name: "Goods and Services Tax (GST)", link: "/gst" },
          { name: "Udhyam Registration", link: "/udhyam-registration" },
          { name: "FSSAI Registration", link: "/fssai-registration" },
          { name: "Trade License", link: "/trade-license" },
          { name: "EPFO", link: "/epfo" },
          { name: "ESIC", link: "/esic" },
          { name: "Start up India", link: "/startup-india" },
          {
            name: "Shop and Commercial Establishment",
            link: "/shop-commercial-establishment",
          },
          { name: "Work Contract", link: "/work-contract" },
          { name: "Drug License", link: "/drug-license" },
        ],
      },
      {
        heading: "Business Attorneys",
        link: "/business-attorneys",
      },
    
    
      {
        heading: "Legal Compliance and Regulations",
        link: "/legal-compliance",
      },
      {
        heading: "Direct Tax",
        link: "/direct-tax",
        items: [
          { name: "Income Tax", link: "/income-tax" },
          { name: "Corporate Tax", link: "/corporate-tax" },
          { name: "Capital Gains Tax", link: "/capital-gains-tax" },
          { name: "Securities Transaction Tax (STT)", link: "/stt" },
        ],
      },
      {
        heading: "Indirect Tax",
        link: "/indirect-tax",
        items: [
          { name: "Goods and Services Tax (GST)", link: "/gst" },
          { name: "Customs Duty", link: "/customs-duty" },
        ],
      },
      {
        heading: "Filing Tax Returns",
        link: "/filing-tax-returns",
        items: [
          { name: "Income Tax", link: "/income-tax" },
          { name: "Goods and Services Tax (GST)", link: "/gst" },
          { name: "EPFO", link: "/epfo" },
          { name: "ESIC", link: "/esic" },
          { name: "ETDS", link: "/etds" },
          { name: "FSSAI", link: "/fssai" },
        ],
      },
    
    
      {
        heading: "Protect your business",
        link: "/protect-business",
      },
      {
        heading: "Intellectual Property Rights",
        link: "/intellectual-property-rights",
        items: [
          { name: "Trademark registration", link: "/trademark-registration" },
          { name: "Trademark search", link: "/trademark-search" },
          { name: "Trademark monitoring", link: "/trademark-monitoring" },
          { name: "Provisional patent", link: "/provisional-patent" },
          { name: "Copyright", link: "/copyright" },
        ],
      },
      {
        heading: "Other Regulatory Compliances",
        link: "/regulatory-compliances",
        items: [
          { name: "Labour Laws", link: "/labour-laws" },
          {
            name: "Environmental Regulations",
            link: "/environmental-regulations",
          },
          { name: "Consumer Protection", link: "/consumer-protection" },
          { name: "Data Protection and Privacy", link: "/data-protection" },
          { name: "Corporate Governance", link: "/corporate-governance" },
        ],
      },
      {
        heading: "Audit and Assurance Department",
        link: "/audit-assurance",
        items: [
          { name: "Internal Audit", link: "/internal-audit" },
          { name: "Statutory Audit", link: "/statutory-audit" },
          { name: "Tax Audit", link: "/tax-audit" },
        ],
      },
  ],
  Personal: [
    
      {
        heading: "Estate plans",
        link: "/estate-plans",
        items: [
          { name: "Will", link: "/will" },
          { name: "Trust", link: "/trust" },
        ],
      },
    
    
      {
        heading: "Family",
        link: "/family",
        items: [
          { name: "Power of attorney", link: "/power-of-attorney" },
          { name: "Healthcare directive", link: "/healthcare-directive" },
          { name: "Personal attorneys", link: "/personal-attorneys" },
        ],
      },
    
      {
        heading: "Real Estate",
        link: "/real-estate",
        items: [
          { name: "Residential lease", link: "/residential-lease" },
          { name: "Property deed transfer", link: "/property-deed-transfer" },
        ],
      },
  ],
  Casework: [
    
      {
        heading: "Our Services",
        link: "/our-services",
        items: [
          { name: "Accounting & Bookkeeping", link: "/accounting-bookkeeping" },
          { name: "TIN-FC", link: "/tin-fc" },
          { name: "DSC or eSignature", link: "/dsc-esignature" },
          { name: "Certified copies", link: "/certified-copies" },
          { name: "Compliance Calendar", link: "/compliance-calendar" },
        ],
      },
      {
        heading: "Legal Support",
        link: "/legal-support",
        items: [
          { name: "Drafting", link: "/drafting" },
          { name: "Notice Reply", link: "/notice-reply" },
          { name: "Appeal", link: "/appeal" },
          { name: "Tribunal", link: "/tribunal" },
          { name: "High Court", link: "/high-court" },
        ],
      },
    
    
      // {
      //   heading: "Additional business services",
      //   link: "/additional-business-services",
      // },
      {
        heading: "Annual Report",
        link: "/annual-report",
        items: [
          { name: "Financial Statement", link: "/financial-statement" },
          { name: "TAX Audit Report", link: "/tax-audit-report" },
          { name: "Project Report", link: "/project-report" },
          { name: "CMA Report", link: "/cma-report" },
          { name: "Internal Audit", link: "/internal-audit" },
          { name: "Statutory Audit", link: "/statutory-audit" },
        ],
      },
    
      {
        heading: "Legal forms and agreements",
        link: "/legal-forms",
        items: [
          { name: "General agreement", link: "/general-agreement" },
          {
            name: "Business plan nondisclosure agreement",
            link: "/business-plan-nda",
          },
          { name: "Promissory notes", link: "/promissory-notes" },
          {
            name: "Independent contractor agreement",
            link: "/contractor-agreement",
          },
          { name: "Employment agreement", link: "/employment-agreement" },
          {
            name: "View all legal forms and agreements",
            link: "/view-all-forms",
          },
        ],
      },
    
  ],
  Rights:[
    {
      heading: "Intellectual Property (IP)",
      link: "/intellectual-property",
      items: [
        {
          name: "Introduction to Intellectual Property (IP)",
          link: "/ip-introduction",
        },
        { name: "Patent Law", link: "/patent-law" },
        { name: "Trademark Law", link: "/trademark-law" },
        { name: "Copyright Law", link: "/copyright-law" },
        { name: "Trade Secrets", link: "/trade-secrets" },
        { name: "IP Licensing and Commercialization", link: "/ip-licensing" },
        { name: "IP Enforcement and Litigation", link: "/ip-enforcement" },
      ],
    },
    {
      heading: "Regulatory Compliance",
      link: "/regulatory-compliance",
      items: [
        {
          name: "Fundamentals of Regulatory Compliance",
          link: "/regulatory-compliance-fundamentals",
        },
        {
          name: "Compliance Frameworks and Standards",
          link: "/compliance-frameworks",
        },
        {
          name: "Risk Management and Internal Controls",
          link: "/risk-management-controls",
        },
        {
          name: "Data Protection and Privacy",
          link: "/data-protection-privacy",
        },
        {
          name: "Corporate Ethics and Compliance Programs",
          link: "/corporate-ethics-compliance",
        },
        {
          name: "Regulatory Reporting and Documentation",
          link: "/regulatory-reporting",
        },
        {
          name: "Responding to Regulatory Investigations",
          link: "/responding-regulatory-investigations",
        },
      ],
    },
    {
      heading: "Litigation and Dispute Resolution",
      link: "/litigation-dispute",
      items: [
        { name: "Fundamentals of Civil Litigation", link: "/civil-litigation" },
        { name: "Drafting and Filing Pleadings", link: "/drafting-pleadings" },
        { name: "Discovery Process", link: "/discovery-process" },
        { name: "Alternative Dispute Resolution (ADR)", link: "/adr" },
        { name: "Trial Preparation and Strategy", link: "/trial-preparation" },
        {
          name: "Litigation Ethics and Professional Responsibility",
          link: "/litigation-ethics",
        },
        { name: "Post-Trial Motions and Appeals", link: "/post-trial-appeals" },
      ],
    },
  ],
  Expertise: [
    {
      heading: "Corporate and Business Law",
      link: "/corp-business-law",
      items: [
        { name: "Company Formation and Structure", link: "/company-formation" },
        { name: "Corporate Governance", link: "/corporate-governance" },
        { name: "Mergers and Acquisitions", link: "/mergers-acquisitions" },
        { name: "Contract Law and Drafting", link: "/contract-law-drafting" },
        {
          name: "Risk Management and Compliance",
          link: "/risk-management-compliance",
        },
      ],
    },
    {
      heading: "Employment Law",
      link: "/employment-law",
      items: [
        {
          name: "Overview of Employment Law",
          link: "/employment-law-overview",
        },
        {
          name: "Employment Contracts and Agreements",
          link: "/employment-contracts",
        },
        {
          name: "Workplace Policies and Compliance",
          link: "/workplace-policies",
        },
        { name: "Handling Employment Disputes", link: "/employment-disputes" },
        {
          name: "Discrimination and Harassment",
          link: "/discrimination-harassment",
        },
        { name: "Wage and Hour Law", link: "/wage-hour-law" },
        { name: "Termination and Severance", link: "/termination-severance" },
      ],
    },
    {
      heading: "Real Estate and Property Law",
      link: "/real-estate-law",
      items: [
        {
          name: "Fundamentals of Real Estate Law",
          link: "/real-estate-fundamentals",
        },
        { name: "Property Transactions", link: "/property-transactions" },
        { name: "Leasing and Tenancy Agreements", link: "/leasing-tenancy" },
        { name: "Real Estate Financing", link: "/real-estate-financing" },
        { name: "Land Use and Zoning", link: "/land-use-zoning" },
        { name: "Real Estate Litigation", link: "/real-estate-litigation" },
        {
          name: "Environmental Law and Real Estate",
          link: "/environmental-law-real-estate",
        },
      ],
    },
  ],
  Support: [
    {
      heading: "Explore Products",
      link: "/explore-products",
      items: [
        { name: "Law Practice Management", link: "/law-practice-management" },
        { name: "Client Intake & CRM", link: "/client-intake-crm" },
        { name: "Document Automation", link: "/document-automation" },
        { name: "Apps & Integrations", link: "/apps-integrations" },
      ],
    },
    {
      heading: "Manage Your Firm",
      link: "/manage-your-firm",
      items: [
        { name: "Calendaring", link: "/calendaring" },
        { name: "Case Management", link: "/case-management" },
        { name: "Collaboration", link: "/collaboration" },
        { name: "Contact Management", link: "/contact-management" },
        { name: "Document Management", link: "/document-management" },
        { name: "Firm Communications", link: "/firm-communications" },
        { name: "Legal Aid", link: "/legal-aid" },
        // {
        //   name: "Medical Records & Settlement Management New",
        //   link: "/medical-records-settlement",
        // },
        { name: "Mobile App for Firms", link: "/mobile-app" },
        { name: "Task Management", link: "/task-management" },
      ],
    },
    {
      heading: "Bill Efficiently",
      link: "/bill-efficiently",
      items: [
        { name: "Accounting", link: "/accounting" },
        { name: "Billing", link: "/billing" },
        { name: "Firm Reporting & Insights", link: "/firm-reporting-insights" },
        { name: "Online Payments", link: "/online-payments" },
        { name: "Time & Expense Tracking", link: "/time-expense-tracking" },
      ],
      
    },
    {
      heading: "Manage Documents",
      link: "/manage-documents",
      items: [
        {
          name: "Advanced Document Automation",
          link: "/advanced-document-automation",
        },
        { name: "Court Forms", link: "/court-forms" },
        { name: "Template B", link: "/template-b" },
      ],
    },
    {
      heading: "Engage Clients",
      link: "/engage-clients",
      items: [
        { name: "Appointment Booking", link: "/appointment-booking" },
        { name: "Client Intake", link: "/client-intake" },
        { name: "Client Portal", link: "/client-portal" },
        {
          name: "Client Relationship Management",
          link: "/client-relationship-management",
        },
        { name: "Documents & E-Signatures", link: "/documents-e-signatures" },
        {
          name: "Google's Local Services Ads",
          link: "/google-local-services-ads",
        },
        { name: "Websites", link: "/websites" },
        {
          name: "Workflow & Email Automation",
          link: "/workflow-email-automation",
        },
      ],
    },
    
  ],
  Resources: [
    {
      heading: "Explore",
      link: "/explore",
      items: [
        { name: "Blog", link: "/blog" },
        { name: "Customer Stories", link: "/customer-stories" },
        { name: "Guides", link: "/guides" },
        { name: "News & Press", link: "/news-press" },
      ],
      
    },
    {
      heading: "Events",
      link: "/events",
      items: [
        { name: "All Upcoming Events", link: "/all-upcoming-events" },
        { name: "Cloud Conference", link: "/cloud-conference" },
        {
          name: "Continuing Legal Education",
          link: "/continuing-legal-education",
        },
        { name: "On-Demand Webinars", link: "/on-demand-webinars" },
      ],
    },
    {
      heading: "Topics",
      link: "/topics",
      items: [
        { name: "AI for Law Firms", link: "/ai-law-firms" },
        { name: "Law Firm Billing", link: "/law-firm-billing" },
        { name: "Law Firm Marketing", link: "/law-firm-marketing" },
        { name: "Law Firm Operations", link: "/law-firm-operations" },
        { name: "Law Firm Productivity", link: "/law-firm-productivity" },
        {
          name: "Lawyer-Client Relationships",
          link: "/lawyer-client-relationships",
        },
        { name: "Legal Document Templates", link: "/legal-document-templates" },
        { name: "Starting a Law Firm", link: "/starting-law-firm" },
      ],
    },
    {
      heading: "Industry Reports",
      link: "/industry-reports",
      items: [
        {
          name: "Legal Trends Report",
          link: "/legal-trends-report",
        },
        {
          name: "Key Insights from Legal Trends Report ",
          link: "/webinar-insights",
        },
        {
          name: "Legal Trends for Mid-Sized Law Firms",
          link: "/legal-trends-mid-sized",
        },
        { name: "State Specific Insights", link: "/state-specific-insights" },
        {
          name: "Hourly Rate Benchmark Calculator",
          link: "/hourly-rate-calculator",
        },
        { name: "All Industry Reports", link: "/all-industry-reports" },
      ],
    },
    {
      heading: "Training Courses",
      link: "/training-courses",
      items: [
        { name: "Onboarding Courses", link: "/onboarding-courses" },
        { name: "Academy", link: "/academy" },
        {
          name: "Self-Assessment and Career Planning",
          link: "/self-assessment-career",
        },
        {
          name: "Building Professional Skills",
          link: "/building-professional-skills",
        },
        {
          name: "Resume Writing and Interview Skills",
          link: "/resume-interview-skills",
        },
        { name: "Professional Development", link: "/professional-development" },
        {
          name: "Work-Life Balance and Well-Being",
          link: "/work-life-balance",
        },
      ],
    },
    
  ],
  Careers: [
    {
      heading: "Freshers",
      link: "/freshers",
      items: [
        { name: "Freshers Application", link: "/freshers-application" },
        { name: "Certification", link: "/certification" },
      ],
    },
    {
      heading: "Internship",
      link: "/internship",
      items: [
        { name: "Application for Internship", link: "/application-internship" },
        { name: "Certification", link: "/certification" },
      ],
    },
    {
      heading: "Professional",
      link: "/professional",
      items: [{ name: "Become A Partner", link: "/become-a-partner" }],
    },
    {
      heading: "Become an Affiliate",
      link: "/become-an-affiliate",
      items: [
        { name: "Start Marketing", link: "/start-marketing" },
        { name: "Get Rewards", link: "/get-rewards" },
      ],
    },
  ],
};
export default menuItems;
