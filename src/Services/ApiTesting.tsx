import { useState } from "react";
import { 
  FaQuestionCircle,
  FaChartLine,
  FaTools,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const ApiTesting = () => {
  const [activeTab, setActiveTab] = useState('whyApiTesting');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'whyApiTesting',
      title: "Why API Testing",
      icon: <FaQuestionCircle className="text-xl" />,
      description: "Understanding the importance of API testing",
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Tests application programming interfaces directly</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Critical for automation with short release cycles</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Validates processing at message layer</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>API testing is a type of software testing that involves testing application programming interfaces (APIs) directly and as part of integration testing to determine if they meet expectations for functionality.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Since APIs lack a GUI, API testing is performed at the message layer. API testing is now considered critical for automating testing because APIs now serve as the primary interface to application logic.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>API Testing supports validation of Functional Testing but does not replace it. API Testing does not cover the complete Functional Testing which covers business scenarios.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Compared with GUI testing, API testing provides several key benefits, improving test coverage and resulting in faster, more efficient releases.</span>
              </li>
            </ul>
          </div>
        )
      }
    },
    {
      id: 'benefits',
      title: "Benefits of API Testing",
      icon: <FaChartLine className="text-xl" />,
      description: "Advantages over traditional testing approaches",
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Tests core functionality without UI</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Language-independent (XML/JSON)</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>80% time savings vs GUI testing</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-4">
            <ol className="space-y-4 list-decimal pl-5">
              <li className="pl-2">
                <span className="font-semibold">Test for Core Functionality:</span> One of the key benefits of API Testing is access to the application without a user interface. Testing the core, code-level functionality provides an early evaluation of its overall build strength before running GUI tests.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Language-Independent:</span> In an API Test, data is exchanged using XML or JSON. These transfer modes are completely language-independent, allowing selection of any core language when pursuing automated testing services.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Time Effective:</span> API Testing is far less time consuming than functional GUI testing. In GUI testing, webpage elements must be polled, which slows down testing. APIs can achieve 80% time savings to validate core functionality.
              </li>
              <li className="pl-2">
                <span className="font-semibold">Easy Integration with GUI:</span> With API Testing, highly integratable tests are possible. This is especially beneficial if functional GUI tests are executed following API testing.
              </li>
            </ol>
          </div>
        )
      }
    },
    {
      id: 'tools',
      title: "API Testing Tools",
      icon: <FaTools className="text-xl" />,
      description: "Popular tools for API test automation",
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>REST (80% of APIs) vs SOAP</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>SoapUI, Postman, Rest Assured</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-lg mb-2">Analysis</h4>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">
                  There are 2 types of APIs widely used: SOAP (Simple Object Access Protocol) and REST (Representational state transfer) but about 80% of APIs are of type REST.
                </li>
                <li className="list-disc">
                  REST APIs are HTTP-based web services that adhere to REST architectural constraints. These days, systems that talk to each other over the web mostly use REST APIs.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2">Tools Selection</h4>
              <ul className="space-y-2 pl-5">
                <li className="list-disc">
                  With emerging trends and technologies, many automation tools are available. Tool evaluation is critical for selecting the right automation tool.
                  <ul className="mt-2 space-y-2 pl-5">
                    <li className="list-disc">SoapUI</li>
                    <li className="list-disc">Postman</li>
                    <li className="list-disc">Rest Assured</li>
                    <li className="list-disc">Fiddler</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'framework',
      title: "API Test Framework",
      icon: <FaProjectDiagram className="text-xl" />,
      description: "Our comprehensive API testing framework",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/api-test-automation-framework.png",
        alt: "API Test Automation Framework",
        width: 520,
        height: 577,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/api-test-automation-framework.png", width: 520 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/api-test-automation-framework-270x300.png", width: 270 }
        ]
      },
      content: {
        compact: (
          <ul className="space-y-2">
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Rest Assured for REST API testing</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Cucumber for BDD approach</span>
            </li>
            <li className="flex items-start">
              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
              <span>Jenkins for CI/CD integration</span>
            </li>
          </ul>
        ),
        detailed: (
          <div className="space-y-6">
            <div className="flex justify-center">
              <img
                src="https://novaturetech.com/wp-content/uploads/2019/10/api-test-automation-framework.png"
                alt="API Test Automation Framework"
                width={520}
                height={577}
                className="rounded-lg border border-gray-200 max-w-full h-auto"
              />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-3">Framework Components:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Rest Assured:</b> Java DSL for writing powerful, maintainable tests for RESTful APIs.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Cucumber:</b> For running automated acceptance tests in behavior-driven development style.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Java:</b> Language of choice for robustness, ease of use, and cross-platform capabilities.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>JUnit:</b> Standard for unit testing in Java programming language.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Javax.mail:</b> For sending execution reports via email automatically.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Maven:</b> Build management tool for library and dependency management.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Jenkins:</b> Utilized for continuous integration.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>Log4j:</b> For capturing execution logs.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span><b>POI:</b> For test data management and configurable items.</span>
                </li>
              </ul>
            </div>
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
            API Testing
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for effective API testing strategies
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
                  <div className="space-y-6">
                    {activeSection?.image && (
                      <div className="flex justify-center">
                        <img
                          src={activeSection.image.src}
                          alt={activeSection.image.alt}
                          width={activeSection.image.width}
                          height={activeSection.image.height}
                          className="rounded-lg border border-gray-200 max-w-full h-auto"
                          srcSet={activeSection.image.srcSet.map(item => `${item.src} ${item.width}w`).join(', ')}
                          sizes="(max-width: 520px) 100vw, 520px"
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
                          width={400}
                          height={Math.round((400 / activeSection.image.width) * activeSection.image.height)}
                          className="rounded-lg border border-gray-200 w-full h-auto max-w-md"
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

export default ApiTesting;