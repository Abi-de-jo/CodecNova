import { FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-[var(--secondary-blue)] text-sm text-white px-6 py-2">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">
        {/* LEFT: Phone + Email */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-2">
            <FaPhoneAlt className="text-white" />
            <span className="whitespace-nowrap">USA: +91-XXX-XXX-XXXX</span>
          </span>
          <span className="flex items-center gap-2">
            <MdEmail className="text-white" />
            <span className="whitespace-nowrap">contact@corecNova.com</span>
          </span>
        </div>

        {/* RIGHT: Social Icons */}
        <div className="flex gap-3 mt-1 md:mt-0">
          <a
            href="#"
            aria-label="Visit our Facebook page"
            className="hover:scale-110 transition-transform"
          >
            <FaFacebook className="text-white bg-blue-600 p-1 rounded-md w-8 h-8 border border-white" />
          </a>
          <a
            href="#"
            aria-label="Visit our Twitter page"
            className="hover:scale-110 transition-transform"
          >
            <FaTwitter className="text-white bg-blue-500 p-1 rounded-md w-8 h-8 border border-white" />
          </a>
          <a
            href="#"
            aria-label="Visit our LinkedIn page"
            className="hover:scale-110 transition-transform"
          >
            <FaLinkedin className="text-white bg-blue-700 p-1 rounded-md w-8 h-8 border border-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
