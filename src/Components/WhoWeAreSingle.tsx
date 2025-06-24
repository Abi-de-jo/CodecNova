const WhoWeAreSingle = () => {
    return (
      <section className="bg-[var(--background-cream)] py-24 px-6 md:px-12 text-gray-800">
        <div className="max-w-6xl mx-auto">
          {/* Header with decorative elements */}
          <div className="mb-16 text-center">
            <span className="inline-block px-4 py-2 text-sm font-semibold text-[var(--secondary-blue)] bg-[var(--light-blue)]/20 rounded-full mb-4">
              OUR IDENTITY
            </span>
            <h1 className="text-4xl font-extrabold text-[var(--primary-blue)] mb-4 relative pb-6">
              WHO WE ARE
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[var(--secondary-blue)] rounded-full"></span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Blending innovation and expertise to deliver exceptional quality assurance solutions
            </p>
          </div>
  
          {/* ABOUT */}
          <div className="mb-16 p-8 bg-white rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-6">
              <div className="bg-[var(--secondary-blue)]/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-[var(--secondary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--secondary-blue)] pt-1">ABOUT CORECNOVA</h3>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed pl-14">
              <p className="text-gray-700">
                CorecNova Tech is an Independent Software Testing and Quality Assurance Services Company.
                CorecNova stands for <strong className="text-[var(--primary-blue)]">"Innovation for Future"</strong>. As the name implies,
                CorecNova Tech blends proven and innovative approaches in Software Testing to deliver
                high-quality, efficient, and cost-effective solutions. Headquartered in Chennai, India,
                we operate globally through our partner network.
              </p>
              <p className="text-gray-700">
                We offer holistic QA solutions, ensuring high quality and speedy delivery to market.
                Our core services include Functional Testing, Regression Testing, Test Automation,
                Performance Testing, Test Process Consulting, Data Analytics – ETL Testing, Agile
                Testing, Non-Functional Testing, Security Testing, Security Audit, Mobile Testing, and
                IOT Testing.
              </p>
            </div>
          </div>
  
          {/* BUILDING BLOCKS */}
          <div className="mb-16 p-8 bg-white rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-6">
              <div className="bg-[var(--secondary-blue)]/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-[var(--secondary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--secondary-blue)] pt-1">OUR BUILDING BLOCKS</h3>
            </div>
            <div className="space-y-4 text-[15px] leading-relaxed pl-14">
              <ul className="space-y-4">
                {[
                  {
                    title: "Our Culture",
                    content: "Innovation for Future – We continuously strive to deliver value by blending innovation and proven practices."
                  },
                  {
                    title: "Thoughtful Leadership",
                    content: "Our testing leaders bring over two decades of experience, building Testing Centers of Excellence for Fortune 500 companies."
                  },
                  {
                    title: "Matrix Structure",
                    content: "Teams are structured horizontally and vertically, ensuring domain depth and competency enhancement."
                  },
                  {
                    title: "Centralized Knowledge Management",
                    content: "We capture best practices, key learnings, templates, frameworks, and methodologies for scalable, efficient QA delivery."
                  },
                  {
                    title: "Advisory Council",
                    content: "A core group of test leaders and mentors shaping our strategy in sync with market needs and evolving trends."
                  }
                ].map((item, index) => (
                  <li key={index} className="flex">
                    <div className="flex-shrink-0 mt-1 mr-4">
                      <div className="w-2 h-2 bg-[var(--secondary-blue)] rounded-full"></div>
                    </div>
                    <div>
                      <span className="font-semibold text-[var(--primary-blue)]">{item.title}:</span>{" "}
                      <span className="text-gray-700">{item.content}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
  
          {/* BRAND */}
          <div className="p-8 bg-white rounded-xl shadow-sm border border-white/50 hover:shadow-md transition-shadow">
            <div className="flex items-start mb-6">
              <div className="bg-[var(--secondary-blue)]/10 p-3 rounded-lg mr-4">
                <svg className="w-6 h-6 text-[var(--secondary-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--secondary-blue)] pt-1">OUR BRAND</h3>
            </div>
            
            <div className="space-y-8 text-[15px] leading-relaxed pl-14">
              {/* WORDS */}
              <div className="p-6 bg-[var(--background-cream)] rounded-lg border border-[var(--light-blue)]/30">
                <h4 className="font-semibold text-lg text-[var(--primary-blue)] mb-3">WORDS – COMPANY NAME</h4>
                <p className="text-gray-700">
                  Novature is derived from "Nova" (Innovation) and "Ture" (Future) — together symbolizing
                  <strong className="text-[var(--primary-blue)]"> "Innovation for Future"</strong>.
                </p>
              </div>
  
              {/* COLORS */}
              <div className="p-6 bg-[var(--background-cream)] rounded-lg border border-[var(--light-blue)]/30">
                <h4 className="font-semibold text-lg text-[var(--primary-blue)] mb-3">COLOURS – LOGO</h4>
                <p className="text-gray-700">
                  Our logo colors reflect our values: <strong className="text-[var(--primary-blue)]">Blue</strong> stands for knowledge, power,
                  reliability, and responsibility. <strong className="text-orange-400">Orange</strong> represents enthusiasm,
                  innovation, creativity, and vibrancy.
                </p>
                <div className="flex items-center mt-4 space-x-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-[var(--primary-blue)] mr-2"></div>
                    <span className="text-sm">Trust & Knowledge</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-orange-400 mr-2"></div>
                    <span className="text-sm">Innovation</span>
                  </div>
                </div>
                <p className="mt-4 text-gray-700">
                  We grow with our clients by understanding their needs and delivering dependable,
                  high-quality results through deep technical expertise and innovative thinking.
                </p>
              </div>
  
              {/* SHAPE */}
              <div className="p-6 bg-[var(--background-cream)] rounded-lg border border-[var(--light-blue)]/30">
                <h4 className="font-semibold text-lg text-[var(--primary-blue)] mb-3">SHAPE – LOGO</h4>
                <p className="text-gray-700">
                  The logo's upward arrow shape represents <strong>growth</strong>. This symbolizes the
                  blend of <span className="text-[var(--secondary-blue)] font-medium">technical expertise</span> (blue)
                  and <span className="text-orange-400 font-medium">innovation</span> (orange).
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[var(--primary-blue)] to-orange-400 clip-path-arrow"></div>
                </div>
                <p className="mt-4 text-gray-700">
                  Our belief: sustainable growth is driven by a structured platform and continuous innovation.
                </p>
                <p className="mt-2 text-gray-700">
                  The solid blue blocks depict technology; orange depicts innovation. Growth is the
                  product of both.
                </p>
                <p className="mt-4 text-gray-700 border-t border-gray-100 pt-4">
                  We uphold a strict <strong className="text-[var(--primary-blue)]">zero-tolerance policy</strong> against bribery and corruption,
                  reinforcing our commitment to ethics and transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhoWeAreSingle;