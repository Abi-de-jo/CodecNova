const MatrixStructure = () => {
    return (
      <section className="bg-[var(--background-cream)] py-20 px-4 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          {/* LEFT: Content */}
          <div className="text-gray-800 animate-fadeInUp">
            <h1 className="text-4xl font-bold text-[var(--primary-blue)] mb-4">
              How We Work
            </h1>
            <div className="w-20 h-1 bg-[var(--primary-blue)] mb-6 rounded-full" />
  
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Matrix Structure</h3>
  
            <p className="mb-5 text-[17px] leading-relaxed">
              <span className="text-orange-500 font-semibold block mb-1">
                Continuously Strengthen Testing Competency and Domain Expertise
              </span>
              Novature Tech is an independent Software Testing and Validation company that believes success relies entirely on its Testing Competency and Domain expertise. Our structure combines both horizontal and vertical excellence to meet diverse client needs.
            </p>
  
            <div className="mb-5">
              <h4 className="font-semibold text-[var(--primary-blue)] text-lg mb-1">Horizontals</h4>
              <p className="text-[16px] leading-relaxed text-gray-700">
                Focused on strengthening core testing competencies through well-defined methodologies and innovation hubs. Our Center of Excellence leads best practices and technical evolution across projects.
              </p>
            </div>
  
            <div>
              <h4 className="font-semibold text-[var(--primary-blue)] text-lg mb-1">Verticals</h4>
              <p className="text-[16px] leading-relaxed text-gray-700">
                Dedicated domain teams ensure client ownership and alignment with sectors like <span className="font-semibold text-orange-500">Banking & Finance</span>, <span className="font-semibold text-orange-500">Healthcare</span>, <span className="font-semibold text-orange-500">Insurance</span>, <span className="font-semibold text-orange-500">Retail</span>, and <span className="font-semibold text-orange-500">Education</span>.
              </p>
            </div>
          </div>
  
           <div className="flex justify-center animate-fadeIn">
            <img
              src="/image1.jpg"
              alt="How We Work Flowchart"
              className="rounded-2xl shadow-xl w-full max-w-[600px]"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default MatrixStructure;
  