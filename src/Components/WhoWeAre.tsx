import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const buildingBlocks = [
  {
    title: "Our Culture – Innovation for Future",
    content:
      "We foster innovation, agility, and futuristic thinking throughout our organization.",
  },
  {
    title: "Thoughtful Leadership",
    content:
      "Our leadership believes in mentoring, inspiring, and elevating talent for collective success.",
  },
  {
    title: "Matrix Structure",
    content:
      "Flexible, scalable structure enabling collaboration across functions and domains.",
  },
  {
    title: "Centralized Knowledge Management",
    content:
      "We retain and share best practices, tools, and learnings to stay future-ready.",
  },
  {
    title: "Advisory Council",
    content:
      "Industry experts guiding our strategy, vision, and innovation roadmap.",
  },
];

const WhoWeAre = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[var(--background-cream)] py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-3xl font-bold text-[var(--primary-blue)] mb-4">
            WHO WE ARE?
          </h1>
          
          <img
          loading="lazy"
            src="https://cdn.pixabay.com/photo/2013/01/26/04/50/man-76202_1280.jpg"
            alt="Who we are"
            className="rounded-xl mb-6 w-full h-[355px] object-cover shadow-md"
          />
          <p className="text-gray-700 leading-relaxed mb-6">
            Novature Tech is an Independent Software Testing and Quality Assurance Services Company.
            We stand for “Innovation for Future”. We implement a blend of proven and innovative approaches
            to deliver high quality, high efficiency, and cost-effective solutions.
          </p>
          <button className="bg-[var(--secondary-blue)] text-white px-5 py-2 rounded hover:bg-[var(--primary-blue)] transition font-semibold">
            READ MORE
          </button>
        </div>

         <div>
          <h1 className="text-3xl font-bold text-[var(--primary-blue)] mb-6">
            OUR BUILDING BLOCKS
            
          </h1>
          


          <div className="space-y-5">
            {buildingBlocks.map((block, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-xl overflow-hidden transition-all duration-300 shadow-md ${
                    isOpen ? "shadow-[0_4px_20px_rgba(0,0,0,0.15)]" : ""
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full flex items-center justify-between px-5 py-4 text-left text-white font-semibold transition-all duration-300 ${
                      isOpen
                        ? "bg-gradient-to-r from-[var(--secondary-blue)] to-[var(--primary-blue)]"
                        : "bg-gradient-to-r from-[var(--light-blue)] to-[var(--primary-blue)]"
                    } hover:brightness-105`}
                  >
                    <span>{block.title}</span>
                    <span className="transform transition-transform duration-300">
                      {isOpen ? (
                        <FaMinus className="text-white" />
                      ) : (
                        <FaPlus className="text-white" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`px-5 text-sm text-gray-700 bg-white transition-all duration-300 ${
                      isOpen ? "max-h-[500px] py-4" : "max-h-0 overflow-hidden"
                    }`}
                  >
                    {block.content}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
