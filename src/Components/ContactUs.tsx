import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    if (!name || !email || !phone || !subject || !message) {
      toast.error("Please fill in all fields!");
      return;
    }

    // Simulate successful submission
    toast.success("Your message has been sent!");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <section className="bg-[#f6f3f3] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* ADDRESS BLOCK */}
        <div className="space-y-8">
          <h2 className="text-3xl font-extrabold text-[var(--primary-blue)] mb-8">
            Get in Touch
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50">
            <div className="flex items-start mb-6">
              <div className="bg-[var(--secondary-blue)]/10 p-3 rounded-lg mr-4">
                <FaMapMarkerAlt className="text-[var(--secondary-blue)] text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[var(--secondary-blue)] mb-4">Our Headquarters</h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>CorecNova Technologies</strong><br />
                    TIDAL Park, Module 0606, 6th Floor,<br />
                    5th Street, Rajiv Gandhi Salai,<br />
                    Tharamani, Chennai – 600113,<br />
                    Tamil Nadu, India
                  </p>

                  <div className="flex items-center gap-3 text-sm">
                    <FaPhoneAlt className="text-orange-400 text-lg flex-shrink-0" />
                    <span>+91-XXX-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaEnvelope className="text-orange-400 text-lg flex-shrink-0" />
                    <span>contact@corecNova.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50">
            <h3 className="text-xl font-bold text-[var(--secondary-blue)] mb-4">Global Presence</h3>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-[var(--primary-blue)]">USA</p>
                <p className="text-gray-700">25406 N 44th Drive, Phoenix, AZ 85083</p>
                <p className="text-gray-700 mt-1">Phone: +1 623-232-1062</p>
              </div>

              <div>
                <p className="font-bold text-[var(--primary-blue)]">BAHRAIN</p>
                <p className="text-gray-700">Flat No.2, Building 275, Road 1007, Block 310 Salamania, Manama</p>
              </div>

              <div>
                <p className="font-bold text-[var(--primary-blue)]">DUBAI</p>
                <p className="text-gray-700">Building No.384, Sharjah Industrial Area 13, Sharjah, UAE</p>
              </div>
            </div>
          </div>
        </div>

        {/* FEEDBACK FORM */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--secondary-blue)] mb-6">Send Us a Message</h3>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-white/50"
          >
            {["name", "email", "phone", "subject"].map((field) => (
              <div key={field}>
                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {field}
                </label>
                <input
                  id={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  placeholder={
                    field === "email" ? "your.email@example.com" :
                    field === "phone" ? "+91 XXX XXX XXXX" :
                    field === "subject" ? "What's this about?" : "Your Name"
                  }
                  value={formData[field as keyof typeof formData]}
                  onChange={handleChange}
                  className="px-4 py-3 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                className="px-4 py-3 border border-gray-200 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[var(--secondary-blue)] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="bg-[var(--primary-blue)] hover:bg-[var(--secondary-blue)] text-white font-bold px-8 py-3 rounded-lg transition-all w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
