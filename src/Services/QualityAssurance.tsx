import { useState } from "react";
import { 
  FaShieldAlt,
  FaChartLine,
  FaHandshake,
  FaClipboardCheck,
  FaStar,
  FaChevronDown,
  FaChevronUp
} from "react-icons/fa";

const QualityAssurance = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "What is QA",
      icon: <FaShieldAlt className="text-xl" />,
      description: "Understanding Quality Assurance and its importance",
      content: (
        <div className="space-y-4">
          <p className="font-semibold text-[var(--primary-blue)]">
            Best Automation QA Testing in Dubai
          </p>
          <p>
            Companies engage in quality assurance (QA) to ensure high quality in production 
            during the development of products or services.
          </p>
          <p>
            With intense market competition, quality has become a key differentiator. 
            Quality control is essential for delivering products that meet or exceed 
            customer expectations.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <p>
              A quality control system based on standards like <span className="font-semibold">ISO 9001</span> 
              provides a strong foundation for achieving marketing and operational benefits.
            </p>
          </div>
          <p>
            QA saves costs by fixing issues early, prevents problems proactively, and is 
            most effective when implemented from the start.
          </p>
        </div>
      )
    },
    {
      id: 'benefits',
      title: "Benefits",
      icon: <FaChartLine className="text-xl" />,
      description: "Advantages of implementing QA processes",
      items: [
        "Better User Experience and Enhanced Satisfaction",
        "Improved Efficiency with Lower Costs and Risks",
        "Prevention Over Correction for Issues"
      ]
    },
    {
      id: 'offerings',
      title: "Our Offerings",
      icon: <FaHandshake className="text-xl" />,
      description: "Comprehensive QA services we provide",
      services: [
        "Quality Assurance Services",
        "Quality Process Consulting",
        "Quality Audit and Reporting",
        "Quality Management System Setup",
        "Quality Assessment Services",
        "Quality Certification Assistance"
      ]
    },
    {
      id: 'differentiators',
      title: "Our Differentiators",
      icon: <FaStar className="text-xl" />,
      description: "What sets our QA services apart",
      items: [
        "Leadership with 20+ years experience in ISO, CMMI, TMMI and Six Sigma",
        "Proven checklists and metrics for each process area",
        "Adoption of leading QA standards",
        "Domain-specific QA consulting solutions",
        "PDCA (Plan-Do-Check-Act) based approach"
      ],
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/planact.png",
        alt: "PDCA Cycle",
        width: 218,
        height: 190
      },
      process: [
        "Define the Process",
        "Train implementation teams",
        "Implement processes",
        "Monitor with checkpoint reviews",
        "Continuously improve processes"
      ]
    },
    {
      id: 'standards',
      title: "Adopted Standards",
      icon: <FaClipboardCheck className="text-xl" />,
      description: "Industry QA standards we implement",
      standards: [
        {
          src: "https://novaturetech.com/wp-content/uploads/2019/10/cmmi.jpg",
          alt: "CMMI",
          width: 182,
          height: 93
        },
        {
          src: "https://novaturetech.com/wp-content/uploads/2019/10/tmmi.png",
          alt: "TMMI",
          width: 182,
          height: 93
        },
        {
          src: "https://novaturetech.com/wp-content/uploads/2019/10/ISO.jpg",
          alt: "ISO",
          width: 182,
          height: 93
        },
        {
          src: "https://novaturetech.com/wp-content/uploads/2019/10/six-sigma-methodology-1024x685.jpg",
          alt: "Six Sigma",
          width: 182,
          height: 93
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
            Quality Assurance Services
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ensuring excellence in your products and services
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

                    {activeSection?.items && !activeSection.services && (
                      <div className="space-y-4">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Organizational Benefits
                        </h4>
                        <ul className="space-y-3">
                          {activeSection.items.map((item, i) => (
                            <li key={i} className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Business Offerings
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

                    {activeSection?.process && (
                      <div className="space-y-6">
                        <div className="flex flex-col items-center">
                          <img 
                            src={activeSection.image.src} 
                            alt={activeSection.image.alt} 
                            width={activeSection.image.width}
                            height={activeSection.image.height}
                            className="mb-4"
                          />
                        </div>
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Our QA Process
                        </h4>
                        <ul className="space-y-3">
                          {activeSection.process.map((step, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.standards && (
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-[var(--primary-blue)]">
                          Implemented QA Standards
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {activeSection.standards.map((standard, i) => (
                            <div key={i} className="flex justify-center">
                              <img 
                                src={standard.src} 
                                alt={standard.alt} 
                                width={standard.width}
                                height={standard.height}
                                className="border border-gray-200 rounded-lg"
                              />
                            </div>
                          ))}
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

                    {activeSection?.items && !activeSection.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
                          Key Benefits
                        </h4>
                        <ul className="space-y-2">
                          {activeSection.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-1 mr-2"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {activeSection?.services && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-3">
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

                    {activeSection?.standards && (
                      <div>
                        <h4 className="text-lg font-semibold text-[var(--primary-blue)] mb-2">
                          QA Standards
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeSection.standards.slice(0, 2).map((standard, i) => (
                            <img 
                              key={i}
                              src={standard.src} 
                              alt={standard.alt} 
                              width="100"
                              height="50"
                              className="border border-gray-200 rounded-lg"
                            />
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

export default QualityAssurance;