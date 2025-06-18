import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaUsers, FaCode, FaChartLine, FaRobot } from "react-icons/fa";

const AgileTesting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Agile Delivery Model – An Overview",
      icon: <FaChartLine className="text-xl" />,
      description: "Principles for software development through collaborative effort of self-organizing teams.",
      content: (
        <div className="space-y-4">
          <p>
            Agile software development describes a set of principles for software development under which requirements and solutions evolve through the collaborative effort of self-organizing cross-functional teams.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <h4 className="font-semibold text-[var(--secondary-blue)] mb-2">Key Characteristics:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Iterative development with 1-4 week sprints</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Cross-functional teams with customer representatives</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Emphasis on face-to-face communication</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Working software as primary measure of progress</span>
              </li>
            </ul>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Team Structure</h5>
              <ul className="space-y-2">
                <li>Small teams (5-9 people)</li>
                <li>Cross-functional members</li>
                <li>Single open office setup</li>
                <li>Customer representative always present</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Process Benefits</h5>
              <ul className="space-y-2">
                <li>Frequent inspection and adaptation</li>
                <li>Accommodates change within lifecycle</li>
                <li>Aligns development with customer needs</li>
                <li>Minimal long-term planning</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: "Agile Delivery Team",
      icon: <FaUsers className="text-xl" />,
      description: "Structure and responsibilities of agile delivery teams.",
      image: "https://novaturetech.com/wp-content/themes/novature/assets/images/concept_team.jpg",
      content: (
        <div className="space-y-6">
          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/concept_team.jpg" 
            alt="Agile Delivery Team" 
            className="w-full rounded-lg border border-gray-200"
          />
          <p>
            The Agile Delivery teams are broadly classified into 3 major teams: Concept team, Delivery team and SIT Team, supported by Architecture and PMO teams.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "Concept Team",
                description: "Creates stories and works with Business team to prepare requirements",
                color: "bg-blue-100 text-blue-800"
              },
              {
                title: "Delivery Team",
                description: "Implements stories with developers, testers and scrum master",
                color: "bg-green-100 text-green-800"
              },
              {
                title: "SIT Team",
                description: "Validates integration between components and systems",
                color: "bg-purple-100 text-purple-800"
              }
            ].map((team, i) => (
              <div key={i} className={`p-4 rounded-lg ${team.color}`}>
                <h5 className="font-bold mb-1">{team.title}</h5>
                <p className="text-sm">{team.description}</p>
              </div>
            ))}
          </div>
          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/agile_team.jpg" 
            alt="Agile Team Flow" 
            className="w-full rounded-lg border border-gray-200 mt-4"
          />
        </div>
      )
    },
    {
      id: 'quadrants',
      title: "Agile Testing Quadrants",
      icon: <FaCode className="text-xl" />,
      description: "Framework for comprehensive testing in agile environments.",
      image: "https://novaturetech.com/wp-content/themes/novature/assets/images/business_facing.jpg",
      content: (
        <div className="space-y-6">
          <img 
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/business_facing.jpg" 
            alt="Agile Testing Quadrants" 
            className="w-full rounded-lg border border-gray-200"
          />
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Tests That Support the Team</h5>
              <p>
                Quadrants 1 and 2 include tests that support the team as it develops the product, representing test driven development (TDD).
              </p>
              <div className="mt-4">
                <h6 className="font-medium text-[var(--secondary-blue)] mb-1">Unit Testing – Q1</h6>
                <p className="text-sm">
                  Validates technical components work as expected through automated tests written in the same language as the application.
                </p>
              </div>
              <div className="mt-3">
                <h6 className="font-medium text-[var(--secondary-blue)] mb-1">Functional Testing – Q2</h6>
                <p className="text-sm">
                  Validates user stories meet acceptance criteria through positive and negative path testing.
                </p>
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Tests That Critique the Product</h5>
              <p>
                Quadrants 3 and 4 provide constructive feedback about the product from an external perspective.
              </p>
              <div className="mt-4">
                <h6 className="font-medium text-[var(--secondary-blue)] mb-1">System Integration Testing – Q3</h6>
                <p className="text-sm">
                  Validates business aspects through regression and exploratory testing by independent teams.
                </p>
              </div>
              <div className="mt-3">
                <h6 className="font-medium text-[var(--secondary-blue)] mb-1">Non-Functional Testing – Q4</h6>
                <p className="text-sm">
                  Validates performance, security and compatibility through technology-facing tests.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30 mt-4">
            <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Testing Types in SIT</h5>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Security and Access Control Testing",
                "Failover and Recovery Testing",
                "Configuration/Compatibility Testing",
                "Performance Testing (Load, Stress, Volume)",
                "Regression Testing",
                "Integration Testing"
              ].map((item, i) => (
                <div key={i} className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'automation',
      title: "System Test Automation",
      icon: <FaRobot className="text-xl" />,
      description: "Strategies for implementing test automation in agile environments.",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Reasons to Automate</h5>
              <ul className="space-y-2">
                {[
                  "Manual Testing takes too long",
                  "Huge Time & effort savings",
                  "Reduce error prone Testing",
                  "Free up testers for other tests",
                  "Provides safety net",
                  "Early and frequent feedback",
                  "Creates documentation",
                  "Reduces future testing costs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Common Challenges</h5>
              <ul className="space-y-2">
                {[
                  "Lack of clear goals",
                  "Resistance to change",
                  "Learning curve",
                  "High initial investment",
                  "Script creation time",
                  "Frequent code changes",
                  "Legacy code issues",
                  "Old habits die hard"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30 mt-4">
            <h5 className="font-semibold text-[var(--primary-blue)] mb-2">Automation Process</h5>
            <div className="space-y-4">
              <p>
                SIT team maintains both manual and automated regression test suites, updating them at the end of each sprint based on new test cases from the Delivery Testing team.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  {
                    step: "1. Test Case Creation",
                    desc: "Delivery team prepares test cases for each sprint"
                  },
                  {
                    step: "2. Suite Update",
                    desc: "SIT updates manual regression suite with new cases"
                  },
                  {
                    step: "3. Automation",
                    desc: "SIT updates automated suite based on manual tests"
                  },
                  {
                    step: "4. Delivery",
                    desc: "Automated suite delivered back to Delivery team"
                  },
                  {
                    step: "5. Execution",
                    desc: "Run before sprint testing to validate impacts"
                  },
                  {
                    step: "6. Maintenance",
                    desc: "Continuous improvement of test suites"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-3 rounded-lg border border-gray-200">
                    <h6 className="font-medium text-[var(--secondary-blue)]">{item.step}</h6>
                    <p className="text-sm mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
            Agile Testing Methodology
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive testing approaches aligned with agile development principles
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Agile Testing</h3>
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
                    {activeSection?.content}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.image && (
                      <img 
                        src={activeSection.image} 
                        alt={activeSection.title} 
                        className="w-full rounded-lg border border-gray-200 mb-4"
                      />
                    )}
                    
                    {activeSection?.id === 'overview' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Team Structure</h4>
                          <ul className="space-y-1">
                            {[
                              "Small cross-functional teams",
                              "Customer representative always present",
                              "Single open office setup",
                              "5-9 members per team"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Process Benefits</h4>
                          <ul className="space-y-1">
                            {[
                              "1-4 week sprints",
                              "Frequent inspection",
                              "Accommodates change",
                              "Working software focus"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeSection?.id === 'team' && (
                      <div className="grid md:grid-cols-3 gap-4">
                        {[
                          "Concept Team creates stories",
                          "Delivery Team implements",
                          "SIT Team validates integration"
                        ].map((item, i) => (
                          <div key={i} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                            <p className="text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {activeSection?.id === 'quadrants' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Support Tests</h4>
                          <ul className="space-y-1">
                            {[
                              "Unit Testing (Q1)",
                              "Functional Testing (Q2)"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Critique Tests</h4>
                          <ul className="space-y-1">
                            {[
                              "System Integration (Q3)",
                              "Non-Functional (Q4)"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                    {activeSection?.id === 'automation' && (
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Benefits</h4>
                          <ul className="space-y-1">
                            {[
                              "Time savings",
                              "Reduced errors",
                              "Early feedback"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Process</h4>
                          <ul className="space-y-1">
                            {[
                              "Suite updates each sprint",
                              "Delivery team creates cases",
                              "SIT maintains automation"
                            ].map((item, i) => (
                              <li key={i} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
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

export default AgileTesting;