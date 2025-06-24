const clientLogos = [
    "https://novaturetech.com/wp-content/uploads/2019/11/aion.png",
    "https://novaturetech.com/wp-content/uploads/2019/11/srd.png",
    "https://novaturetech.com/wp-content/uploads/2019/11/zenics.png",
    "https://novaturetech.com/wp-content/uploads/2019/11/molecule.png",
    "https://novaturetech.com/wp-content/uploads/2019/11/hasttra.png",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients06.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients03.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients07.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients09.jpg",
    "https://novaturetech.com/wp-content/uploads/2019/11/pioneer.png",
    "https://novaturetech.com/wp-content/uploads/2016/11/allianz.png",
    "https://novaturetech.com/wp-content/uploads/2016/11/applexus.png",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients05.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients08.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients10.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients11.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients12.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients13.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/devcare.png",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients15.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients16.jpg",
    "https://novaturetech.com/wp-content/uploads/2016/11/clients17.jpg",
  ];
  
  const TrustedClients = () => {
    return (
        <section className="bg-[var(--background-cream)] py-16 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-4xl font-bold text-[var(--primary-blue)] mb-2">TRUSTED BY</h1>
          <div className="w-20 h-1 bg-[var(--primary-blue)] mx-auto rounded-full" />
        </div>
  
        <div className="overflow-hidden relative p-10">
          <div className="flex gap-6 animate-scroll group hover:[animation-play-state:paused]">
            {clientLogos.concat(clientLogos).map((logo, index) => (
              <div key={index} className="min-w-[220px] flex items-center justify-center backdrop-blur-md rounded-md shadow-md ">
                <img
                  src={logo}
                  alt={`Client ${index}`}
                  className="w-full object-contain border border-[var(--primary-blue)] rounded-md grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default TrustedClients;
  