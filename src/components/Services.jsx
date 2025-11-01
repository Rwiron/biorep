import ScrollAnimation from './ScrollAnimation';

export default function Research() {
  return (
    <section id="research" className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <div className="mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Research & Development
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Focused on developing innovative therapies for diseases endemic to the region through cutting-edge biotechnology.
          </p>
          </div>
        </ScrollAnimation>

        {/* Bento Grid */}
        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          
          {/* Large Card - Malaria Research (spans 2 columns) */}
          <div className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#4e74d0] to-[#3d5fb8] rounded-2xl md:rounded-3xl p-6 md:p-10 text-white hover:scale-[1.02] transition-transform">
            <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium mb-4 rounded-full">
              Primary Focus
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">Malaria</h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed mb-6 md:mb-8">
              Malaria is responsible for nearly half a million deaths annually, mostly in children. 
              Our research focuses on developing novel therapeutic approaches and drug candidates 
              to combat this devastating disease.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <div className="font-semibold mb-1">Drug Discovery</div>
                <div className="text-sm text-white/80">Novel antimalarial compounds</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-2xl p-4">
                <div className="font-semibold mb-1">Chemical Biology</div>
                <div className="text-sm text-white/80">Mechanism studies</div>
              </div>
            </div>
          </div>

          {/* Tall Card - Other Diseases */}
          <div className="md:row-span-2 bg-[#8eb348] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white hover:scale-[1.02] transition-transform flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-medium mb-4 rounded-full">
                Additional Research
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Other Neglected Diseases</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Beyond malaria, we are committed to addressing other neglected tropical diseases 
                and health challenges affecting communities in the region.
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur rounded-2xl p-4">
              <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Emerging technologies and innovative approaches</span>
            </div>
          </div>

          {/* Medium Card - Partnership */}
          <div className="bg-white rounded-2xl md:rounded-3xl border-2 border-gray-200 p-6 md:p-8 hover:border-[#4e74d0] hover:shadow-xl transition-all">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-[#4e74d0]/10 rounded-2xl flex items-center justify-center mb-4 md:mb-6">
              <svg className="w-6 h-6 md:w-7 md:h-7 text-[#4e74d0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 text-gray-900">Partnering & Opportunities</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Open to collaboration with research institutions and pharmaceutical companies.
            </p>
          </div>

          {/* Medium Card - UVU Bio */}
          <div className="bg-[#1a2332] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white hover:scale-[1.02] transition-transform">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">UVU Bio Rwanda</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Strategic partnership for advancing biotechnology in the region.
            </p>
          </div>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
