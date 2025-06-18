import { useEffect, useState } from "react";
import { FaDatabase, FaChartLine, FaMobileAlt, FaShieldAlt, FaCogs, FaClipboardCheck } from "react-icons/fa";

const DataAnalyticsTesting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState('overview');

  const sections = [
    {
      id: 'overview',
      title: "Overview",
      icon: <FaDatabase className="text-xl" />,
      content: (
        <div className="space-y-4">
          <p>
            Novature Tech's Data Analytics Testing services ensure the accuracy and reliability of your ETL processes and data warehouses. 
            With the exponential growth of data-driven decision making, validating data integrity across complex transformations 
            has become business-critical.
          </p>
          <p>
            Our specialized testing approach verifies that data extracted from source systems maintains its integrity through 
            transformation and loading processes, delivering trustworthy analytics for your organization.
          </p>
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <h4 className="font-semibold text-[var(--secondary-blue)] mb-2">Key Benefits:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Ensures data accuracy across transformations</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Identifies data quality issues early</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Reduces risk of faulty business decisions</span>
              </li>
              <li className="flex items-start">
                <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                <span>Validates complex business rules</span>
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'approach',
      title: "Our Approach",
      icon: <FaChartLine className="text-xl" />,
      content: (
        <div className="space-y-6">
          <div>
            <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Structured Methodology</h4>
            <p>
              Our ETL testing approach follows a rigorous methodology that validates data at each stage of the pipeline:
            </p>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {[
                { title: "Source Validation", desc: "Verify data extraction accuracy" },
                { title: "Transformation Testing", desc: "Validate business rules and calculations" },
                { title: "Target Verification", desc: "Ensure correct loading and aggregation" }
              ].map((item, i) => (
                <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h5 className="font-bold text-[var(--secondary-blue)]">{item.title}</h5>
                  <p className="text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src="https://novaturetech.com/wp-content/themes/novature/assets/images/etl_process.jpg"
            alt="ETL Testing Process"
            className="rounded-lg border border-gray-200 w-full"
          />
        </div>
      )
    },
    {
      id: 'testing',
      title: "Testing Services",
      icon: <FaClipboardCheck className="text-xl" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Core ETL Testing",
                items: [
                  "Source-to-target data validation",
                  "Transformation logic verification",
                  "Data completeness checks",
                  "Data quality assessment",
                  "Duplicate data checks"
                ]
              },
              {
                title: "Advanced Services",
                items: [
                  "Data warehouse testing",
                  "BI report validation",
                  "Big data testing",
                  "CDC (Change Data Capture) testing",
                  "Data migration testing"
                ]
              }
            ].map((group, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h4 className="font-semibold text-[var(--primary-blue)] mb-3">{group.title}</h4>
                <ul className="space-y-2">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'methodology',
      title: "Methodology",
      icon: <FaCogs className="text-xl" />,
      content: (
        <div className="space-y-6">
          <div className="bg-[var(--light-blue)]/10 p-4 rounded-lg border border-[var(--light-blue)]/30">
            <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Our Testing Framework</h4>
            <p>
              We employ a comprehensive framework that combines automated and manual testing approaches
              to ensure complete coverage of your data pipelines.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">Key Phases:</h5>
              <ul className="space-y-3">
                {[
                  "Requirements Analysis & Test Planning",
                  "Test Case Design & Validation Rules",
                  "Test Data Preparation",
                  "ETL Process Validation",
                  "Performance Benchmarking",
                  "Defect Tracking & Resolution",
                  "Sign-off & Documentation"
                ].map((item, i) => (
                  <li key={i} className="flex">
                    <span className="bg-[var(--secondary-blue)] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                      {i + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">Quality Metrics:</h5>
              <ul className="space-y-2">
                {[
                  "Data Accuracy: 99.95%+",
                  "Transformation Validation: 100%",
                  "Performance Thresholds: <5% variance",
                  "Defect Detection: >98%",
                  "Test Coverage: 100% business rules"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'tools',
      title: "Tools & Technologies",
      icon: <FaMobileAlt className="text-xl" />,
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                category: "ETL Testing Tools",
                tools: ["Informatica Data Validation", "QuerySurge", "RightData", "ICEDQ", "Talend"]
              },
              {
                category: "Data Quality Tools",
                tools: ["Informatica DQ", "IBM InfoSphere", "Talend DQ", "SAS Data Quality", "Ataccama"]
              },
              {
                category: "Automation Frameworks",
                tools: ["Custom SQL-based", "Python ETL Validator", "Java-based solutions", "Spark-based testing"]
              },
              {
                category: "Performance Testing",
                tools: ["JMeter", "LoadRunner", "NeoLoad", "BlazeMeter", "Tricentis"]
              }
            ].map((group, i) => (
              <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <h5 className="font-semibold text-[var(--primary-blue)] mb-2">{group.category}</h5>
                <ul className="space-y-1">
                  {group.tools.map((tool, j) => (
                    <li key={j} className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'framework',
      title: "DART Framework",
      icon: <FaShieldAlt className="text-xl" />,
      content: (
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <h4 className="font-semibold text-[var(--primary-blue)] mb-2">Data Analytics Regression Testing (DART)</h4>
            <p>
              Our proprietary framework designed specifically for data pipeline testing and validation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">Key Features:</h5>
              <ul className="space-y-2">
                {[
                  "End-to-end data validation",
                  "Automated reconciliation",
                  "Metadata-driven testing",
                  "Historical data comparison",
                  "Anomaly detection",
                  "Data lineage visualization"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-[var(--secondary-blue)] rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-[var(--secondary-blue)] mb-2">Implementation Benefits:</h5>
              <ul className="space-y-2">
                {[
                  "Reduces testing time by 40-60%",
                  "Improves defect detection by 3x",
                  "Provides comprehensive audit trails",
                  "Supports CI/CD integration",
                  "Scalable for big data environments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-2 mr-2"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            Data Analytics – ETL Testing
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive validation solutions for your data pipelines and analytics platforms
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 sticky top-8">
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-[var(--primary-blue)]">Sections</h3>
              </div>
              <ul className="divide-y divide-gray-100">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => setActiveTab(section.id)}
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

          {/* Main Content */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 md:p-8">
                {sections.find(s => s.id === activeTab)?.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsTesting;