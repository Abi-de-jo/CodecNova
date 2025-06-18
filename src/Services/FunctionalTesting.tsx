import { useState } from "react";
import { 
  FaShieldAlt, 
  FaCogs, 
  FaServer, 
  FaHandshake, 
  FaFlask, 
  FaTools,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const services = [
  {
    id: 'basic',
    icon: <FaShieldAlt className="text-2xl" />,
    title: "Basic Testing Services",
    description: "Comprehensive functional validation to ensure systems meet requirements",
    features: [
      "White-box Testing",
      "System Testing",
      "System Integration Testing",
      "Acceptance Testing",
      "Product Testing",
      "Package Testing",
      "Mainframe Testing"
    ],
    extras: [
      "Conversion & Migration Testing",
      "Globalization & Localization Testing"
    ],
    image: "https://novaturetech.com/wp-content/uploads/testing-services.jpg"
  },
  {
    id: 'enterprise',
    icon: <FaCogs className="text-2xl" />,
    title: "Enterprise Testing Services",
    description: "Scalable solutions for complex enterprise environments",
    highlights: [
      {
        title: "Testing Center of Excellence",
        text: "Streamlines processes with core-flex staffing model"
      },
      {
        title: "Managed Test Center",
        text: "Accelerates testing while reducing costs"
      },
      {
        title: "Test Consulting",
        items: [
          "Enterprise Test Consulting",
          "Test Lifecycle Modeling",
          "Testing Maturity Analysis"
        ]
      }
    ],
    image: "https://novaturetech.com/wp-content/uploads/enterprise-testing.jpg"
  },
  {
    id: 'support',
    icon: <FaServer className="text-2xl" />,
    title: "Testing Support Services",
    description: "End-to-end support infrastructure for testing operations",
    services: [
      {
        name: "Testing Tools Administration",
        detail: "License Management, Tool Consulting, Administration"
      },
      {
        name: "Test Environment Management",
        detail: "Develop and maintain environments across platforms"
      },
      {
        name: "Test Data Management",
        detail: "Scalable test data generation strategies"
      }
    ],
    image: "https://novaturetech.com/wp-content/uploads/support-services.jpg"
  },
  {
    id: 'engagement',
    icon: <FaHandshake className="text-2xl" />,
    title: "Engagement Model",
    description: "Flexible collaboration frameworks tailored to your needs",
    model: "https://novaturetech.com/wp-content/themes/novature/assets/images/engagement_model.jpg",
    approach: "Balanced ownership for agility and transparency",
    benefits: [
      "Dedicated teams",
      "Hybrid models",
      "Outcome-based pricing",
      "Risk-sharing options"
    ]
  },
  {
    id: 'methodology',
    icon: <FaFlask className="text-2xl" />,
    title: "Testing Methodology",
    description: "Proven approaches for quality assurance",
    methods: [
      {
        name: "Traditional Delivery",
        detail: "Phased approach with templates and metrics",
        image: "https://novaturetech.com/wp-content/themes/novature/assets/images/testing_methodology.jpg"
      },
      {
        name: "Agile Delivery",
        items: [
          "Short iterative sprints (1–4 weeks)",
          "Cross-functional, self-organizing teams",
          "Customer involvement throughout"
        ]
      }
    ],
    stats: [
      "40% faster time-to-market",
      "30% cost reduction",
      "99.5% defect detection rate"
    ]
  },
  {
    id: 'tools',
    icon: <FaTools className="text-2xl" />,
    title: "Functional Testing Tools",
    description: "Industry-leading solutions for comprehensive testing",
    categories: [
      {
        type: "Test Management",
        tools: ["HP ALM", "IBM Rational", "Test Director", "Test Link"]
      },
      {
        type: "Bug Tracking",
        tools: ["Bugzilla", "Jira", "Mantis", "Assembla"]
      },
      {
        type: "Automation",
        tools: ["Selenium", "Appium", "Cypress", "Playwright"]
      }
    ],
    partners: [
      "Microsoft",
      "IBM",
      "Oracle",
      "Micro Focus"
    ]
  }
];

const FunctionalTesting = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [expandedView, setExpandedView] = useState(false);

  const activeService = services.find(service => service.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Functional Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive quality assurance solutions tailored to your business requirements
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Our Services</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {services.map((service) => (
                  <li key={service.id}>
                    <button
                      onClick={() => {
                        setActiveTab(service.id);
                        setExpandedView(false);
                      }}
                      className={`w-full text-left p-4 flex items-center space-x-3 ${activeTab === service.id ? 'bg-[var(--light-blue)]/20 text-[var(--secondary-blue)]' : 'hover:bg-gray-50'}`}
                    >
                      <span className="text-[var(--secondary-blue)]">{service.icon}</span>
                      <span>{service.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Service Header */}
              <div className="p-6 md:p-8 border-b border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold text-[var(--primary-blue)] mb-2">
                      {activeService?.title}
                    </h3>
                    <p className="text-gray-600">
                      {activeService?.description}
                    </p>
                  </div>
                  <button 
                    onClick={() => setExpandedView(!expandedView)}
                    className="flex items-center text-[var(--secondary-blue)] font-medium"
                  >
                    {expandedView ? (
                      <>
                        <span>Compact View</span>
                        <FaChevronUp className="ml-2" />
                      </>
                    ) : (
                      <>
                        <span>Detailed View</span>
                        <FaChevronDown className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 md:p-8">
                {expandedView ? (
                  <div className="space-y-8">
                    {/* Expanded View Content */}
                    {activeService?.image && (
                      <img 
                        src={activeService.image} 
                        alt={activeService.title} 
                        className="w-full rounded-lg shadow-md border border-gray-200"
                      />
                    )}

                    {activeService?.features && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                            Core Services
                          </h4>
                          <ul className="space-y-2">
                            {activeService.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {activeService.extras && (
                          <div>
                            <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                              Value-Added Services
                            </h4>
                            <ul className="space-y-2">
                              {activeService.extras.map((extra, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                                  <span>{extra}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeService?.highlights && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Key Highlights
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeService.highlights.map((highlight, i) => (
                            <div key={i} className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                                {highlight.title}
                              </h5>
                              <p className="text-sm mb-2">{highlight.text}</p>
                              {highlight.items && (
                                <ul className="space-y-1 mt-2">
                                  {highlight.items.map((item, j) => (
                                    <li key={j} className="flex items-start">
                                      <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeService?.services && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Service Offerings
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeService.services.map((service, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4">
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-1">
                                {service.name}
                              </h5>
                              <p className="text-sm">{service.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeService?.model && (
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Engagement Model
                        </h4>
                        <p className="text-sm">{activeService.approach}</p>
                        <img 
                          src={activeService.model} 
                          alt="Engagement Model" 
                          className="w-full rounded-lg border border-gray-200 mt-4"
                        />
                        {activeService.benefits && (
                          <div className="mt-4">
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Key Benefits:
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {activeService.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeService?.methods && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Testing Methodologies
                        </h4>
                        <div className="space-y-6">
                          {activeService.methods.map((method, i) => (
                            <div key={i}>
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                                {method.name}
                              </h5>
                              {method.detail && <p className="text-sm mb-3">{method.detail}</p>}
                              {method.image && (
                                <img 
                                  src={method.image} 
                                  alt={method.name} 
                                  className="w-full rounded-lg border border-gray-200 mb-4"
                                />
                              )}
                              {method.items && (
                                <ul className="space-y-2 ml-4">
                                  {method.items.map((item, j) => (
                                    <li key={j} className="flex items-start">
                                      <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>
                        {activeService.stats && (
                          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30 mt-6">
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Performance Metrics
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              {activeService.stats.map((stat, i) => (
                                <li key={i} className="text-center">
                                  <div className="text-2xl font-bold text-[var(--primary-blue)]">
                                    {stat.split(' ')[0]}
                                  </div>
                                  <div className="text-sm mt-1">
                                    {stat.split(' ').slice(1).join(' ')}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeService?.categories && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Tools & Technologies
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeService.categories.map((category, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4">
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                                {category.type}
                              </h5>
                              <ul className="space-y-1">
                                {category.tools.map((tool, j) => (
                                  <li key={j} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                    <span className="text-sm">{tool}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        {activeService.partners && (
                          <div className="mt-6">
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-3">
                              Technology Partners
                            </h5>
                            <div className="flex flex-wrap gap-4">
                              {activeService.partners.map((partner, i) => (
                                <div key={i} className="bg-gray-50 px-4 py-2 rounded-md border border-gray-200">
                                  {partner}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeService?.features && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {activeService.features.slice(0, 6).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeService?.highlights && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Highlights
                        </h4>
                        <ul className="space-y-2">
                          {activeService.highlights.slice(0, 2).map((highlight, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <div>
                                <span className="font-medium">{highlight.title}: </span>
                                <span>{highlight.text}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeService?.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Services
                        </h4>
                        <ul className="space-y-2">
                          {activeService.services.slice(0, 3).map((service, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <div>
                                <span className="font-medium">{service.name}: </span>
                                <span className="text-sm">{service.detail}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeService?.model && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Engagement Approach
                        </h4>
                        <p className="text-sm">{activeService.approach}</p>
                      </div>
                    )}

                    {activeService?.methods && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Methodologies
                        </h4>
                        <ul className="space-y-2">
                          {activeService.methods.slice(0, 2).map((method, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{method.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeService?.categories && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeService.categories[0].tools.slice(0, 4).map((tool, i) => (
                            <span key={i} className="text-sm bg-gray-50 px-3 py-1 rounded-md">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalTesting;