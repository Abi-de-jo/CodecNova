import { useState } from "react";
import { 
  FaRobot,
  FaCogs,
  FaChartLine,
  FaShieldAlt,
   FaUniversity,
   FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const RPA = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "What is RPA",
      icon: <FaRobot className="text-xl" />,
      description: "Understanding Robotic Process Automation",
      content: (
        <div className="space-y-4">
          <p>
            RPA enables companies to easily automate repetitive, redundant and mundane tasks 
            to free up employees for higher value work. RPA is a rapidly growing form of business 
            process automation technology based on software robots or artificial intelligence workers.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <p>
              These digital workers automate interactions with GUI by repeating demonstration 
              actions performed by users, creating efficient digital labor.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'howItWorks',
      title: "How RPA Works",
      icon: <FaCogs className="text-xl" />,
      description: "The mechanics behind robotic process automation",
      content: (
        <div className="space-y-4">
          <p>
            RPA bots replicate human interactions with user interfaces without making changes 
            to existing systems or introducing manual errors. This significantly increases 
            efficiency for high-volume work with zero error margins.
          </p>
          <p>
            Software robots function similarly to physical robots - performing repetitive 
            tasks with perfect accuracy and consistency.
          </p>
        </div>
      )
    },
    {
      id: 'benefits',
      title: "Benefits of RPA",
      icon: <FaChartLine className="text-xl" />,
      description: "Advantages of implementing RPA solutions",
      benefits: [
        {
          title: "Accelerate Time to Value",
          description: "Create, test and deliver new automation in days or weeks"
        },
        {
          title: "Reduce Human Error",
          description: "Eliminate copy/paste mistakes from manual processes"
        },
        {
          title: "Increase Throughput",
          description: "Complete automated tasks in seconds/minutes, 24/7"
        },
        {
          title: "Decrease Development Cost",
          description: "Quick automation development with record/playback"
        }
      ]
    },
    {
      id: 'uipath',
      title: "About UiPath",
      icon: <FaShieldAlt className="text-xl" />,
      description: "Global leader in RPA technology",
      content: (
        <div className="space-y-4">
          <p>
            UiPath is a global leader in Robotic Process Automation that powers businesses 
            with agile robotic workforces through its state-of-the-art platform.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <p>
              Featured as a leader in Forrester Wave™ RPA reports, UiPath has helped companies 
              across industries implement front and back office automation at unprecedented scale.
            </p>
          </div>
        </div>
      ),
      advantages: [
        {
          title: "Open Platform",
          description: "Easy to try, learn and collaborate with deep integrations"
        },
        {
          title: "Scalability",
          description: "Handles any variety/number of complex processes"
        },
        {
          title: "Security",
          description: "Enterprise-grade security with role-based access control"
        },
        {
          title: "Rapid Results",
          description: "40% faster automation design and deployment"
        },
        {
          title: "Path to AI",
          description: "Cognitive RPA enhances bots with machine learning"
        }
      ]
    },
    {
      id: 'coe',
      title: "Our RPA COE",
      icon: <FaUniversity className="text-xl" />,
      description: "Novature Tech's Center of Excellence",
      content: (
        <div className="space-y-4">
          <p>
            Novature has established an RPA Center of Excellence to cater to growing industry needs. 
            Our COE continuously improves technical competencies and captures best practices to 
            leverage for customer solutions.
          </p>
          <p>
            We provide RPA training services and deploy certified professionals with quick turnaround.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <p>
              Our COE has developed advanced RPA bots on UiPath that significantly reduce time 
              for repetitive tasks in financial services and other industries.
            </p>
          </div>
        </div>
      ),
      services: [
        "Building Center of Excellence (COE)",
        "Bot rental/leasing solutions",
        "Software resell and professional services",
        "Bot maintenance and support",
        "Industry-specific RPA training",
        "Staffing augmentation for RPA projects",
        "Certified RPA professionals for immediate deployment"
      ],
      demo: {
        description: "Demonstration showcasing RPA features:",
        features: [
          "Data gathering from Chat bot",
          "E-commerce integration",
          "Data processing",
          "Email integration"
        ],
        videoUrl: "https://www.youtube.com/embed/uFLQtwv21S0"
      }
    }
  ];

  const activeSection = sections.find(s => s.id === activeTab);

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Robotic Process Automation
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your business with intelligent automation solutions
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
                    {activeSection?.content && (
                      <div className="space-y-4">
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Key Benefits
                        </h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          {activeSection.benefits.map((benefit, i) => (
                            <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <h5 className="font-bold text-[var(--secondary-blue)]">{benefit.title}</h5>
                              <p className="text-sm mt-1">{benefit.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {activeSection?.advantages && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Why Choose UiPath
                        </h4>
                        <ul className="space-y-4">
                          {activeSection.advantages.map((advantage, i) => (
                            <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <div>
                                <span className="font-medium">{advantage.title}: </span>
                                <span>{advantage.description}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          How Our COE Helps Your Business
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {activeSection.services.map((service, i) => (
                            <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.demo && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Demonstration Video
                        </h4>
                        <p>{activeSection.demo.description}</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {activeSection.demo.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="aspect-w-16 aspect-h-9">
                          <iframe 
                            className="w-full h-[500px] rounded-lg border border-gray-200"
                            src={activeSection.demo.videoUrl}
                            title="RPA Demonstration"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                          ></iframe>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.content && (
                      <div>
                        {activeSection.content}
                      </div>
                    )}

                    {activeSection?.benefits && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.benefits.slice(0, 2).map((benefit, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{benefit.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.advantages && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          UiPath Advantages
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.advantages.slice(0, 3).map((advantage, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{advantage.title}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          Our Services
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.services.slice(0, 3).map((service, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{service}</span>
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

export default RPA;