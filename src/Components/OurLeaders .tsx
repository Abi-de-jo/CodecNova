import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";

const leaders = [
  {
    name: "Jaleel Abuthahir Mohamed Ismail",
    title: "Founder & Chief Executive Officer",
    experience: "20+ Years in Global QA Leadership",
    image: "https://novaturetech.com/wp-content/uploads/2019/11/jaleel1.jpg",
    bio: `A visionary in software quality assurance, Jaleel brings over two decades of leadership experience working with top-tier global enterprises like Citibank, Wells Fargo, Ameriprise, AT&T, and CIGNA. He specializes in building Testing Centers of Excellence, driving organizational maturity, and architecting high-impact QA strategies that deliver measurable business value.`,
    email: "jaleel@novaturetech.com",
    linkedin: "#"
  },
  {
    name: "Gopalan Ramachandran",
    title: "Director & Head of Operations",
    experience: "30+ Years in IT & Banking",
    image: "https://novaturetech.com/wp-content/uploads/2019/11/gr1.jpg",
    bio: `Gopalan is a seasoned industry expert with a rare blend of deep domain knowledge in Investment Banking and proven excellence in IT leadership. With decades of experience in TCS and Virtusa Polaris, he has successfully led consulting, product development, and business transformation initiatives across diverse sectors with a strategic, results-driven approach.`,
    email: "gr@novaturetech.com",
    linkedin: "#"
  },
];

const OurLeaders = () => {
  return (
    <section className="bg-[var(--background-cream)] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="inline-flex items-center gap-2 text-[var(--secondary-blue)] text-sm font-semibold mb-4">
          <RiUserStarFill className="text-lg" />
          OUR LEADERS
        </span>
        <h2 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4">
          Visionaries Behind Our Excellence
        </h2>
        <div className="w-24 h-1 bg-[var(--secondary-blue)] mx-auto"></div>
      </div>

      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:gap-12">
        {leaders.map((leader, idx) => (
          <div
            key={idx}
            className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--light-blue)]/5 to-[var(--secondary-blue)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Top Section */}
            <div className="relative flex flex-col items-center text-center px-8 pt-12 pb-8 bg-gradient-to-br from-[var(--light-blue)] to-[var(--secondary-blue)] text-white">
              
              
              <div className="relative items-center justify-center z-10">
                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="w-36 h-36 rounded-full border-4 inline-block border-white/90 object-cover shadow-xl mb-5 transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="text-2xl font-bold mb-2">{leader.name}</h3>
                <p className="text-sm font-medium opacity-90 mb-1">{leader.title}</p>
                <p className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full inline-block">
                  {leader.experience}
                </p>
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative bg-white px-8 py-8 text-gray-800">
              <p className="text-sm leading-relaxed text-gray-700 mb-6">
                {leader.bio}
              </p>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-5">
                <a 
                  href={`mailto:${leader.email}`}
                  className="flex items-center gap-2 text-sm font-semibold text-[var(--primary-blue)] hover:text-[var(--secondary-blue)] transition-colors"
                >
                  <FaEnvelope className="text-[var(--secondary-blue)]" />
                  {leader.email}
                </a>
                
                <a 
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary-blue)] hover:text-[var(--primary-blue)] transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurLeaders;