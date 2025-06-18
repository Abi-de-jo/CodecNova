import { useState } from "react";
import {
  FaMobileAlt,
  FaSitemap,
  FaCogs,
  FaTools,
  FaBug,
  FaChevronDown,
  FaChevronUp,
   FaListUl
} from "react-icons/fa";

const sections = [
  {
    id: 'overview',
    title: "Mobile Testing Overview",
    icon: <FaMobileAlt className="text-2xl" />,
    description: "Specialized solutions for testing applications across diverse mobile platforms.",
    details: [
      "Android, iOS, Windows, RIM, and more",
      "Device & network coverage planning",
      "Focus on usability, security, performance, and compatibility"
    ],
    stats: [
      "1000+ devices tested",
      "95% defect detection rate",
      "40% faster time-to-market"
    ],
    image: "https://novaturetech.com/wp-content/uploads/mobile-testing-overview.jpg"
  },
  {
    id: 'approach',
    title: "Mobile Testing Approach",
    icon: <FaSitemap className="text-2xl" />,
    description: "A structured phase-wise methodology covering both functional and non-functional areas.",
    image: "https://novaturetech.com/wp-content/themes/novature/assets/images/mobile_test.jpg",
    subSections: [
      {
        title: "Mobile Testing Types",
        items: [
          "Installation and Uninstallation Testing",
          "Network Testing",
          "Interruption Testing",
          "Compatibility Testing",
          "Security Testing",
          "Interface Testing",
          "Performance Testing",
          "Localization Testing",
          "Usability Testing"
        ]
      },
      {
        title: "Emulation vs Devices Testing",
        items: [
          "Emulators simulate mobile behavior, but may lack real-world accuracy",
          "Real devices provide reliable testing for performance and interaction",
          "Hybrid strategy balances cost and accuracy"
        ]
      }
    ]
  },
  {
    id: 'methodology',
    title: "Mobile Test Automation Methodology",
    icon: <FaCogs className="text-2xl" />,
    description: "Structured automation strategy with deliverables across all testing phases.",
    phases: [
      {
        name: "Requirement Analysis",
        activities: "Determine Objectives, Traceability Matrix",
        deliverables: "Automation candidates, Traceability"
      },
      {
        name: "Planning",
        activities: "Tool selection, POC, Test plan",
        deliverables: "Plan, Automation Approach"
      },
      {
        name: "Design",
        activities: "Scripting standards, Framework",
        deliverables: "Scripting Guide, Framework"
      },
      {
        name: "Development",
        activities: "Reusable functions, Test suite",
        deliverables: "Test Automation Suite"
      },
      {
        name: "Execution",
        activities: "Run tests, Report & Metrics",
        deliverables: "Results, Reports, Metrics"
      }
    ]
  },
  {
    id: 'framework',
    title: "RAFT-M Automation Framework",
    icon: <FaTools className="text-2xl" />,
    description: "Reusable Automation Framework for Testing Mobile Applications.",
    features: [
      "Supports Data-Driven Testing",
      "Works with native/web/hybrid apps",
      "Simultaneous multi-device testing",
      "Extensive reporting with screenshots and logs",
      "Open-source compatible, low maintenance"
    ],
    benefits: [
      "Reduces testing time by 50%",
      "Improves test coverage by 30%",
      "Enables CI/CD integration"
    ]
  },
  {
    id: 'tools',
    title: "Mobile Testing Tools",
    icon: <FaBug className="text-2xl" />,
    description: "Comprehensive toolset for all mobile testing needs.",
    categories: [
      {
        name: "Automation Tools",
        items: ["Appium", "Robotium", "Monkey Talk", "HP UFT Mobile"]
      },
      {
        name: "Cloud Testing",
        items: ["Perfecto", "Device Anywhere", "Experitest"]
      },
      {
        name: "Performance",
        items: ["JMeter", "LoadRunner", "NeoLoad"]
      }
    ]
  }
];

const MobileTesting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const activeSection = sections.find(section => section.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Mobile Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive mobile testing solutions ensuring quality across all platforms and devices
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Service Areas</h3>
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
              {/* Section Header */}
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

              {/* Section Content */}
              <div className="p-6 md:p-8">
                {expandedView ? (
                  <div className="space-y-8">
                    {/* Expanded View Content */}
                    {activeSection?.image && (
                      <img 
                        src={activeSection.image} 
                        alt={activeSection.title} 
                        className="w-full rounded-lg shadow-md border border-gray-200"
                      />
                    )}

                    {activeSection?.details && (
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {activeSection.details.map((detail, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        {activeSection.stats && (
                          <div>
                            <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                              Performance Metrics
                            </h4>
                            <ul className="space-y-3">
                              {activeSection.stats.map((stat, i) => (
                                <li key={i} className="flex items-center">
                                  <div className="bg-[var(--light-blue)]/20 text-[var(--secondary-blue)] rounded-lg p-3 mr-4">
                                    <FaListUl />
                                  </div>
                                  <span className="font-medium">{stat}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}

                    {activeSection?.subSections && (
                      <div className="space-y-6">
                        {activeSection.subSections.map((sub, i) => (
                          <div key={i} className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                            <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                              {sub.title}
                            </h4>
                            <ul className="space-y-2">
                              {sub.items.map((item, j) => (
                                <li key={j} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.phases && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Methodology Phases
                        </h4>
                        <div className="overflow-x-auto">
                          <table className="min-w-full border border-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                  Phase
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                  Key Activities
                                </th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">
                                  Deliverables
                                </th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                              {activeSection.phases.map((phase, i) => (
                                <tr key={i}>
                                  <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-200">
                                    {phase.name}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-gray-500 border-r border-gray-200">
                                    {phase.activities}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-gray-500">
                                    {phase.deliverables}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {activeSection?.features && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Framework Features
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2">
                            {activeSection.features.map((feature, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                          {activeSection.benefits && (
                            <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                                Business Benefits
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
                          )}
                        </div>
                      </div>
                    )}

                    {activeSection?.categories && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Testing Tools
                        </h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          {activeSection.categories.map((category, i) => (
                            <div key={i} className="border border-gray-200 rounded-lg p-4">
                              <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">
                                {category.name}
                              </h5>
                              <ul className="space-y-1">
                                {category.items.map((item, j) => (
                                  <li key={j} className="flex items-start">
                                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.details && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Features
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {activeSection.details.slice(0, 4).map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.subSections && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Testing Approach
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.subSections[0].items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.phases && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Phases
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.phases.slice(0, 3).map((phase, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span className="font-medium">{phase.name}: </span>
                              <span className="text-sm">{phase.activities}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.features && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Framework Highlights
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.categories && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Primary Tools
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSection.categories[0].items.slice(0, 4).map((tool, i) => (
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

export default MobileTesting;