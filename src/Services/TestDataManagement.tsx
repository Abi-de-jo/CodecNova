import { useState } from "react";
import { 
  FaDatabase,
  FaChartLine,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const TestDataManagement = () => {
  const [activeTab, setActiveTab] = useState('necessity');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'necessity',
      title: "Necessity of TDM",
      icon: <FaDatabase className="text-xl" />,
      description: "Why holistic test data management is essential",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/td.png",
        alt: "Test Data Management Necessity",
        width: 602,
        height: 249,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/td.png", width: 602 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/td-300x124.png", width: 300 }
        ]
      }
    },
    {
      id: 'weakStrategies',
      title: "Weak TDM Impacts",
      icon: <FaChartLine className="text-xl" />,
      description: "Consequences of poor test data management",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/td1.png",
        alt: "Weak Test Data Management Results",
        width: 602,
        height: 191,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/td1.png", width: 602 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/td1-300x95.png", width: 300 }
        ]
      }
    },
    {
      id: 'framework',
      title: "TDM Framework",
      icon: <FaProjectDiagram className="text-xl" />,
      description: "Our comprehensive methodology for test data management",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/TDM-1024x524.png",
        alt: "TDM Framework Overview",
        width: 1024,
        height: 524,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/TDM-1024x524.png", width: 1024 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/TDM-300x154.png", width: 300 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/TDM-768x393.png", width: 768 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/TDM.png", width: 1285 }
        ]
      }
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Test Data Management
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for effective test data strategies
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
                    <div className="flex justify-center">
                      <img
                        src={activeSection?.image.src}
                        alt={activeSection?.image.alt}
                        width={activeSection?.image.width}
                        height={activeSection?.image.height}
                        className="rounded-lg border border-gray-200 max-w-full h-auto"
                        srcSet={activeSection?.image.srcSet.map(item => `${item.src} ${item.width}w`).join(', ')}
                        sizes="(max-width: 1024px) 100vw, 1024px"
                      />
                    </div>

                    {activeTab === 'necessity' && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Why Holistic Test Data Management Matters
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Ensures comprehensive test coverage across all scenarios</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Maintains data integrity throughout the testing lifecycle</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Reduces test environment setup time significantly</span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {activeTab === 'weakStrategies' && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Consequences of Poor TDM
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Incomplete test coverage leading to production defects</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Increased testing time and costs</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Difficulty in reproducing defects</span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {activeTab === 'framework' && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Our TDM Methodology
                        </h4>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Comprehensive data profiling and analysis</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Automated test data generation and masking</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Centralized test data repository</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                            <span>Version control and refresh strategies</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    <div className="flex justify-center">
                      <img
                        src={activeSection?.image.src}
                        alt={activeSection?.image.alt}
                        width={600}
                        height={Math.round((600 / (activeSection?.image?.width ?? 1)) * (activeSection?.image?.height ?? 1))}
                        className="rounded-lg border border-gray-200 w-full h-auto"
                      />
                    </div>

                    {activeTab === 'necessity' && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Comprehensive test coverage</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Reduced environment setup time</span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {activeTab === 'weakStrategies' && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Risks
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Production defects</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Increased testing costs</span>
                          </li>
                        </ul>
                      </div>
                    )}

                    {activeTab === 'framework' && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Framework Highlights
                        </h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Data profiling</span>
                          </li>
                          <li className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                            <span>Centralized repository</span>
                          </li>
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

export default TestDataManagement;