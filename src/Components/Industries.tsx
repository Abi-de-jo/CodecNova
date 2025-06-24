import { FaMicrochip, FaShoppingCart, FaSuitcaseRolling, FaHandHoldingMedical, FaUsers, FaStore } from "react-icons/fa";

const industries = [
  { name: "Electronics", icon: <FaMicrochip />, slug: "electronics" },
  { name: "ECommerce", icon: <FaShoppingCart />, slug: "ecommerce" },
  { name: "Travels", icon: <FaSuitcaseRolling />, slug: "travel" },
  { name: "Healthcare", icon: <FaHandHoldingMedical />, slug: "healthcare" },
  { name: "Insurance", icon: <FaUsers />, slug: "insurance" },
  { name: "Retail", icon: <FaStore />, slug: "retail" },
];

const Industries = () => {
  const loopItems = [...industries, ...industries];

  return (
    <section 
      className="bg-[var(--background-cream)] py-20 px-4 md:px-16 overflow-hidden"
      aria-labelledby="industries-heading"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 
          id="industries-heading" 
          className="text-4xl font-bold text-[var(--primary-blue)] mb-2"
          itemProp="name"
        >
          WHOM WE WORK WITH
        </h1>
        <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto rounded-full" aria-hidden="true"></div>
      </div>

      <div className="relative w-full p-3 overflow-hidden">
        <div
          className="flex gap-6 animate-scroll whitespace-nowrap hover:[animation-play-state:paused]"
          role="list"
          aria-label="Industries we serve"
        >
          {loopItems.map((item, index) => (
            <article
              key={`${item.slug}-${index}`}
              className="bg-white/70 backdrop-blur-md border border-[var(--light-blue)] shadow-md rounded-xl min-w-[160px] sm:min-w-[180px] flex flex-col items-center justify-center p-6 transition-all hover:scale-110 hover:shadow-xl duration-300"
              role="listitem"
              itemScope
              itemType="https://schema.org/Organization"
            >
              <a 
                href={`/industries/${item.slug}`}
                className="flex flex-col items-center"
                aria-label={`View our ${item.name} industry solutions`}
                itemProp="url"
              >
                <div 
                  className="text-3xl text-[var(--primary-blue)] mb-3"
                  aria-hidden="true"
                  itemProp="image"
                >
                  {item.icon}
                </div>
                <h2 
                  className="text-[var(--primary-blue)] font-semibold text-sm text-center"
                  itemProp="name"
                >
                  {item.name}
                </h2>
              </a>
              <meta itemProp="description" content={`${item.name} industry solutions`} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;