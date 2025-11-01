import ScrollAnimation from './ScrollAnimation';
import leaderImage from '../assets/image/Leader.png';

export default function About() {
  return (
    <section id="about" className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto space-y-12 md:space-y-24">
        {/* Vision & Mission */}
        <ScrollAnimation animation="scroll-animate">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8">Vision & Mission</h2>
            <div className="space-y-6 md:space-y-8">
              <div>
                <div className="inline-block px-3 py-1 bg-[#4e74d0]/10 text-[#4e74d0] text-sm font-medium mb-4">
                  Vision
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  To be a leading biotech company that provides solutions for unmet medical needs in the region and beyond.
                </p>
              </div>
              <div>
                <div className="inline-block px-3 py-1 bg-[#8eb348]/10 text-[#8eb348] text-sm font-medium mb-4">
                  Mission
                </div>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  We aim to utilize emerging technologies for the development of therapies to treat diseases endemic to the region.
                </p>
              </div>
            </div>
          </div>

          {/* Team */}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Leadership</h3>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="flex flex-col sm:flex-row items-start gap-6 md:gap-8">
                <div className="w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 rounded-2xl overflow-hidden">
                  <img 
                    src={leaderImage} 
                    alt="Alex K. Mugengana, PhD"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Alex K. Mugengana, PhD</h4>
                  <p className="text-base text-[#4e74d0] font-semibold mb-5">
                    Founder & Chief Scientific Officer
                  </p>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    Alex earned his PhD in pharmaceutical sciences from the University of Tennessee in Memphis, USA. 
                    He has accumulated experience in medicinal chemistry, chemical biology and drug discovery research 
                    from both the University of Tennessee and St. Jude Children's Research Hospital.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </ScrollAnimation>

        {/* Advisory Board & Careers */}
        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Advisory Board</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4e74d0] rounded-full"></span>
                Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#8eb348] rounded-full"></span>
                Scientific
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#4e74d0] rounded-full"></span>
                Research & Development
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-10 hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Careers</h3>
            <p className="text-gray-600 mb-4">
              There are currently no openings.
            </p>
            <p className="text-sm text-gray-500">
              Please check back for future opportunities.
            </p>
          </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
