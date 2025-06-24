const Innovation = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 px-4 md:px-16"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/10/29/14/51/planning-2899922_1280.jpg')",
      }}
      aria-labelledby="innovation-heading"
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <div className="relative z-10 max-w-5xl mx-auto text-center text-white space-y-6">
        {/* Main heading (h1) for the page section */}
        <h1 id="innovation-heading" className="text-4xl font-bold text-[var(--primary-blue)]">
          Innovation for Future
        </h1>

        {/* Decorative divider (hidden from screen readers) */}
        <div className="w-24 h-1 mx-auto bg-[var(--primary-blue)] rounded-full" aria-hidden="true" />

        {/* Content sections with semantic structure */}
        <article className="text-lg leading-relaxed font-medium">
          <p>
            Novature has a very serious passion towards technology innovation and work with our customers, partners to create win-win opportunities that foster mutual business growth, excellence and exceptional value to our customer's Business. Novature believes that our success is best reflected through your success. Our values are an indivisible synthesis of our core principles.
          </p>
        </article>

        <article className="text-base text-gray-200 leading-relaxed max-w-3xl mx-auto">
          <h2 className="sr-only">Our Brand Philosophy</h2>
          <p>
            The two colors in our Logo emphasize our ideology. 
            <strong className="text-[var(--primary-blue)] font-semibold"> Blue represents Knowledge, Power, Reliability and Responsibility</strong> and 
            <strong className="text-orange-400 font-semibold"> Orange represents Enthusiasm, Creativity and Innovation.</strong> We contribute to the growth of our Clients by understanding their needs and delivering with quality, care, and expertise.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Innovation;