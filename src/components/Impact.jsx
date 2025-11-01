import ScrollAnimation from './ScrollAnimation';
import achieveImage from '../assets/image/achieve.jpeg';

export default function Impact() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="scroll-animate">
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[240px]">
          
          {/* Large Header Card - spans 3 columns, 1 row */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              86% of our members get better within 12 weeks
            </h2>
          </div>

          {/* Description Card - spans 3 columns, 1 row */}
          <div className="md:col-span-2 lg:col-span-3 bg-blue-100 rounded-2xl md:rounded-3xl p-6 md:p-10 flex items-center">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
              Our providers take a hands-on approach to help you see improvement at every step, 
              no matter how severe your symptoms. Just come as you are and let us take it from there.
            </p>
          </div>

          {/* Dark Card - 1:1 Support */}
          <div className="md:col-span-1 lg:col-span-2 bg-[#1a2332] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white hover:scale-[1.02] transition-transform flex flex-col justify-between">
            <div>
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">1:1 support from start to finish</h3>
              <p className="text-white/80 text-sm mb-4 leading-relaxed">
                Your primary staff is specialized provider for the best care and depth of context
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-xs md:text-sm font-medium hover:gap-2 transition-all">
              Discover More →
            </a>
          </div>

          {/* Blue Card - Appointments */}
          <div className="md:col-span-1 lg:col-span-2 bg-[#4e74d0] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white hover:scale-[1.02] transition-transform flex flex-col justify-between">
            <div>
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Appointments in as little as 24 hrs</h3>
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                No more wait! providers are standing by to ensure your care is high quality and accessible
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-xs md:text-sm font-medium hover:gap-2 transition-all">
              Schedule Now →
            </a>
          </div>

          {/* Light Card - Personalized */}
          <div className="md:col-span-2 lg:col-span-2 bg-gray-100 rounded-2xl md:rounded-3xl p-6 md:p-8 text-gray-900 hover:scale-[1.02] transition-transform flex flex-col justify-between">
            <div>
              <svg className="w-10 h-10 md:w-12 md:h-12 mb-4 md:mb-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Personalized plans unique to you</h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Our members' plans are tailored to your health, avoiding support that might be a bad match
              </p>
            </div>
            <a href="#" className="inline-flex items-center text-sm font-medium text-gray-900 hover:gap-2 transition-all">
              Discover More →
            </a>
          </div>

          {/* Large Image Card - Performance - spans 3 columns, 2 rows */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden hover:scale-[1.01] transition-transform relative">
            <img 
              src={achieveImage} 
              alt="Our performance achievement"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>

          {/* Performance Text Card - spans 3 columns, 2 rows */}
          <div className="md:col-span-2 lg:col-span-3 md:row-span-2 lg:row-span-2 bg-gradient-to-br from-blue-50 to-white rounded-2xl md:rounded-3xl p-6 md:p-10 flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
              Our performance results-based care, built for you
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed mb-6 md:mb-8">
              Your expert provider will assess your care and create a grounded plan, 
              weaving support from integrative to end. Choose medication, therapy, or both!
            </p>
            <a 
              href="#research" 
              className="inline-flex items-center px-8 py-4 bg-[#4e74d0] text-white font-semibold rounded-full hover:bg-[#3d5fb8] transition-all shadow-lg shadow-[#4e74d0]/25 w-fit"
            >
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
