import { useState } from "react";
import { 
  FaBusinessTime,
  FaMicrochip,
  FaShieldAlt,
  FaTachometerAlt,
  FaExchangeAlt,
  FaPlug,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const NonFunctionalTesting = () => {
  const [activeTab, setActiveTab] = useState('business');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'business',
      title: "Business Facing Tests",
      icon: <FaBusinessTime className="text-xl" />,
      description: "Testing focused on end-user experience and business scenarios",
      content: {
        overview: (
          <p>
            Business Facing Tests are carried out to ensure the end user experience on the Application under Test. 
            These tests validate real-world usage scenarios and user interactions.
          </p>
        ),
        types: [
          {
            title: "Scenario Testing",
            description: "Exaggeration or mimic of real time scenarios requiring business user coordination",
            details: [
              "Uses 'soap opera testing' technique - exaggerated real-life scenarios",
              "Tests system from end-to-end perspective",
              "Ensures both data and flow are realistic",
              "Uses flow diagrams and visual aids for test design"
            ]
          },
          {
            title: "Exploratory Testing",
            description: "Sophisticated, thoughtful approach to testing without scripts",
            details: [
              "Combines learning, test design, and execution",
              "Based on risk analysis, models, past experience",
              "Requires test design skills, careful observation, critical thinking",
              "Uses session-based testing for accountability"
            ],
            principles: [
              "Risk analysis of critical customer concerns",
              "Mental models of expected behavior",
              "Past experience with similar systems",
              "Developer input about important features",
              "Continuous learning during testing"
            ]
          },
          {
            title: "Usability Testing",
            description: "Ensures optimal user experience and interface design",
            aspects: [
              "Easy access to information",
              "Intuitive navigation",
              "Efficient information presentation",
              "Good look and feel",
              "Simple transaction flows",
              "Accommodates all user skill levels"
            ],
            methods: [
              {
                name: "User Needs & Persona Testing",
                detail: "Evaluates interface for different user types (novice, intermediate, expert)"
              },
              {
                name: "Navigation Testing",
                detail: "Validates link functionality and logical tabbing order"
              },
              {
                name: "Competitive Analysis",
                detail: "Compares with similar applications for usability benchmarks"
              }
            ]
          }
        ]
      }
    },
    {
      id: 'technology',
      title: "Technology Facing Tests",
      icon: <FaMicrochip className="text-xl" />,
      description: "Validation of technical aspects like performance, security, and reliability",
      content: {
        overview: (
          <p>
            Technology facing Tests include validation of configuration, security, performance, 
            memory management, reliability, interoperability, scalability, recovery, and data conversion.
          </p>
        ),
        ilities: [
          {
            title: "Security Testing",
            icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
            description: "Validates authentication, authorization, and data protection",
            aspects: [
              "Confidentiality and integrity verification",
              "Non-repudiation guarantees",
              "Vulnerability assessment",
              "Penetration testing"
            ]
          },
          {
            title: "Performance Testing",
            icon: <FaTachometerAlt className="text-[var(--secondary-blue)]" />,
            description: "Evaluates system responsiveness and stability under load",
            types: [
              "Load Testing - Determines scalability under real-world scenarios",
              "Stress Testing - Identifies system breaking points",
              "Volume Testing - Evaluates high data volume handling",
              "Endurance Testing - Checks long-term stability",
              "Spike Testing - Validates sudden load increases"
            ]
          },
          {
            title: "Interoperability Testing",
            icon: <FaExchangeAlt className="text-[var(--secondary-blue)]" />,
            description: "Validates system collaboration capabilities",
            focus: "End-to-end functionality between communicating systems"
          },
          {
            title: "Compatibility Testing",
            icon: <FaPlug className="text-[var(--secondary-blue)]" />,
            description: "Ensures consistent operation across environments",
            scope: [
              "Browser/OS combinations for web apps",
              "Supported versions for enterprise apps",
              "Device compatibility for mobile apps"
            ]
          }
        ],
        webServices: {
          overview: (
            <div>
              <p>SOA (Service Oriented Architecture) uses web services with technologies like:</p>
              <ul className="grid grid-cols-2 gap-2 mt-2">
                {["XML", "WSDL", "REST", "SOAP", "UDDI"].map((tech, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          ),
          principles: [
            "Standardized service contracts",
            "Service loose coupling",
            "Service abstraction",
            "Service reusability",
            "Service autonomy",
            "Service statelessness"
          ],
          testingApproach: [
            {
              level: "Service-component-level",
              detail: "Tester-developer collaboration during development"
            },
            {
              level: "Service-level",
              detail: "Component integration and cross-project validation"
            },
            {
              level: "Integration-level",
              detail: "Production environment testing with UAT credentials"
            },
            {
              level: "Process/Orchestration-level",
              detail: "Business logic, sequencing, and exception handling"
            }
          ]
        }
      }
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Non-Functional Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive validation of system qualities beyond functional requirements
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Categories</h3>
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
                    {activeSection?.content.overview && (
                      <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                        {activeSection.content.overview}
                      </div>
                    )}

                    {activeSection?.content.types && (
                      <div className="space-y-8">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Testing Types
                        </h4>
                        {activeSection.content.types.map((type, i) => (
                          <div key={i} className="space-y-4">
                            <h5 className="text-lg font-semibold text-[var(--secondary-blue)]">
                              {type.title}
                            </h5>
                            <p>{type.description}</p>
                            
                            {type.details && (
                              <ul className="space-y-2 ml-4">
                                {type.details.map((detail, j) => (
                                  <li key={j} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            )}

                            {type.principles && (
                              <div className="mt-4">
                                <h6 className="font-medium text-[var(--primary-blue)] mb-2">
                                  Key Principles:
                                </h6>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                  {type.principles.map((principle, k) => (
                                    <li key={k} className="flex items-start">
                                      <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                                      <span>{principle}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {type.methods && (
                              <div className="mt-4 grid md:grid-cols-2 gap-4">
                                {type.methods.map((method, l) => (
                                  <div key={l} className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm">
                                    <h6 className="font-medium text-[var(--secondary-blue)]">{method.name}</h6>
                                    <p className="text-sm mt-1">{method.detail}</p>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.content.ilities && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          "Ility" Testing
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSection.content.ilities.map((ility, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="flex items-center space-x-3 mb-3">
                                {ility.icon}
                                <h5 className="text-lg font-semibold text-[var(--secondary-blue)]">
                                  {ility.title}
                                </h5>
                              </div>
                              <p>{ility.description}</p>
                              
                              {ility.aspects && (
                                <ul className="mt-3 space-y-1">
                                  {ility.aspects.map((aspect, j) => (
                                    <li key={j} className="flex items-start text-sm">
                                      <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                      <span>{aspect}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}

                              {ility.types && (
                                <div className="mt-3">
                                  <h6 className="font-medium text-[var(--primary-blue)] mb-1">
                                    Testing Types:
                                  </h6>
                                  <ul className="space-y-1">
                                    {ility.types.map((type, k) => (
                                      <li key={k} className="flex items-start text-sm">
                                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                                        <span>{type}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.content.webServices && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Web Services Testing
                        </h4>
                        
                        <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                          {activeSection.content.webServices.overview}
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Key Principles
                            </h5>
                            <ul className="space-y-2">
                              {activeSection.content.webServices.principles.slice(0, 6).map((principle, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                  <span>{principle}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Testing Approach
                            </h5>
                            <ul className="space-y-3">
                              {activeSection.content.webServices.testingApproach.map((approach, i) => (
                                <li key={i} className="flex">
                                  <span className="bg-[var(--secondary-blue)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                                    {i + 1}
                                  </span>
                                  <div>
                                    <span className="font-medium">{approach.level}: </span>
                                    <span className="text-sm">{approach.detail}</span>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                          <img 
                            src="https://novaturetech.com/wp-content/themes/novature/assets/images/non_fun.png" 
                            alt="Non-functional testing diagram" 
                            className="rounded-lg border border-gray-200"
                          />
                          <img 
                            src="https://novaturetech.com/wp-content/themes/novature/assets/images/non_fun1.png" 
                            alt="REST methods diagram" 
                            className="rounded-lg border border-gray-200"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.content.overview && (
                      <div>
                        {activeSection.content.overview}
                      </div>
                    )}

                    {activeSection?.content.types && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Testing Types
                        </h4>
                        <ul className="space-y-3">
                          {activeSection.content.types.slice(0, 3).map((type, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <div>
                                <span className="font-medium">{type.title}: </span>
                                <span className="text-sm">{type.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.content.ilities && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Critical "Ilities"
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSection.content.ilities.slice(0, 4).map((ility, i) => (
                            <span key={i} className="bg-gray-50 px-3 py-1 rounded-md text-sm">
                              {ility.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.content.webServices && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Web Services
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.content.webServices.testingApproach.slice(0, 3).map((approach, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{approach.level}</span>
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

export default NonFunctionalTesting;