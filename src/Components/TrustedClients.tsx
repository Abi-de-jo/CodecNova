const clientLogos = [
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/aion.png",
    alt: "Aion Digital - Novature Tech Client",
    name: "Aion Digital"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/srd.png",
    alt: "SRD - Novature Tech Client",
    name: "SRD"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/zenics.png",
    alt: "Zenics - Novature Tech Client",
    name: "Zenics"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/molecule.png",
    alt: "Molecule Software - Novature Tech Client",
    name: "Molecule Software"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/hasttra.png",
    alt: "Hasttra Solutions - Novature Tech Client",
    name: "Hasttra Solutions"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients06.jpg",
    alt: "Infosys - Novature Tech Client",
    name: "Infosys"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients03.jpg",
    alt: "TCS - Novature Tech Client",
    name: "Tata Consultancy Services"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients07.jpg",
    alt: "Wipro - Novature Tech Client",
    name: "Wipro"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients09.jpg",
    alt: "Tech Mahindra - Novature Tech Client",
    name: "Tech Mahindra"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2019/11/pioneer.png",
    alt: "Pioneer Solutions - Novature Tech Client",
    name: "Pioneer Solutions"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/allianz.png",
    alt: "Allianz - Novature Tech Client",
    name: "Allianz"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/applexus.png",
    alt: "Applexus Technologies - Novature Tech Client",
    name: "Applexus Technologies"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients05.jpg",
    alt: "Accenture - Novature Tech Client",
    name: "Accenture"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients08.jpg",
    alt: "HCL Technologies - Novature Tech Client",
    name: "HCL Technologies"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients10.jpg",
    alt: "Cognizant - Novature Tech Client",
    name: "Cognizant"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients11.jpg",
    alt: "Capgemini - Novature Tech Client",
    name: "Capgemini"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients12.jpg",
    alt: "IBM - Novature Tech Client",
    name: "IBM"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients13.jpg",
    alt: "Deloitte - Novature Tech Client",
    name: "Deloitte"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/devcare.png",
    alt: "DevCare Solutions - Novature Tech Client",
    name: "DevCare Solutions"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients15.jpg",
    alt: "Microsoft - Novature Tech Client",
    name: "Microsoft"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients16.jpg",
    alt: "Oracle - Novature Tech Client",
    name: "Oracle"
  },
  {
    src: "https://novaturetech.com/wp-content/uploads/2016/11/clients17.jpg",
    alt: "SAP - Novature Tech Client",
    name: "SAP"
  }
];

const TrustedClients = () => {
  return (
    <section 
      className="bg-[var(--background-cream)] py-16 px-4 md:px-16"
      aria-labelledby="trusted-clients-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-10">
          <h1 id="trusted-clients-heading" className="text-4xl font-bold text-[var(--primary-blue)] mb-2">
            Trusted by Industry Leaders
          </h1>
          <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto rounded-full" aria-hidden="true" />
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We're proud to partner with innovative organizations across multiple industries
          </p>
        </header>

        <div className="overflow-hidden relative p-10" aria-hidden="true">
          {/* First marquee row (visible) */}
          <div className="flex gap-6 animate-scroll group hover:[animation-play-state:paused] mb-6">
            {clientLogos.map((logo, index) => (
              <figure 
                key={`first-${index}`} 
                className="min-w-[220px] flex items-center justify-center bg-white/80 backdrop-blur-md rounded-md shadow-md p-4 hover:shadow-lg transition-all"
              >
                <img
                  loading="lazy"
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={60}
                  className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
                <figcaption className="sr-only">{logo.name}</figcaption>
              </figure>
            ))}
          </div>
          
 
        </div>

        {/* Hidden structured data for SEO */}
        <div className="sr-only" itemScope itemType="https://schema.org/ItemList">
          <h2>Our Valued Clients</h2>
          <ul>
            {clientLogos.map((logo, index) => (
              <li key={`seo-${index}`} itemProp="itemListElement">
                {logo.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TrustedClients;