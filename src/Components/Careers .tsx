import { useState } from "react";
import { FaPaperclip, FaUser, FaEnvelope, FaBriefcase, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Careers = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
    resume: null as File | null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setForm({ ...form, resume: e.target.files[0] });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.position) {
      toast.error("Please fill out all required fields!");
      return;
    }

    if (!form.resume) {
      toast.error("Please upload your resume!");
      return;
    }

    // Fake submit logic (you can integrate API here)
    toast.success("Application submitted successfully!");
    setForm({ 
      name: "", 
      email: "", 
      position: "", 
      message: "", 
      resume: null 
    });
  };

  return (
    <section className="bg-[var(--background-cream)] py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our growing team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Career Opportunities */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--secondary-blue)] mb-6">
              Current Openings
            </h3>
            
            <div className="space-y-6">
              {[
                {
                  title: "Senior QA Engineer",
                  type: "Full-time",
                  location: "Chennai, India",
                  description: "Lead testing initiatives for enterprise applications with 5+ years experience."
                },
                {
                  title: "Automation Test Specialist",
                  type: "Full-time",
                  location: "Remote",
                  description: "Develop and maintain automated test frameworks with Selenium/Appium."
                },
                {
                  title: "Performance Testing Engineer",
                  type: "Contract",
                  location: "Bangalore, India",
                  description: "Design and execute performance tests for high-traffic web applications."
                },
                {
                  title: "DevOps Test Engineer",
                  type: "Full-time",
                  location: "Chennai, India",
                  description: "Bridge the gap between development and operations with CI/CD expertise."
                }
              ].map((job, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50"
                >
                  <h4 className="text-xl font-bold text-[var(--primary-blue)] mb-2">{job.title}</h4>
                  <div className="flex gap-4 text-sm mb-3">
                    <span className="bg-[var(--light-blue)]/20 text-[var(--secondary-blue)] px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                    <span className="text-gray-600 flex items-center">
                      <FaMapMarkerAlt className="mr-1 text-[var(--secondary-blue)]" />
                      {job.location}
                    </span>
                  </div>
                  <p className="text-gray-700">{job.description}</p>
                  <button className="mt-4 text-[var(--secondary-blue)] font-semibold hover:underline">
                    View Details →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50">
              <h3 className="text-2xl font-bold text-[var(--secondary-blue)] mb-6">
                Apply Now
              </h3>
              
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaUser className="text-gray-400" />
                  </div>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaEnvelope className="text-gray-400" />
                  </div>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaBriefcase className="text-gray-400" />
                  </div>
                  <select
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                    required
                  >
                    <option value="">Select Position</option>
                    <option>Senior QA Engineer</option>
                    <option>Automation Test Specialist</option>
                    <option>Performance Testing Engineer</option>
                    <option>DevOps Test Engineer</option>
                    <option>Other</option>
                  </select>
                </div>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Cover Letter (Optional)"
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                />

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <FaPaperclip className="text-gray-400" />
                  </div>
                  <input
                    type="file"
                    id="resume"
                    onChange={handleFileChange}
                    className="block w-full pl-10 pr-4 py-3 rounded-lg bg-white border border-gray-200 text-gray-800 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[var(--light-blue)]/20 file:text-[var(--secondary-blue)] hover:file:bg-[var(--light-blue)]/30 focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <label htmlFor="resume" className="block text-xs text-gray-500 mt-1">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--secondary-blue)] hover:bg-[var(--primary-blue)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300"
                >
                  Submit Application
                </button>
              </form>
            </div>

            <div className="mt-8 bg-[var(--light-blue)]/10 p-6 rounded-xl border border-[var(--light-blue)]/30">
              <h4 className="text-lg font-bold text-[var(--primary-blue)] mb-3">
                What We Offer
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="text-[var(--secondary-blue)] mt-1" />
                  Competitive salaries and benefits
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="text-[var(--secondary-blue)] mt-1" />
                  Flexible work arrangements
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="text-[var(--secondary-blue)] mt-1" />
                  Continuous learning opportunities
                </li>
                <li className="flex items-start gap-2">
                  <HiOutlineCheckCircle className="text-[var(--secondary-blue)] mt-1" />
                  Innovative and collaborative environment
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;