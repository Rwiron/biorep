import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      title: "Research Excellence",
      description: "Our researchers take a hands-on approach to help you see improvement at every step, no matter how severe your symptoms. Just come as you are.",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&q=80"
    },
    {
      title: "Malaria Solutions",
      description: "Developing innovative treatments for diseases affecting millions across Africa and beyond.",
      image: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=800&q=80"
    },
    {
      title: "Drug Discovery",
      description: "Cutting-edge pharmaceutical research and development for breakthrough therapies.",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content - Shows second on mobile, first on desktop */}
          <div className="space-y-6 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                Advancing Biotech Solutions for
                <span className="block text-gray-900 mt-2">
                  Unmet Medical Needs
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Providing innovative research and therapies through emerging technologies. 
                Get expert help that works, from the best in biotechnology.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#research" className="group inline-flex items-center justify-center px-8 py-4 bg-[#4e74d0] text-white font-semibold rounded-full hover:bg-[#3d5fb8] transition-all shadow-lg shadow-[#4e74d0]/25">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#about" className="inline-flex items-center justify-center px-8 py-4 text-gray-900 font-semibold hover:text-[#4e74d0] transition-colors">
                See More
                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-4 md:p-6 inline-block w-full sm:w-auto">
              <div className="flex items-center justify-around sm:justify-start gap-4 sm:gap-8">
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#4e74d0] mb-1">150M+</div>
                  <div className="text-xs md:text-sm text-gray-600">People Impacted</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div>
                  <div className="text-2xl md:text-3xl font-bold text-[#8eb348] mb-1">500K+</div>
                  <div className="text-xs md:text-sm text-gray-600">Deaths Prevented</div>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="bg-gray-50 rounded-2xl p-4 md:p-6 inline-block w-full sm:w-auto">
              <div className="text-xs md:text-sm text-gray-600 mb-3">Our Research Partners</div>
              <div className="flex items-center justify-between sm:justify-start gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-gradient-to-br from-[#4e74d0] to-[#8eb348] rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                      {i}
                    </div>
                  ))}
                  <div className="w-10 h-10 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-600 text-sm font-semibold hover:border-[#4e74d0] transition-colors cursor-pointer">
                    +
                  </div>
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-900">200+ Organizations</span>
              </div>
            </div>
          </div>

          {/* Right - Tilted Image Slider - Shows first on mobile, second on desktop */}
          <div className="relative lg:ml-12 order-1 lg:order-2">
            <div className="relative transform lg:rotate-3 transition-transform lg:hover:rotate-2">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                {/* Slider */}
                <div className="relative aspect-[4/5]">
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <div className="relative w-full h-full">
                        {/* Background Image */}
                        <img 
                          src={slide.image} 
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white space-y-2 md:space-y-3">
                          <h3 className="text-xl md:text-2xl font-bold">{slide.title}</h3>
                          <p className="text-white/95 text-xs md:text-sm leading-relaxed">
                            {slide.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Carousel Dots */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all ${
                          index === currentSlide
                            ? 'w-8 h-2 bg-white'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/75'
                        } rounded-full`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -inset-4 bg-gradient-to-br from-[#4e74d0]/5 to-[#8eb348]/5 rounded-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
