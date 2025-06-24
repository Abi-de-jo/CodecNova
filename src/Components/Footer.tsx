import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { toast } from "react-toastify";

const Footer = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.service || !form.message) {
      toast.error("Please fill out all fields!");
      return;
    }

    // Fake submit logic (you can integrate API here)
    toast.success("Message sent successfully");
    setForm({ name: "", email: "", service: "", message: "" });
  };

  return (
    <footer className="bg-[var(--primary-blue)] text-white py-16 px-6 md:px-16" role="contentinfo" aria-label="Website footer">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Contact Form Section */}
          <section aria-labelledby="contact-form-heading">
            <h3 id="contact-form-heading" className="text-2xl font-bold mb-6">Get in Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
                  aria-required="true"
                />
              </div>
              <div>
                <label htmlFor="service" className="sr-only">Select a Service</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
                  aria-required="true"
                >
                  <option value="">Select a Service</option>
                  <option value="Functional Testing">Functional Testing</option>
                  <option value="Test Automation">Test Automation</option>
                  <option value="Performance Testing">Performance Testing</option>
                  <option value="IOT Testing">IOT Testing</option>
                  <option value="Mobile Testing">Mobile Testing</option>
                  <option value="Security Testing">Security Testing</option>
                  <option value="Data Analytics – ETL Testing">Data Analytics – ETL Testing</option>
                  <option value="Test Process Consulting">Test Process Consulting</option>
                  <option value="Agile Testing">Agile Testing</option>
                  <option value="Non Functional Testing">Non Functional Testing</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
                  aria-required="true"
                />
              </div>
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 transition font-semibold px-6 py-2 rounded-md w-full"
                aria-label="Submit contact form"
              >
                SUBMIT
              </button>
            </form>
          </section>

          {/* Services Section */}
          <section aria-labelledby="services-heading">
            <h3 id="services-heading" className="text-2xl font-bold mb-6">Services</h3>
            <ul className="space-y-2 text-sm" aria-label="List of services">
              {[
                "Functional Testing",
                "Test Automation",
                "Performance Testing",
                "IOT Testing",
                "Mobile Testing",
                "Security Testing",
                "Data Analytics – ETL Testing",
                "Test Process Consulting",
                "Agile Testing",
                "Non Functional Testing"
              ].map((service, i) => (
                <li key={i} className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="mt-1 text-orange-300" aria-hidden="true" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quick Links Section */}
          <nav aria-labelledby="quick-links-heading">
            <h3 id="quick-links-heading" className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-2 text-sm" aria-label="Quick navigation links">
              {[
                { name: "Home", path: "/" },
                { name: "Who We Are", path: "/about" },
                { name: "myTestingCareer.com", path: "https://mytestingcareer.com" },
                { name: "Training Academy", path: "/training" },
                { name: "Workforce Solutions", path: "/workforce" },
                { name: "Think Tank", path: "/think-tank" },
                { name: "Insights", path: "/insights" },
                { name: "Careers", path: "/careers" },
                { name: "Contact Us", path: "/contact" }
              ].map((link, i) => (
                <li key={i} className="flex items-start gap-2">
                  <BsChevronRight className="mt-1 text-white/60" aria-hidden="true" />
                  <a href={link.path} className="hover:underline">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info Section */}
          <section aria-labelledby="contact-info-heading">
            <h3 id="contact-info-heading" className="text-2xl font-bold mb-6">Contact</h3>
            <address className="not-italic mb-2 text-[15px] leading-6">
              <strong>CorecNova Solutions</strong><br />
              TIDAL Park, Module 0606, 6th Floor,<br />
              5th Street, Rajiv Gandhi Salai,<br />
              Tharamani, Chennai – 60011,<br />
              Tamil Nadu, India
            </address>

            <div className="flex items-center gap-2 mb-2 text-sm">
              <FaPhoneAlt className="text-orange-300" aria-hidden="true" />
              <a href="tel:+91-XXX-XXX-XXXX" aria-label="Call us at +91 XXX XXX XXXX">+91-XXX-XXX-XXXX</a>
            </div>
            <div className="flex items-center gap-2 mb-6 text-sm">
              <FaEnvelope className="text-orange-300" aria-hidden="true" />
              <a href="mailto:contact@corecNova.com" aria-label="Email us at contact@corecNova.com">contact@corecNova.com</a>
            </div>

            <div className="w-full">
              <div className="flex flex-col sm:flex-row w-full overflow-hidden rounded-md bg-white shadow-sm">
                <label htmlFor="newsletter-email" className="sr-only">Your Email</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Your Email"
                  className="flex-grow px-4 py-2 text-sm text-gray-800 focus:outline-none w-full"
                  aria-label="Subscribe to newsletter"
                />
                <button 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap w-full sm:w-auto"
                  aria-label="Subscribe to our newsletter"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-12 text-sm text-white/70">
          <p>© {new Date().getFullYear()} <strong>CorecNova</strong>. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;