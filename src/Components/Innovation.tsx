const Innovation = () => {
    return (
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 md:px-16"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2017/10/29/14/51/planning-2899922_1280.jpg')",
        }}
      >
         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
  
        <div className="relative z-10 max-w-5xl mx-auto text-center text-white space-y-6">
          <h2 className="text-4xl font-bold text-[var(--primary-blue)]">
            INNOVATION FOR FUTURE
          </h2>
  
          <div className="w-24 h-1 mx-auto bg-[var(--primary-blue)] rounded-full" />
  
          <p className="text-lg leading-relaxed font-medium">
            Novature has a very serious passion towards technology innovation and work with our customers, partners to create win-win opportunities that foster mutual business growth, excellence and exceptional value to our customer’s Business. Novature believes that our success is best reflected through your success. Our values are an indivisible synthesis of our core principles.
          </p>
  
          <p className="text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
            The two colors in our Logo emphasize our ideology. <span className="text-[var(--primary-blue)] font-semibold">Blue represents Knowledge, Power, Reliability and Responsibility</span> and <span className="text-orange-400 font-semibold">Orange represents Enthusiasm, Creativity and Innovation.</span> We contribute to the growth of our Clients by understanding their needs and delivering with quality, care, and expertise.
          </p>
        </div>
      </section>
    );
  };
  
  export default Innovation;
  