import { useState } from "react";
import {  FaClipboardList, FaCode, FaTools, FaRobot, FaChevronDown, FaChevronUp } from "react-icons/fa";

const TestAutomation = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Test Automation",
      icon: <FaRobot className="text-xl" />,
      description: "Our Center of Excellence for Test Automation focuses on knowledge consolidation, best practices, and innovation.",
      content: (
        <div className="space-y-4">
          <p>
            Novature Tech has a well-established Center of Excellence for Test Automation with proven processes, methodologies, and frameworks.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <h4 className="font-semibold text-[var(--secondary-blue)] mb-2">Key Features:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Consolidated knowledge base</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Proven automation processes</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Innovative frameworks</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Best practice methodologies</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'methodology',
      title: "Test Automation Methodology",
      icon: <FaClipboardList className="text-xl" />,
      description: "Structured approach for effective and efficient test automation implementation.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Automation Process Phases</h4>
              <ul className="space-y-3">
                {[
                  "Requirement Study & Analysis",
                  "Test Planning",
                  "Test Design",
                  "Script Development",
                  "Execution & Reporting"
                ].map((phase, i) => (
                  <li key={i} className="flex">
                    <span className="bg-[var(--secondary-blue)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{phase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Key Benefits</h4>
              <ul className="space-y-2">
                {[
                  "Avoids ad-hoc, non-repeatable test programs",
                  "Ensures design standards compliance",
                  "Provides measurable results",
                  "Reduces testing effort over time",
                  "Improves test coverage"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">Ideal Automation Candidates</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "High Path Frequency",
                  desc: "Critical paths used frequently in production"
                },
                {
                  title: "Critical Business Processes",
                  desc: "Mission-critical operations with high risk"
                },
                {
                  title: "Repetitive Testing",
                  desc: "Tests reused many times across releases"
                },
                {
                  title: "Long Life Span Apps",
                  desc: "Applications with extended lifecycle"
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                  <div>
                    <span className="font-medium">{item.title}: </span>
                    <span className="text-sm">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/test_planning.jpg" 
            alt="Test Planning Process" 
            className="w-full rounded-lg border border-gray-200 mt-4"
          />
        </div>
      )
    },
    {
      id: 'frameworks',
      title: "Test Automation Frameworks",
      icon: <FaCode className="text-xl" />,
      description: "Simplified scripting through reusability with complete end-to-end automation solutions.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Framework Principles</h4>
              <ul className="space-y-2">
                {[
                  "Application-independent components",
                  "Easy to expand and maintain",
                  "Highly modular architecture",
                  "Reusable function libraries",
                  "Isolated test scripts from AUT"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Key Features</h4>
              <ul className="space-y-2">
                {[
                  "Reusability",
                  "Maintainability",
                  "Flexibility",
                  "Reliability",
                  "Robustness",
                  "Portability"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/data_layer.jpg" 
            alt="Framework Architecture" 
            className="w-full rounded-lg border border-gray-200"
          />

          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <h5 className="font-semibold text-[var(--secondary-blue)] mb-2">RAFT-Web Framework</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Ready-to-use reduces script development time",
                "Enables easy migration to open source",
                "Reduces future testing costs",
                "Supports Data Driven Testing",
                "Detailed reporting with screenshots",
                "Higher ROI through automation"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/test-auto.png" 
            alt="RAFT-Web Architecture" 
            className="w-full rounded-lg border border-gray-200"
          />
        </div>
      )
    },
    {
      id: 'tools',
      title: "Test Automation Tools",
      icon: <FaTools className="text-xl" />,
      description: "Expertise in leading automation tools with focus on open-source solutions.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Our Approach</h4>
              <p>
                We specialize in implementing open-source tools like Selenium to achieve cost-effective automation without compromising quality.
              </p>
              <div className="mt-4">
                <h5 className="font-medium text-[var(--secondary-blue)] mb-1">Migration Services</h5>
                <p className="text-sm">
                  We help organizations migrate test suites from licensed tools to open-source using our RAFT-Web framework.
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">Tool Expertise</h4>
              <ul className="space-y-2">
                {[
                  "Selenium (Primary focus)",
                  "HP UFT (QTP)",
                  "IBM Rational Functional Tester",
                  "Silk Test",
                  "Appium for mobile"
                ].map((tool, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <img 
            src="https://novaturetech.com/wp-content/uploads/2016/11/our-market-place-tool-expertise.png" 
            alt="Tool Expertise" 
            className="w-full rounded-lg border border-gray-200"
          />
        </div>
      )
    }
  ];

  const activeSection = sections.find(section => section.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Test Automation Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation solutions to accelerate testing and improve quality
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
                    {expandedView ? "Compact View" : "Detailed View"}
                    {expandedView ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>

              {/* Section Content */}
              <div className="p-6 md:p-8">
                {expandedView ? (
                  <div className="space-y-8">
                    {activeSection?.content}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.id === 'overview' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Center of Excellence",
                          "Knowledge consolidation",
                          "Proven processes",
                          "Innovative frameworks"
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.id === 'methodology' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "5-phase methodology",
                          "Avoids ad-hoc testing",
                          "Ideal candidate analysis",
                          "Measurable results"
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.id === 'frameworks' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Application-independent",
                          "Modular architecture",
                          "RAFT-Web framework",
                          "Data Driven Testing"
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.id === 'tools' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "Open-source focus",
                          "Selenium expertise",
                          "Tool migration services",
                          "Licensed tool experience"
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
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

export default TestAutomation;