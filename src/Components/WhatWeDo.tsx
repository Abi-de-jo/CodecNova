import {
  FaFlask,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaChartLine,
  FaCloudUploadAlt,
  FaCheck,
  FaCodeBranch,
  FaDatabase,
  FaMicroscope,
  FaCogs,
  FaNetworkWired,
  FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  { label: "Functional Testing", icon: <FaSearch />, path: "/services/functional-testing" },
  { label: "Test Automation", icon: <FaRobot />, path: "/services/test-automation" },
  { label: "Performance Testing", icon: <FaChartLine />, path: "/services/performance-testing" },
  { label: "IOT Testing", icon: <FaNetworkWired />, path: "/services/iot-testing" },
  { label: "Mobile Testing", icon: <FaMobileAlt />, path: "/services/mobile-testing" },
  { label: "Security Testing", icon: <FaShieldAlt />, path: "/services/security-testing" },
  { label: "Data Analytics - ETL Testing", icon: <FaDatabase />, path: "/services/data-analytics" },
  { label: "Test Process Consulting", icon: <FaCogs />, path: "/services/process-consulting" },
  { label: "Non Functional Testing", icon: <FaMicroscope />, path: "/services/non-functional" },
  { label: "Robotic Process Automation", icon: <FaRobot />, path: "/services/rpa" },
  { label: "Quality Assurance", icon: <FaCheck />, path: "/services/quality-assurance" },
  { label: "CI / CD", icon: <FaCodeBranch />, path: "/services/ci-cd" },
  { label: "Test Data Management", icon: <FaDatabase />, path: "/services/test-data" },
  { label: "Test Environment Management", icon: <FaFlask />, path: "/services/environment-management" },
  { label: "Webservices Testing", icon: <FaCloudUploadAlt />, path: "/services/webservices" },
];

const WhatWeDo = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gradient-to-b from-white to-[var(--background-cream)] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
          Explore Our Specialized Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer a wide range of independent testing solutions designed to support complex enterprise IT ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => navigate(service.path)}
            className="group cursor-pointer bg-white hover:bg-[var(--light-blue)] transition-all duration-300 border border-white rounded-xl p-6 shadow-sm hover:shadow-xl text-center flex flex-col items-center gap-4"
          >
            <div className="text-3xl text-[var(--secondary-blue)] group-hover:text-white">
              {service.icon}
            </div>
            <h4 className="text-sm font-semibold text-gray-700 group-hover:text-white text-center leading-tight">
              {service.label}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
