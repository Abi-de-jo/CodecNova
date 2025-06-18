import { useState } from "react";
import { 
  FaShieldAlt,
  FaKey,
  FaNetworkWired,
  FaGlobe,
  FaMobile,
  FaDatabase,
  FaSitemap,
  FaWifi,
  FaPlug,
  FaFileCode,
  FaSearch,
  FaChartLine,
  FaFileAlt,
  FaCheckCircle,
  FaTools,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";
import { FaListCheck } from "react-icons/fa6";

const SecurityTesting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Security Testing",
      icon: <FaShieldAlt className="text-xl" />,
      description: "Protecting your digital assets from modern threats and vulnerabilities",
      content: (
        <div className="space-y-4">
          <p>
            The problem of insecure software is perhaps the most important technical challenge of our time. 
            The dramatic rise of web applications and mobile applications enabling business and social networking 
            has compounded the requirements to establish robust security measures.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <p>
              At our Security Testing Centre of Excellence, we serve as trusted advisors by securing 
              information and operational IT assets. Our approach combines real-world business expertise 
              with pragmatic, cost-effective solutions.
            </p>
            <p className="mt-2 font-medium text-[var(--secondary-blue)]">
              "YOU FOCUS ON YOUR CORE BUSINESS, WE WILL TAKE CARE OF THE IT SECURITY"
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'parameters',
      title: "Security Parameters",
      icon: <FaListCheck className="text-xl" />,
      description: "Key aspects we validate in security testing",
      parameters: [
        {
          name: "Confidentiality",
          icon: <FaKey className="text-[var(--secondary-blue)]" />,
          description: "Protection of private data or information"
        },
        {
          name: "Integrity",
          icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
          description: "Ensuring information is trusted and verified"
        },
        {
          name: "Authentication",
          icon: <FaKey className="text-[var(--secondary-blue)]" />,
          description: "Verifying user identities"
        },
        {
          name: "Authorization",
          icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
          description: "Proper privilege limitation"
        },
        {
          name: "Availability",
          icon: <FaCheckCircle className="text-[var(--secondary-blue)]" />,
          description: "Preventing service disruption"
        },
        {
          name: "Non-repudiation",
          icon: <FaFileAlt className="text-[var(--secondary-blue)]" />,
          description: "Maintaining verifiable event records"
        }
      ]
    },
    {
      id: 'enablers',
      title: "Our Key Enablers",
      icon: <FaKey className="text-xl" />,
      description: "What makes our security testing services exceptional",
      benefits: [
        "Experienced and Certified consultants",
        "In-depth technical know-how",
        "Standards-based approach with best practices",
        "Focus on international quality standards",
        "Comprehensive metrics framework",
        "Combination of automated and manual testing",
        "Effective utilization of security tools"
      ]
    },
    {
      id: 'offerings',
      title: "Testing Offerings",
      icon: <FaTools className="text-xl" />,
      description: "Comprehensive security testing services we provide",
      services: [
        {
          name: "Network Penetration Testing",
          icon: <FaNetworkWired className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/network_testing.png",
          description: "Reveals real-world opportunities for intruders to compromise systems and networks",
          types: ["Internal Penetration Test", "External Penetration Test"]
        },
        {
          name: "Web Application Testing",
          icon: <FaGlobe className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/web_application.png",
          description: "Identifies vulnerabilities in web applications with our extensive experience"
        },
        {
          name: "Mobile Application Testing",
          icon: <FaMobile className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/mobile_application.png",
          description: "Ensures security on mobile devices through emulator and real device testing"
        },
        {
          name: "Database Testing",
          icon: <FaDatabase className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/database_icon.png",
          description: "Protects your most sensitive data from internal and external threats"
        },
        {
          name: "SAP Testing",
          icon: <FaSitemap className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/sap_icon.png",
          description: "Identifies vulnerabilities in SAP platforms at OS, database and network levels"
        },
        {
          name: "Wireless Testing",
          icon: <FaWifi className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/wireless_testing.png",
          description: "Evaluates security of wireless communications including WIFI, Bluetooth, Zigbee"
        },
        {
          name: "IoT Testing",
          icon: <FaPlug className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/iot_icon.png",
          description: "Comprehensive security for embedded software, data, mobile apps and cloud"
        },
        {
          name: "Source Code Review",
          icon: <FaFileCode className="text-2xl" />,
          image: "https://novaturetech.com/wp-content/themes/novature/assets/images/sourcecode.png",
          description: "Detects vulnerabilities in application code including XSS, SQL Injection"
        }
      ]
    },
    {
      id: 'methodology',
      title: "Testing Methodology",
      icon: <FaSearch className="text-xl" />,
      description: "Our proven approach to security testing",
      standards: [
        "OWASP (Open Web Application Security Project)",
        "SANS 25 (Private Institute of USA)",
        "NIST (National Institute of Standards and Technology)",
        "PTES (Penetration Testing Execution Standards)"
      ],
      phases: [
        {
          name: "Information Gathering",
          icon: <FaSearch className="text-[var(--secondary-blue)]" />,
          description: "Performing reconnaissance to gather maximum target information"
        },
        {
          name: "Scanning",
          icon: <FaChartLine className="text-[var(--secondary-blue)]" />,
          description: "Identifying security vulnerabilities and open ports"
        },
        {
          name: "OWASP ASVS Test",
          icon: <FaListCheck className="text-[var(--secondary-blue)]" />,
          description: "Manual security testing using OWASP checklist"
        },
        {
          name: "Exploit",
          icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
          description: "Establishing access by bypassing security restrictions"
        },
        {
          name: "Report",
          icon: <FaFileAlt className="text-[var(--secondary-blue)]" />,
          description: "Detailed documentation of findings and recommendations"
        },
        {
          name: "ReTest",
          icon: <FaCheckCircle className="text-[var(--secondary-blue)]" />,
          description: "Verifying fixes for reported vulnerabilities"
        },
        {
          name: "Certification",
          icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
          description: "Issuing security certification after successful testing"
        }
      ],
      tools: {
        licensed: ["Burp Suite Pro", "Acunetix"],
        openSource: ["OWASP ZAP", "Nmap", "Kali Linux Tools", "Metasploit Framework"]
      },
      processImage: "https://novaturetech.com/wp-content/themes/novature/assets/images/penetration_process.jpg"
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Security Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection for your digital assets against modern threats
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Sections</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        setActiveTab(section.id);
                        setExpandedView(false);
                      }}
                      className={`w-full text-left p-4 flex items-center space-x-3 ${activeTab === section.id ? 'bg-[var(--light-blue)]/20 text-[var(--secondary-blue)]' : 'hover:bg-gray-50'}`}
                    >
                      <span className="text-[var(--secondary-blue)]">{section.icon}</span>
                      <span>{section.title}</span>
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
                      {activeSection?.title}
                    </h3>
                    <p className="text-gray-600">
                      {activeSection?.description}
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
                    {activeSection?.content && (
                      <div className="space-y-4">
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.parameters && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Security Testing Parameters
                        </h4>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeSection.parameters.map((param, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                              <div className="mt-1">
                                {param.icon}
                              </div>
                              <div>
                                <h5 className="font-bold text-[var(--secondary-blue)]">{param.name}</h5>
                                <p className="text-sm">{param.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Our Key Differentiators
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeSection.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div className="space-y-8">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Security Testing Offerings
                        </h4>
                        <div className="space-y-6">
                          {activeSection.services.map((service, i) => (
                            <div key={i} className="space-y-4">
                              <div className="flex items-center space-x-3">
                                {service.icon}
                                <h5 className="text-lg font-semibold text-[var(--secondary-blue)]">
                                  {service.name}
                                </h5>
                              </div>
                              <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/3">
                                  <img 
                                    src={service.image} 
                                    alt={service.name} 
                                    className="rounded-lg border border-gray-200 w-full"
                                  />
                                </div>
                                <div className="md:w-2/3">
                                  <p>{service.description}</p>
                                  {service.types && (
                                    <div className="mt-2">
                                      <h6 className="font-medium text-[var(--primary-blue)] mb-1">
                                        Testing Types:
                                      </h6>
                                      <ul className="space-y-1">
                                        {service.types.map((type, j) => (
                                          <li key={j} className="flex items-start">
                                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                            <span>{type}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.standards && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Testing Methodology & Standards
                        </h4>
                        <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                          <p>
                            We follow industry-standard frameworks to audit and discover vulnerabilities 
                            in target applications and hosts:
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                            {activeSection.standards.map((standard, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{standard}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mt-6">
                          <h5 className="text-lg font-semibold text-[var(--secondary-blue)] mb-4">
                            Our Penetration Testing Process
                          </h5>
                          <img 
                            src={activeSection.processImage} 
                            alt="Penetration testing process" 
                            className="rounded-lg border border-gray-200 w-full mb-6"
                          />
                          <div className="grid md:grid-cols-2 gap-6">
                            {activeSection.phases.map((phase, i) => (
                              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                                <div className="mt-1">
                                  {phase.icon}
                                </div>
                                <div>
                                  <h6 className="font-bold text-[var(--secondary-blue)]">{phase.name}</h6>
                                  <p className="text-sm mt-1">{phase.description}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-6 grid md:grid-cols-2 gap-6">
                          <div>
                            <h6 className="font-semibold text-[var(--primary-blue)] mb-2">
                              Licensed Tools
                            </h6>
                            <ul className="space-y-1">
                              {activeSection.tools.licensed.map((tool, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                  <span>{tool}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h6 className="font-semibold text-[var(--primary-blue)] mb-2">
                              Open Source Tools
                            </h6>
                            <ul className="space-y-1">
                              {activeSection.tools.openSource.map((tool, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                                  <span>{tool}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.content && (
                      <div>
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.parameters && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Parameters
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSection.parameters.slice(0, 6).map((param, i) => (
                            <span key={i} className="bg-gray-50 px-3 py-1 rounded-md text-sm">
                              {param.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.benefits.slice(0, 4).map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Testing Services
                        </h4>
                        <ul className="space-y-3">
                          {activeSection.services.slice(0, 4).map((service, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{service.name}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.standards && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Methodology
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.standards.slice(0, 2).map((standard, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{standard}</span>
                            </li>
                          ))}
                        </ul>
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

export default SecurityTesting;