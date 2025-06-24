import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "STANDARDS BASED SOFTWARE SOLUTIONS",
    sub: "Get an opportunity to work with the experts.",
    buttonText: "Check out our Solutions...",
    link: "/solutions",
    alt: "Team collaborating on software development"
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "INNOVATE. IMPLEMENT. INSPIRE.",
    sub: "Empowering businesses through technology.",
    buttonText: "Explore Services",
    link: "/services",
    alt: "Business technology solutions"
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "DRIVEN BY EXCELLENCE",
    sub: "Delivering value with integrity.",
    buttonText: "Meet Our Team",
    link: "/team",
    alt: "Professional team working together"
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "SECURE. SCALABLE. SMART.",
    sub: "Solutions built for the future.",
    buttonText: "Our Technologies",
    link: "/tech",
    alt: "Secure technology infrastructure"
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1508780709619-79562169bc64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    heading: "TRANSFORMING INDUSTRIES DIGITALLY",
    sub: "Join us in leading the digital revolution.",
    buttonText: "Join the Movement",
    link: "/join",
    alt: "Digital transformation concept"
  },
];

const HeroSlider = () => {
  return (
    <section aria-label="Featured content slider" role="region">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination',
          type: 'bullets',
        }}
        loop
        autoplay={{ 
          delay: 4000,
          disableOnInteraction: false 
        }}
        className="h-[85vh]"
        aria-live="polite"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article 
              className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
              style={{ backgroundImage: `url(${slide.img})` }}
              aria-labelledby={`slide-heading-${slide.id}`}
            >
              {/* Hidden image for SEO and accessibility */}
              <img 
                src={slide.img} 
                alt={slide.alt} 
                className="hidden" 
                aria-hidden="true"
                loading="lazy"
              />
              
              <div 
                className="bg-black/30 backdrop-blur-[1px] p-6 rounded-md"
                role="presentation"
              >
                <h1 
                  id={`slide-heading-${slide.id}`}
                  className="text-3xl md:text-5xl font-extrabold mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] animate-fadeInDown"
                >
                  {slide.heading}
                </h1>
                <p className="text-lg md:text-xl mb-6 drop-shadow-[0_1px_3px_rgba(0,0,0,0.6)] animate-fadeInUp">
                  {slide.sub}
                </p>
                <a
                  href={slide.link}
                  className="border-2 border-white px-6 py-2 hover:bg-white rounded-md hover:text-black transition font-semibold focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/30"
                  aria-label={`${slide.buttonText} - ${slide.heading}`}
                >
                  {slide.buttonText}
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
        
        {/* Custom navigation elements for better accessibility */}
        <div className="swiper-button-next" aria-label="Next slide"></div>
        <div className="swiper-button-prev" aria-label="Previous slide"></div>
        <div className="swiper-pagination" aria-label="Slide navigation"></div>
      </Swiper>
    </section>
  );
};

export default HeroSlider;