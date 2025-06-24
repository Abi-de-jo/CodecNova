const MatrixStructure = () => {
  return (
    <section 
      className="bg-[var(--background-cream)] py-20 px-4 md:px-16"
      aria-labelledby="matrix-structure-heading"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        {/* LEFT: Content */}
        <article className="text-gray-800 animate-fadeInUp">
          <header>
            <h1 id="matrix-structure-heading" className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
              How We Work: Matrix Organizational Structure
            </h1>
            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6 rounded-full" aria-hidden="true" />
          </header>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Our Dual-Axis Approach</h2>
            
            <p className="mb-5 text-[17px] leading-relaxed">
              <strong className="text-orange-500 font-semibold block mb-1">
                Continuously Strengthening Testing Competency and Domain Expertise
              </strong>
              Novature Tech is an independent Software Testing and Validation company where success relies entirely on our Testing Competency and Domain expertise. Our matrix structure uniquely combines both horizontal and vertical excellence to meet diverse client needs.
            </p>

            <section className="mb-5">
              <h3 className="font-semibold text-[var(--primary-blue)] text-lg mb-1">Horizontal Competencies</h3>
              <p className="text-[16px] leading-relaxed text-gray-700">
                Focused on strengthening core testing competencies through well-defined methodologies and innovation hubs. Our <strong>Center of Excellence</strong> leads best practices and technical evolution across all projects.
              </p>
            </section>

            <section>
              <h3 className="font-semibold text-[var(--primary-blue)] text-lg mb-1">Vertical Specializations</h3>
              <p className="text-[16px] leading-relaxed text-gray-700">
                Dedicated domain teams ensure client ownership and alignment with key sectors including:
              </p>
              <ul className="mt-2 grid grid-cols-2 gap-1">
                {['Banking & Finance', 'Healthcare', 'Insurance', 'Retail', 'Education'].map((industry) => (
                  <li key={industry} className="flex items-center">
                    <span className="text-orange-500 font-semibold">{industry}</span>
                  </li>
                ))}
              </ul>
            </section>
          </section>
        </article>

        {/* RIGHT: Image */}
        <figure className="flex justify-center animate-fadeIn" aria-labelledby="matrix-image-caption">
          <img
            src="/image1.webp"
            alt="Matrix organizational structure diagram showing horizontal competencies and vertical industry specializations"
            className="rounded-2xl shadow-xl w-full max-w-[600px]"
            loading="lazy"
            width={600}
            height={400}
          />
          <figcaption id="matrix-image-caption" className="sr-only">
            Visualization of Novature Tech's matrix structure combining horizontal testing competencies with vertical industry expertise
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default MatrixStructure;