import { useState } from "react";
import { 
  FaQuestionCircle,
  FaMapMarkedAlt,
  FaCogs,
  FaChevronDown,
  FaChevronUp,
  FaChartLine
} from "react-icons/fa";

const TestEnvironmentManagement = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedView, setExpandedView] = useState(false);

  const sections = [
    {
      id: 'overview',
      title: "Overview",
      icon: <FaQuestionCircle className="text-xl" />,
      description: "Understanding Test Environment Management",
      content: (
        <>
          <p className="mb-4">
            As companies continue to search for better ways to achieve fundamental aims while keeping pace with modern trends such as big data, social media and multichannel solutions, their goals are becoming much harder to realize. The increased integration and complexity of requirements placed on solution delivery lifecycles can see release schedules slip or lengthen organically over time.
          </p>
          <p>
            To successfully test business applications end-to-end, across multiple user channels and through the distributed systems landscape and proliferation of system interfaces, the organization must have the right environment, controlled change, and tailored support practices.
          </p>
        </>
      )
    },
    {
      id: 'benefits',
      title: "Business Benefits",
      icon: <FaChartLine className="text-xl" />,
      description: "Advantages of effective TEM",
      content: (
        <>
          <p className="mb-4">
            The Test Environment Management (TEM) service enables organizations to speed up their software release schedules by up to 25%, cut infrastructure costs by 5-10% and increase team productivity by up to 30%.
          </p>
          <p>
            Successful integration of development and Test Environment Management technologies and practices plays an integral role in assisting and driving many shift left outcomes that organizations are demanding. Successful industrialization of initiatives greatly improves the sustainability of organizational change and benefits realization.
          </p>
        </>
      )
    },
    {
      id: 'approach',
      title: "Our Approach",
      icon: <FaCogs className="text-xl" />,
      description: "How we address key challenges",
      content: (
        <ul className="space-y-3">
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
            <span>Minimizing the cost of testing – by utilizing smaller asset footprints to support test projects</span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
            <span>Shortening the time to release – by simplifying and automating the environment delivery and support services</span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
            <span>Ensuring the quality of testing – environments are representative of the 'live' production situation</span>
          </li>
          <li className="flex items-start">
            <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
            <span>Improving test coverage – environments are integrated, incorporating all relevant risks and requirements</span>
          </li>
        </ul>
      )
    },
    {
      id: 'whyTem',
      title: "Why TEM",
      icon: <FaQuestionCircle className="text-xl" />,
      description: "The necessity of Test Environment Management",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/need-for-tem1-1024x465.png",
        alt: "Need for TEM",
        width: 1024,
        height: 465,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/need-for-tem1-1024x465.png", width: 1024 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/need-for-tem1-300x136.png", width: 300 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/need-for-tem1-768x349.png", width: 768 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/need-for-tem1.png", width: 1286 }
        ]
      }
    },
    {
      id: 'lifecycle',
      title: "Environment Lifecycle",
      icon: <FaMapMarkedAlt className="text-xl" />,
      description: "Defining the Test Environment lifecycle and scope",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/tem2-1024x418.png",
        alt: "TEM Lifecycle",
        width: 1024,
        height: 418,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem2-1024x418.png", width: 1024 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem2-300x123.png", width: 300 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem2-768x314.png", width: 768 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem2.png", width: 1239 }
        ]
      }
    },
    {
      id: 'service',
      title: "End-to-End Service",
      icon: <FaCogs className="text-xl" />,
      description: "Our comprehensive TEM service",
      image: {
        src: "https://novaturetech.com/wp-content/uploads/2019/10/tem3-1024x539.png",
        alt: "TEM Service",
        width: 1024,
        height: 539,
        srcSet: [
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem3-1024x539.png", width: 1024 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem3-300x158.png", width: 300 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem3-768x404.png", width: 768 },
          { src: "https://novaturetech.com/wp-content/uploads/2019/10/tem3.png", width: 1214 }
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
            Test Environment Management
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for effective test environment strategies
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
                {expandedView && activeSection?.image ? (
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
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Compact View Content */}
                    {activeSection?.image && (
                      <div className="flex justify-center">
                        <img
                          src={activeSection?.image.src}
                          alt={activeSection?.image.alt}
                          width={600}
                          height={Math.round((600 / (activeSection?.image?.width ?? 1)) * (activeSection?.image?.height ?? 1))}
                          className="rounded-lg border border-gray-200 w-full h-auto"
                        />
                      </div>
                    )}
                    <div className="text-gray-700">
                      {activeSection?.content}
                    </div>
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

export default TestEnvironmentManagement;