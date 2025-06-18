import { useState } from "react";
import { 
  FaNetworkWired, 
  FaUserCog, 
  FaShieldAlt, 
  FaChartLine, 
  FaSearch, 
  FaMobileAlt,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const IoTTesting = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Overview",
      icon: <FaNetworkWired className="text-xl" />,
      description: "Understanding the Internet of Things ecosystem and its impact",
      features: [
        "Embedded sensors and computing devices",
        "Integration with internet infrastructure",
        "Transforming work and living ecosystems",
        "Creating smart verticals across industries"
      ],
      content: (
        <div className="space-y-4">
          <p>
            The IoT refers to the interconnection of uniquely identifiable embedded computing devices and sensors 
            with the existing internet infrastructure. The sensors are at the core of IoT, transforming how we work 
            and live in our ecosystem.
          </p>
          <p>
            IoT technologies are creating smart verticals including smart homes, healthcare, business units, and more. 
            While there are different definitions for IoT, we can state it as real-world connections between machines 
            and intelligence.
          </p>
        </div>
      )
    },
    {
      id: 'components',
      title: "Components of IoT",
      icon: <FaNetworkWired className="text-xl" />,
      description: "Key elements that make up IoT systems and their interactions",
      components: [
        { 
          title: "Things", 
          desc: "Real-world devices with embedded sensors and software applications to interact with global infrastructure." 
        },
        { 
          title: "Communication", 
          desc: "Network protocols that serve as interfaces between objects, varying by network type (WAN, LAN, PAN)." 
        },
        { 
          title: "Computing", 
          desc: "Performed on various devices to enable intelligent decision-making and analyze user behavior." 
        }
      ],
      image: "https://novaturetech.com/wp-content/themes/novature/assets/images/iot.jpg"
    },
    {
      id: 'approach',
      title: "Testing Approach",
      icon: <FaUserCog className="text-xl" />,
      description: "Our comprehensive methodology for IoT quality assurance",
      layers: [
        {
          title: "Device Interaction Layer",
          desc: "Where hardware and software communicate with each other in real-time IoT environments",
          example: "Interaction between mobile applications and bank accounts enabling smart transactions"
        },
        {
          title: "User Interaction Layer",
          desc: "The touchpoint between users and objects, focusing on seamless communication flow"
        }
      ],
      methods: [
        {
          title: "Performance Testing",
          icon: <FaChartLine className="text-[var(--secondary-blue)]" />,
          desc: "Evaluates communication network speed and scalability of embedded software systems"
        },
        {
          title: "Compatibility Testing",
          icon: <FaMobileAlt className="text-[var(--secondary-blue)]" />,
          desc: "Analyzes versions of devices, sensors, protocols, mobile OS, and configurations"
        },
        {
          title: "Security Testing",
          icon: <FaShieldAlt className="text-[var(--secondary-blue)]" />,
          desc: "Addresses data privacy and security in IoT ecosystems using certified methodologies"
        },
        {
          title: "Exploratory Testing",
          icon: <FaSearch className="text-[var(--secondary-blue)]" />,
          desc: "Uses real-life scenarios to identify communication gaps between devices"
        },
        {
          title: "Usability Testing",
          icon: <FaUserCog className="text-[var(--secondary-blue)]" />,
          desc: "Focuses on user experience and product friendliness through human interaction"
        }
      ]
    },
    {
      id: 'enablers',
      title: "Our Key Enablers",
      icon: <FaShieldAlt className="text-xl" />,
      description: "What makes our IoT testing services stand out",
      benefits: [
        "Best practices and proven testing methodologies",
        "Focus on quality and international standards",
        "Access to testing competency centers for performance and security",
        "Standards-based approach",
        "Effective utilization of tools for better business results",
        "Proven testing framework and checklist"
      ]
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            IoT Testing Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive validation solutions for your Internet of Things ecosystem
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Services Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Our Services</h3>
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

                    {activeSection?.features && (
                      <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                        <h4 className="font-semibold text-[var(--secondary-blue)] mb-2">Key Aspects:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {activeSection.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.components && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Key Components
                        </h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          {activeSection.components.map((component, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <h5 className="font-bold text-[var(--secondary-blue)]">{component.title}</h5>
                              <p className="text-sm mt-1">{component.desc}</p>
                            </div>
                          ))}
                        </div>
                        {activeSection.image && (
                          <img
                            src={activeSection.image}
                            alt={`${activeSection.title} diagram`}
                            className="rounded-lg border border-gray-200 w-full"
                          />
                        )}
                      </div>
                    )}

                    {activeSection?.layers && (
                      <div className="space-y-6">
                        <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Testing Layers</h4>
                          <p>
                            Our QA organization splits IoT testing into two consecutive layers to better identify techniques and testing types.
                          </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSection.layers.map((layer, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">{layer.title}</h5>
                              <p>{layer.desc}</p>
                              {layer.example && (
                                <p className="mt-2 text-sm italic">{layer.example}</p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.methods && (
                      <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)]">
                          Testing Methodology
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSection.methods.map((method, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-start space-x-3">
                              <div className="mt-1">
                                {method.icon}
                              </div>
                              <div>
                                <h5 className="font-bold text-[var(--secondary-blue)]">{method.title}</h5>
                                <p className="text-sm">{method.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div className="space-y-4">
                        <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
                          <h4 className="font-semibold text-[var(--primary-blue)] mb-2">
                            Why Choose Our IoT Testing Services
                          </h4>
                          <p>
                            We bring comprehensive expertise and proven methodologies to ensure your IoT solutions meet the highest quality standards.
                          </p>
                        </div>
                        
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
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.content && (
                      <div className="space-y-4">
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.features && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Aspects
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {activeSection.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.components && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Components
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.components.slice(0, 3).map((component, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <div>
                                <span className="font-medium">{component.title}: </span>
                                <span className="text-sm">{component.desc}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.layers && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Testing Layers
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.layers.slice(0, 2).map((layer, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{layer.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.methods && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Methods
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSection.methods.slice(0, 3).map((method, i) => (
                            <span key={i} className="text-sm bg-gray-50 px-3 py-1 rounded-md">
                              {method.title}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.benefits.slice(0, 3).map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{benefit}</span>
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

export default IoTTesting;