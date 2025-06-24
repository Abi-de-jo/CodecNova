import { FaMicrochip, FaShoppingCart, FaSuitcaseRolling, FaHandHoldingMedical, FaUsers, FaStore } from "react-icons/fa";

const industries = [
  { name: "Electronics", icon: <FaMicrochip /> },
  { name: "ECommerce", icon: <FaShoppingCart /> },
  { name: "Travels", icon: <FaSuitcaseRolling /> },
  { name: "Healthcare", icon: <FaHandHoldingMedical /> },
  { name: "Insurance", icon: <FaUsers /> },
  { name: "Retail", icon: <FaStore /> },
];

const Industries = () => {
   const loopItems = [...industries, ...industries];

  return (
    <section className="bg-[var(--background-cream)]  py-20 px-4 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--primary-blue)] mb-2">WHOM WE WORK</h1>
        <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto rounded-full"></div>
      </div>

      <div className="relative w-full p-3 overflow-hidden cursor-pointer">
        <div
          className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]"
        >
          {loopItems.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md border border-[var(--light-blue)] shadow-md rounded-xl min-w-[160px] sm:min-w-[180px] flex flex-col items-center justify-center p-6 transition-all hover:scale-110 hover:shadow-xl duration-300"
            >
              <div className="text-3xl text-[var(--primary-blue)] mb-3">{item.icon}</div>
              <p className="text-[var(--primary-blue)] font-semibold text-sm text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
