import { useState } from "react";
import { 
  FaChartLine, 
  FaTools,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const PerformanceTesting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Performance Testing Overview",
      icon: <FaChartLine className="text-xl" />,
      description: "Ensure application speed, stability, and scalability under various load conditions.",
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Faster response time & error-free executions</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Efficient CPU/memory utilization</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
              Key Areas
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Faster response time & error-free executions</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Efficient CPU/memory utilization</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Architecture validation & capacity planning</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Better customer satisfaction and lower costs</span>
              </li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'types',
      title: "Types of Performance Testing",
      icon: <FaChartLine className="text-xl" />,
      description: "Various performance testing types to meet specific reliability and load requirements.",
      image: {
        src: "https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test.jpg",
        alt: "Types of Performance Testing",
        width: 800,
        height: 450
      },
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Load Test – Real-world scalability checks</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Stress Test – Server breaking point</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test.jpg"
                alt="Types of Performance Testing"
                className="rounded-lg border border-gray-200 w-full h-auto"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Load Test – Real-world scalability checks</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Stress Test – Server breaking point</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Volume Test – Heavy data input validation</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Endurance/Soak Test – Stability over time</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Spike Test – Sudden traffic stress handling</span>
              </li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'methodology',
      title: "Testing Methodology",
      icon: <FaChartLine className="text-xl" />,
      description: "Our structured methodology ensures precision through all testing phases.",
      image: {
        src: "https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test_methodology.jpg",
        alt: "Performance Testing Methodology",
        width: 800,
        height: 450
      },
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Requirements Analysis</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Test Plan & Design</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test_methodology.jpg"
                alt="Performance Testing Methodology"
                className="rounded-lg border border-gray-200 w-full h-auto"
              />
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Requirements Analysis</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Test Plan & Design</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Test Scripting</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Test Execution</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Delivery & Optimization</span>
              </li>
            </ul>
            <p className="text-sm italic text-gray-500">
              We use a detailed questionnaire if performance requirements are not clearly defined.
            </p>
          </div>
        )
      }
    },
    {
      id: 'metrics',
      title: "Performance Test Metrics",
      icon: <FaChartLine className="text-xl" />,
      description: "Key metrics help diagnose bottlenecks and drive performance decisions.",
      content: {
        compact: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Client Side</h4>
              <ul className="space-y-1 pl-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-1"></div>
                  <span>Response times</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        detailed: (
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">Client Side</h4>
              <ul className="space-y-2 pl-5">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Running Vusers, Hits/sec, Throughput</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>HTTP status codes, Pages/sec</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Response times, Error stats</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">Server Side</h4>
              <ul className="space-y-2 pl-5">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>CPU, Memory, Disk I/O, Heap</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>JDBC pool, SQL profiling, Cache hits</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">Network</h4>
              <ul className="space-y-2 pl-5">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Bandwidth usage, Delay times, Segment delays</span>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'tools',
      title: "Performance Testing Tools",
      icon: <FaTools className="text-xl" />,
      description: "Expertise in open-source and enterprise-grade performance tools.",
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>JMeter</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Load Runner</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
              Tools We Use
            </h4>
            <ul className="space-y-2 pl-5">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>JMeter</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Load Runner</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>WebLoad</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>BlazeMeter</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>NeoLoad</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>WAPT</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>OpenSTA</span>
              </li>
            </ul>
          </div>
        )
      }
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Performance Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Reliable, scalable, and efficient performance evaluation tailored to your enterprise systems.
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
                  {activeSection?.image && (
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
                  )}
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6 md:p-8">
                {expandedView ? (
                  <div className="space-y-8">
                    {activeSection?.image && (
                      <div className="flex justify-center">
                        <img
                          src={activeSection.image.src}
                          alt={activeSection.image.alt}
                          width={activeSection.image.width}
                          height={activeSection.image.height}
                          className="rounded-lg border border-gray-200 max-w-full h-auto"
                        />
                      </div>
                    )}
                    {activeSection?.content.detailed}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {activeSection?.image && (
                      <div className="flex justify-center">
                        <img
                          src={activeSection.image.src}
                          alt={activeSection.image.alt}
                          width={600}
                          height={Math.round((600 / (activeSection.image?.width ?? 1)) * (activeSection.image?.height ?? 1))}
                          className="rounded-lg border border-gray-200 w-full h-auto"
                        />
                      </div>
                    )}
                    {activeSection?.content.compact}
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

export default PerformanceTesting;