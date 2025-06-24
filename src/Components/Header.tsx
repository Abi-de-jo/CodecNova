import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Who We Are",
      link: "#",
      dropdown: [{ name: "Our Vision", link: "/our-vision" }],
    },
    {
      name: "What We Do",
      link: "#",
      megaDropdown: [
        { name: "Functional Testing", link: "/services/functional-testing" },
        { name: "Performance Testing", link: "/services/performance-testing" },
        { name: "Mobile Testing", link: "/services/mobile-testing" },
        { name: "Data Analytics – ETL Testing", link: "/services/data-analytics" },
        { name: "Agile Testing", link: "/services/agile-testing" },
        { name: "Test Automation", link: "/services/test-automation" },
        { name: "IOT Testing", link: "/services/iot-testing" },
        { name: "Security Testing", link: "/services/security-testing" },
        { name: "Non Functional Testing", link: "/services/non-functional" },
        { name: "Test Process Consulting", link: "/services/process-consulting" },
        { name: "Robotic Process Automation", link: "/services/rpa" },
        { name: "Quality Assurance", link: "/services/quality-assurance" },
        { name: "Test Data Management", link: "/services/test-data" },
        { name: "Test Environment Management", link: "/services/environment-management" },
        { name: "Webservices Testing", link: "/services/webservices" },
        { name: "CI / CD", link: "/services/ci-cd" },
      ],
    },
    { name: "Insights", link: "/insights" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[var(--background-cream)]/80 shadow-md">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900" aria-label="CorecNova Homepage">
          <h1>CorecNova</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 font-semibold text-gray-700 relative" aria-label="Main navigation">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <div key={idx} className="relative group">
                  <button className="hover:text-orange-500 transition" aria-haspopup="true">
                    {item.name.toUpperCase()}
                  </button>
                  <ul className="absolute top-full bg-white shadow-md rounded-md mt-[-4px] py-2 w-48 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50">
                    {item.dropdown.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.link}
                          aria-label={sub.name}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-100"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            } else if (item.megaDropdown) {
              const col1 = item.megaDropdown.slice(0, 8);
              const col2 = item.megaDropdown.slice(8);
              return (
                <div key={idx} className="relative group">
                  <button className="hover:text-orange-500 transition" aria-haspopup="true">
                    {item.name.toUpperCase()}
                  </button>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-[90vw] max-w-3xl bg-white shadow-xl rounded-md p-6 grid grid-cols-2 gap-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto z-50">
                    {[col1, col2].map((col, colIdx) => (
                      <ul key={colIdx} className="space-y-2 text-sm">
                        {col.map((service, i) => (
                          <li key={i}>
                            <Link
                              to={service.link}
                              aria-label={service.name}
                              className="text-gray-700 hover:text-orange-500 text-lg transition whitespace-nowrap"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              );
            } else {
              return (
                <Link
                  key={idx}
                  to={item.link}
                  aria-label={item.name}
                  className="hover:text-orange-500 transition"
                >
                  {item.name.toUpperCase()}
                </Link>
              );
            }
          })}
        </nav>

        {/* Mobile Menu Button */}
        <FiMenu
          onClick={() => setOpen(!open)}
          className="text-2xl md:hidden cursor-pointer"
          aria-label="Toggle mobile menu"
        />
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden px-6 pb-4 space-y-3 bg-[var(--background-cream)]/90 backdrop-blur-sm" aria-label="Mobile menu">
          {navItems.map((item, idx) => {
            if (item.dropdown) {
              return (
                <details key={idx} className="group">
                  <summary className="text-gray-700 font-semibold cursor-pointer hover:text-orange-500">
                    {item.name}
                  </summary>
                  <ul className="ml-4 mt-2 space-y-1">
                    {item.dropdown.map((sub, i) => (
                      <li key={i}>
                        <Link
                          to={sub.link}
                          aria-label={sub.name}
                          className="block text-sm text-gray-700 hover:text-orange-500"
                        >
                          {sub.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            } else if (item.megaDropdown) {
              return (
                <details key={idx} className="group">
                  <summary className="text-gray-700 font-semibold cursor-pointer hover:text-orange-500">
                    {item.name}
                  </summary>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 pl-2">
                    {item.megaDropdown.map((service, i) => (
                      <li key={i}>
                        <Link
                          to={service.link}
                          aria-label={service.name}
                          className="text-sm text-gray-700 hover:text-orange-500"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              );
            } else {
              return (
                <Link
                  key={idx}
                  to={item.link}
                  aria-label={item.name}
                  className="block text-gray-700 font-semibold hover:text-orange-500"
                >
                  {item.name}
                </Link>
              );
            }
          })}
        </nav>
      )}
    </header>
  );
};

export default Header;
