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
    <footer className="bg-[var(--primary-blue)] text-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

         <div>
          <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
            />
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
            >
              <option>Select a Service</option>
              <option>Functional Testing</option>
              <option>Test Automation</option>
              <option>Performance Testing</option>
              <option>IOT Testing</option>
              <option>Mobile Testing</option>
              <option>Security Testing</option>
              <option>Data Analytics – ETL Testing</option>
              <option>Test Process Consulting</option>
              <option>Agile Testing</option>
              <option>Non Functional Testing</option>
            </select>
            <textarea
              name="message"
              rows={3}
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)]"
            />
            <button
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 transition font-semibold px-6 py-2 rounded-md w-full"
            >
              SUBMIT
            </button>
          </form>
        </div>

         {/* 2. SERVICES */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Services</h3>
          <ul className="space-y-2 text-sm">
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
                <HiOutlineCheckCircle className="mt-1 text-orange-300" />
                {service}
              </li>
            ))}
          </ul>
        </div>

         <div>
          <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "Who We Are",
              "myTestingCareer.com",
              "Training Academy",
              "Workforce Solutions",
              "Think Tank",
              "Insights",
              "Careers",
              "Contact Us"
            ].map((link, i) => (
              <li key={i} className="flex items-start gap-2">
                <BsChevronRight className="mt-1 text-white/60" />
                {link}
              </li>
            ))}
          </ul>
        </div>

         <div>
          <h3 className="text-2xl font-bold mb-6">Contact</h3>
          <p className="mb-2 text-[15px] leading-6">
            <strong>CorecNova Solutions</strong><br />
            TIDAL Park, Module 0606, 6th Floor,<br />
            5th Street, Rajiv Gandhi Salai,<br />
            Tharamani, Chennai – 60011,<br />
            Tamil Nadu, India
          </p>

          <div className="flex items-center gap-2 mb-2 text-sm">
            <FaPhoneAlt className="text-orange-300" />
            +91-XXX-XXX-XXXX
          </div>
          <div className="flex items-center gap-2 mb-6 text-sm">
            <FaEnvelope className="text-orange-300" />
            contact@corecNova.com
          </div>

  <div className="w-full">
    <div className="flex flex-col sm:flex-row w-full overflow-hidden rounded-md bg-white shadow-sm">
      <input
        type="email"
        placeholder="Your Email"
        className="flex-grow px-4 py-2 text-sm text-gray-800 focus:outline-none w-full"
      />
      <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-4 py-2 font-semibold flex items-center justify-center gap-2 transition-all whitespace-nowrap w-full sm:w-auto">
        Subscribe
      </button>
    </div>
  </div>
        </div>
      </div>

       <div className="text-center mt-12 text-sm text-white/70">
        © {new Date().getFullYear()} <strong>CorecNova</strong>. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
