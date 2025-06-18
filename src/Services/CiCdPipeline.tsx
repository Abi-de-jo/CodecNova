import { useState } from "react";
import { 
  FaCogs,
  FaCodeBranch,
  FaRocket,
  FaShieldAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const CiCdPipeline = () => {
  const [activeTab, setActiveTab] = useState('setup');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'setup',
      title: "CI/CD Setup",
      icon: <FaCogs className="text-xl" />,
      description: "How we help you establish modern CI/CD pipelines",
      content: {
        compact: (
          <div className="space-y-4">
            <p>Novature Tech looks at the CI/CD pipeline as the modern equivalent of a factory for software, or what we call the Modern Software depot.</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                <span>Encompasses CI/CD best practices and DevOps philosophy</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                <span>Tools for planning, building, testing, and releasing software</span>
              </li>
            </ul>
          </div>
        ),
        detailed: (
          <div className="space-y-6">
            <p>Novature Tech looks at the CI/CD pipeline as the modern equivalent of a factory for software, or what we call the Modern Software depot. The Modern Software depot not only encompasses CI/CD best practices and the philosophy and prescriptions of DevOps but also includes the tooling, management, and orchestration of it all.</p>
            <p>Novature Tech provides the tools to plan, build, test, release, operate, automate and secure all software delivery whether an app is cloud-native, classically architected or hosted on a legacy platform.</p>
            <div className="grid gap-6">
              <img
                src="https://novaturetech.com/wp-content/uploads/2019/10/cicd.png"
                alt="CI/CD Overview"
                width={602}
                height={334}
                className="rounded-lg border border-gray-200 w-full h-auto"
                srcSet="https://novaturetech.com/wp-content/uploads/2019/10/cicd.png 602w, https://novaturetech.com/wp-content/uploads/2019/10/cicd-300x166.png 300w"
                sizes="(max-width: 602px) 100vw, 602px"
              />
              <img
                src="https://novaturetech.com/wp-content/uploads/2019/10/cicd-pipeline-1024x355.png"
                alt="CI/CD Pipeline"
                width={1024}
                height={355}
                className="rounded-lg border border-gray-200 w-full h-auto"
                srcSet="https://novaturetech.com/wp-content/uploads/2019/10/cicd-pipeline-1024x355.png 1024w, https://novaturetech.com/wp-content/uploads/2019/10/cicd-pipeline-1024x355-300x104.png 300w, https://novaturetech.com/wp-content/uploads/2019/10/cicd-pipeline-1024x355-768x266.png 768w"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        )
      }
    },
    {
      id: 'integration',
      title: "Continuous Integration",
      icon: <FaCodeBranch className="text-xl" />,
      description: "Reducing integration costs through frequent commits",
      content: {
        compact: (
          <div className="space-y-4">
            <p>The main idea with CI is to reduce integration costs by having developers integrate changes frequently.</p>
            <div>
              <h4 className="font-semibold mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Fewer bugs in production</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Reduced testing costs</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        detailed: (
          <div className="space-y-6">
            <p>The main idea with CI is to reduce integration costs by having developers do it more frequently and sooner than they normally would. In practice, a developer will often discover boundary conflicts between new and existing code at the time of integration. If it's done early and often, the expectation is that resolving these conflicts will be easier and less costly to perform.</p>
            
            <div>
              <h4 className="font-semibold text-lg mb-3">Approach</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Testers will need to write automated tests for each new feature, improvement or bug fix.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Need a continuous integration server that can monitor the main repository and run the tests automatically for every new commits pushed.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Developers need to merge their changes as often as possible, at least once a day.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Less bugs shipped to production as regressions are captured early by the automated tests.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Building the release is easy as all integration issues have been solved early.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Less context switching as developers are alerted as soon as they break the build.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Testing costs are reduced drastically – CI server can run hundreds of tests in seconds.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>QA team spend less time testing and can focus on significant improvements.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'deployment',
      title: "Continuous Deployment",
      icon: <FaRocket className="text-xl" />,
      description: "Automating deployments for confident production releases",
      content: {
        compact: (
          <div className="space-y-4">
            <p>Continuous Deployment extends CI by automating the software delivery process for easy production deployments.</p>
            <div>
              <h4 className="font-semibold mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Releases become routine without anxiety</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Customers see continuous improvements</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        detailed: (
          <div className="space-y-6">
            <p>Continuous Deployment is actually an extension of CI, in which the software delivery process is automated further to enable easy and confident deployments into production at any time.</p>
            <p>A mature continuous delivery process exhibits a codebase that is always deployable. With CD, software release becomes a routine and no frills event without anxiety or urgency.</p>

            <div>
              <h4 className="font-semibold text-lg mb-3">Approach</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Establish a strong foundation in continuous integration and comprehensive test coverage.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Deployments need to be automated with minimal human intervention.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Use feature flags for incomplete features in production.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Maintain documentation aligned with deployment pace.</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-3">Benefits</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Reduced complexity of deploying software - no more days spent preparing releases.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>More frequent releases accelerate customer feedback loops.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Less pressure on small changes, enabling faster iteration.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Faster development with no pauses for releases.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Less risky releases with smaller change batches.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                  <span>Customers see continuous quality improvements.</span>
                </li>
              </ul>
            </div>
          </div>
        )
      }
    },
    {
      id: 'devops',
      title: "DevOps Testing",
      icon: <FaShieldAlt className="text-xl" />,
      description: "Integrating testing throughout the DevOps lifecycle",
      content: {
        compact: (
          <div className="space-y-4">
            <p>DevOps considers software production from end to end, bringing development, testing and operations together.</p>
            <div>
              <h4 className="font-semibold mb-2">Key Benefits:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Shorter development cycles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1.5 mr-2"></div>
                  <span>Better team communication</span>
                </li>
              </ul>
            </div>
          </div>
        ),
        detailed: (
          <div className="space-y-6">
            <p>DevOps is a software development and delivery process which considers the production of software from end to end. The key benefits are:</p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Shorter Development Cycles, Faster Innovation towards dynamic business requirements.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Reduce Implementation Failure, Reflections and Recovery Time.</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Better Communication and Cooperation among the delivery teams.</span>
              </li>
            </ul>

            <p>DevOps takes the Agile model a step further by bringing closer the release and deployment activities to those of development and testing. This means that an agile team on its own is responsible for the development, testing and release of the software they create.</p>

            <div className="flex justify-center">
              <img
                src="https://novaturetech.com/wp-content/uploads/2019/10/devops-testIO.png"
                alt="DevOps Testing"
                width={339}
                height={224}
                className="rounded-lg border border-gray-200"
                srcSet="https://novaturetech.com/wp-content/uploads/2019/10/devops-testIO.png 339w, https://novaturetech.com/wp-content/uploads/2019/10/devops-testIO-300x198.png 300w"
                sizes="(max-width: 339px) 100vw, 339px"
              />
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3">DevOps Practices</h4>
              <ol className="space-y-2 list-decimal pl-5">
                <li className="pl-2">Continuous development</li>
                <li className="pl-2">Continuous Development monitoring</li>
                <li className="pl-2">Continuous testing</li>
                <li className="pl-2">Continuous integration</li>
                <li className="pl-2">Continuous deployment</li>
                <li className="pl-2">Continuous release</li>
                <li className="pl-2">Continuous delivery</li>
              </ol>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg mb-3">DevOps Testing Strategy</h4>
              <p className="mb-4">Testing in DevOps spans the whole software development and delivery lifecycle. Testers are no longer just focusing on functional testing and feature verification. Testers will also be involved in operations testing, performance testing, basic security testing, as well as being able to monitor and analyze production data and logs.</p>
              <div className="flex justify-center">
                <img
                  src="https://novaturetech.com/wp-content/uploads/2019/10/devops.png"
                  alt="DevOps Strategy"
                  width={601}
                  height={338}
                  className="rounded-lg border border-gray-200 w-full max-w-lg"
                  srcSet="https://novaturetech.com/wp-content/uploads/2019/10/devops.png 601w, https://novaturetech.com/wp-content/uploads/2019/10/devops-300x169.png 300w"
                  sizes="(max-width: 601px) 100vw, 601px"
                />
              </div>
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
            CI/CD Pipeline Solutions
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern software delivery through continuous integration and deployment
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
                    {activeSection?.content.detailed}
                  </div>
                ) : (
                  <div className="space-y-6">
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

export default CiCdPipeline;