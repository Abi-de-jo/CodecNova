import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 md:px-12 bg-[var(--background-cream)]">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
          {/* Icon */}
          <div className="mx-auto w-20 h-20 bg-[var(--light-blue)]/20 rounded-full flex items-center justify-center mb-6">
            <FaExclamationTriangle className="text-3xl text-[var(--secondary-blue)]" />
          </div>
          
          {/* Title */}
          <h2 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
            404 - Page Not Found
          </h2>
          <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto mb-6"></div>
          
          {/* Message */}
          <p className="text-xl text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          {/* Action Button */}
          <Link 
            to="/"
            className="inline-block bg-[var(--secondary-blue)] hover:bg-[var(--primary-blue)] text-white font-medium py-3 px-6 rounded-lg transition duration-200"
          >
            Return to Home
          </Link>
          
          {/* Additional Info */}
          <div className="mt-10 pt-6 border-t border-gray-100">
            <p className="text-gray-500">
              Need help? <a href="/contact" className="text-[var(--secondary-blue)] hover:underline">Contact our support team</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;