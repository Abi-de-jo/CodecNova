import { useState } from "react";
import { 
  FaChartLine,
  FaSearch,
  FaHandshake,
  FaClipboardList,
  FaCogs,
  FaTools,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

interface FocusArea {
  area: string;
  items: string[];
}

interface ContentWithOverview {
  overview: React.ReactNode;
  focusAreas: FocusArea[];
  image?: string;
}

interface ContentElement {
  content: React.ReactNode;
}

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  content?: ContentWithOverview | ContentElement;
  services?: string[];
  enablers?: string[];
  benefits?: string[];
  models?: Array<{
    name: string;
    description: string;
  }>;
}

const TestProcessConsulting = () => {
  const [activeTab, setActiveTab] = useState('steadyState');
  const [expandedView, setExpandedView] = useState(false);

  const sections: Section[] = [
    {
      id: 'steadyState',
      title: "Testing Organization Steady State",
      icon: <FaChartLine className="text-xl" />,
      description: "Key factors determining testing organization maturity",
      content: {
        overview: (
          <p>
            The key factors that determine maturity of Testing organization are Organization, 
            Operating Model, Testing Process, Testing Methodologies, Tools and Infrastructure.
          </p>
        ),
        focusAreas: [
          {
            area: "Organization",
            items: [
              "Centralized QA organization",
              "Well defined QA organization structure and governance Model",
              "Common pool of testing, domain, technology and tools skills",
              "Internal BA pool for domain/application training"
            ]
          },
          {
            area: "Operating Model",
            items: [
              "Earlier involvement of testing team in project life cycle",
              "Project specific structuring of teams",
              "Flexible inter-group communication model",
              "Resource planning and utilization management"
            ]
          },
          {
            area: "Process",
            items: [
              "Formal review process in testing lifecycle",
              "Processes for effective knowledge management",
              "Formal change management processes",
              "Defect causal analysis & prevention mechanisms",
              "Formal risk identification and mitigation",
              "Standardized templates and guidelines",
              "Measurement framework for testing"
            ]
          },
          {
            area: "Methodologies",
            items: [
              "Focused automation of functional/regression testing",
              "Project estimation using scientific models",
              "Mandatory metrics collection and analysis",
              "Usage of advanced test techniques",
              "Documented requirements traceability"
            ]
          },
          {
            area: "Tools",
            items: [
              "Tool consolidation and centralized license management",
              "Tool based test management and integration",
              "Effective tool utilization"
            ]
          },
          {
            area: "Infrastructure",
            items: [
              "Tool based data preparation and masking",
              "Centralized test data repository",
              "Test Environment Management"
            ]
          }
        ],
        image: "https://novaturetech.com/wp-content/themes/novature/assets/images/test_process_maturity.png"
      }
    },
    {
      id: 'approach',
      title: "Consulting Approach",
      icon: <FaSearch className="text-xl" />,
      description: "Our methodology for assessing and improving test processes",
      content: (
        <div className="space-y-4">
          <p>
            We measure the maturity of your Testing Organization with proven checklists 
            and frameworks, providing a detailed assessment of your current state and 
            building a roadmap to steady state.
          </p>
          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/test_process1.png" 
            alt="Test Process Consulting Approach" 
            className="rounded-lg border border-gray-200 w-full"
          />
        </div>
      )
    },
    {
      id: 'offerings',
      title: "Service Offerings",
      icon: <FaClipboardList className="text-xl" />,
      description: "Comprehensive services in Test Process Consulting",
      services: [
        "Diagnostics & Advisory Services",
        "Test Process Assessment & Recommendations",
        "Test Process Compliance Audit",
        "Roadmap to steady state implementation",
        "Setting up Testing Center of Excellence",
        "Offshoring Testing Efforts"
      ],
      enablers: [
        "Proven Testing Process Maturity Analysis Methodologies",
        "Comprehensive questionnaires for all focus areas",
        "Maturity Review Checklists and Scoring Techniques",
        "Best Practices and Benchmarking",
        "Extensive Fortune 500 company experience",
        "Expertise in building Testing COEs"
      ],
      benefits: [
        "Reduce future testing costs",
        "Improve testing organization efficiency",
        "Enable consistent deliverables and quality",
        "Year-over-year productivity improvements",
        "Resource utilization optimization",
        "Cost savings through test automation",
        "Reduced costs via onsite-offshore model"
      ]
    },
    {
      id: 'engagement',
      title: "Engagement Model",
      icon: <FaHandshake className="text-xl" />,
      description: "Flexible approaches to transform your testing organization",
      models: [
        {
          name: "Assessment 2 Maturity",
          description: "2-3 week Testing Process Assessment to identify current state and create roadmap to steady state"
        },
        {
          name: "Transact 2 Transform",
          description: "Leverage other services while identifying gaps to transform testing excellence"
        }
      ]
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Test Process Consulting
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming your testing organization to achieve maturity and excellence
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
                    {activeSection?.content && 'overview' in activeSection.content && (
                      <div className="space-y-4">
                        {activeSection.content.overview}
                      </div>
                    )}

                    {activeSection?.content && 'focusAreas' in activeSection.content && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Maturity Focus Areas
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-[var(--light-blue)]/20">
                                <th className="p-3 text-left border border-gray-200">Key Focus Areas</th>
                                <th className="p-3 text-left border border-gray-200">Desired State</th>
                              </tr>
                            </thead>
                            <tbody>
                              {activeSection.content.focusAreas.map((area, i) => (
                                <tr key={i} className="border border-gray-200">
                                  <td className="p-3 border border-gray-200 font-medium">
                                    {area.area}
                                  </td>
                                  <td className="p-3 border border-gray-200">
                                    <ul className="space-y-1">
                                      {area.items.map((item, j) => (
                                        <li key={j} className="flex items-start">
                                          <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                        {activeSection.content.image && (
                          <img
                            src={activeSection.content.image}
                            alt="Test Process Maturity"
                            className="rounded-lg border border-gray-200 w-full mt-6"
                          />
                        )}
                      </div>
                    )}

                    {activeSection?.content && 'content' in activeSection.content && (
                      <div className="space-y-4">
                        {activeSection.content.content}
                      </div>
                    )}

                    {activeSection?.services && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Our Service Offerings
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeSection.services.map((service, i) => (
                            <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          <div>
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Key Enablers
                            </h5>
                            <ul className="space-y-2">
                              {activeSection.enablers.map((enabler, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                  <span>{enabler}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                              Key Benefits
                            </h5>
                            <ul className="space-y-2">
                              {activeSection.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeSection?.models && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Engagement Models
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSection.models.map((model, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">
                                {model.name}
                              </h5>
                              <p>{model.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.content?.overview && (
                      <div>
                        {activeSection.content.overview}
                      </div>
                    )}

                    {activeSection?.content?.focusAreas && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Focus Areas
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.content.focusAreas.slice(0, 3).map((area, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{area.area}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.content && typeof activeSection.content === 'object' && !activeSection.content.focusAreas && (
                      <div>
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Service Offerings
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.services.slice(0, 4).map((service, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.models && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Engagement Models
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.models.slice(0, 2).map((model, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{model.name}</span>
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

export default TestProcessConsulting;