import { useState } from "react";
import { FaChartLine, FaTools } from "react-icons/fa";

const sections = [
  {
    title: "Performance Testing Overview",
    icon: <FaChartLine className="text-3xl text-[var(--secondary-blue)]" />,
    description:
      "Ensure application speed, stability, and scalability under various load conditions.",
    details: [
      {
        heading: "Key Areas",
        bullets: [
          "Faster response time & error-free executions",
          "Efficient CPU/memory utilization",
          "Architecture validation & capacity planning",
          "Better customer satisfaction and lower costs"
        ]
      }
    ]
  },
  {
    title: "Types of Performance Testing",
    icon: <FaChartLine className="text-3xl text-[var(--secondary-blue)]" />,
    description:
      "Various performance testing types to meet specific reliability and load requirements.",
    image:
      "https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test.jpg",
    bullets: [
      "Load Test – Real-world scalability checks",
      "Stress Test – Server breaking point",
      "Volume Test – Heavy data input validation",
      "Endurance/Soak Test – Stability over time",
      "Spike Test – Sudden traffic stress handling"
    ]
  },
  {
    title: "Testing Methodology",
    icon: <FaChartLine className="text-3xl text-[var(--secondary-blue)]" />,
    description:
      "Our structured methodology ensures precision through all testing phases.",
    image:
      "https://novaturetech.com/wp-content/themes/novature/assets/images/performance_test_methodology.jpg",
    bullets: [
      "Requirements Analysis",
      "Test Plan & Design",
      "Test Scripting",
      "Test Execution",
      "Delivery & Optimization"
    ],
    note:
      "We use a detailed questionnaire if performance requirements are not clearly defined."
  },
  {
    title: "Performance Test Metrics",
    icon: <FaChartLine className="text-3xl text-[var(--secondary-blue)]" />,
    description:
      "Key metrics help diagnose bottlenecks and drive performance decisions.",
    details: [
      {
        heading: "Client Side",
        bullets: [
          "Running Vusers, Hits/sec, Throughput",
          "HTTP status codes, Pages/sec",
          "Response times, Error stats"
        ]
      },
      {
        heading: "Server Side",
        bullets: [
          "CPU, Memory, Disk I/O, Heap",
          "JDBC pool, SQL profiling, Cache hits"
        ]
      },
      {
        heading: "Network",
        bullets: [
          "Bandwidth usage, Delay times, Segment delays"
        ]
      }
    ]
  },
  {
    title: "Performance Testing Tools",
    icon: <FaTools className="text-3xl text-[var(--secondary-blue)]" />,
    description:
      "Expertise in open-source and enterprise-grade performance tools.",
    bullets: [
      "JMeter",
      "Load Runner",
      "WebLoad",
      "BlazeMeter",
      "NeoLoad",
      "WAPT",
      "OpenSTA"
    ]
  }
];

const PerformanceTesting = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 ${
                expanded === index ? "transform -translate-y-2 shadow-xl" : "hover:shadow-md"
              }`}
              onClick={() => setExpanded(expanded === index ? null : index)}
            >
              <div className="p-6 cursor-pointer">
                <div className="flex items-start mb-4">
                  <div className="bg-[var(--light-blue)]/20 p-3 rounded-lg mr-4">
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--primary-blue)] mb-1">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600">{section.description}</p>
                  </div>
                </div>
              </div>

              {expanded === index && (
                <div className="px-6 pb-6 animate-fadeIn space-y-4">
                  {section.image && (
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full rounded-lg border border-gray-200"
                    />
                  )}

                  {section.bullets && (
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      {section.bullets.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}

                  {section.details &&
                    section.details.map((group, i) => (
                      <div key={i}>
                        <h4 className="font-semibold text-[var(--primary-blue)] mb-1">
                          {group.heading}
                        </h4>
                        <ul className="list-disc pl-5 text-sm space-y-1">
                          {group.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      </div>
                    ))}

                  {section.note && (
                    <p className="text-sm italic text-gray-500">{section.note}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerformanceTesting;
