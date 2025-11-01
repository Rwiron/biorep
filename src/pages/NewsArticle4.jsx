export default function NewsArticle4() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <a href="/#news" className="inline-flex items-center text-[#4e74d0] hover:text-[#3d5fb8] mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Newsroom
        </a>

        <div className="inline-block px-4 py-2 bg-[#8eb348] text-white text-sm font-medium rounded-full mb-6">
          Events
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Participants bootcamp on UVU Bio Rwanda Bioeconomy Hub
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>October 20, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <img 
          src="/src/assets/image/bootcamp.jpeg"
          alt="UVU Bio Rwanda Bioeconomy Hub Bootcamp"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            BioRep Labs successfully hosted an intensive bioeconomy bootcamp at the UVU Bio Rwanda 
            Bioeconomy Hub, bringing together innovators, researchers, entrepreneurs, and students 
            to explore sustainable biotechnology solutions for Africa's unique challenges.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Empowering the Next Generation</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The three-day bootcamp attracted over 50 participants from across East Africa, including 
            university students, early-career researchers, startup founders, and industry professionals. 
            The program was designed to bridge the gap between academic knowledge and practical 
            application in the rapidly growing bioeconomy sector.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Participants engaged in hands-on workshops covering key areas of biotechnology innovation, 
            including biomanufacturing, agricultural biotechnology, pharmaceutical development, and 
            environmental sustainability. The bootcamp emphasized practical skills that can be 
            immediately applied to real-world challenges facing the continent.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Program Highlights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The bootcamp featured a comprehensive curriculum designed by industry experts and academic 
            leaders:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Introduction to bioeconomy principles and circular economy concepts</li>
            <li>Drug discovery and development for neglected tropical diseases</li>
            <li>Agricultural biotechnology for food security</li>
            <li>Biomanufacturing and scale-up processes</li>
            <li>Regulatory pathways for biotech products in Africa</li>
            <li>Entrepreneurship and commercialization strategies</li>
            <li>Funding opportunities and investor pitching skills</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Expert-Led Sessions</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The bootcamp brought together renowned experts from various sectors. Dr. Alex K. Mugengana, 
            Founder and Chief Scientific Officer of BioRep Labs, delivered keynote sessions on drug 
            discovery innovation and the importance of addressing diseases endemic to the region.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Guest speakers included representatives from the African Medicines Agency (AMA), Rwanda 
            FDA, pharmaceutical companies, and successful biotech entrepreneurs who shared their 
            experiences and insights on building sustainable biotech ventures in Africa.
          </p>

          <div className="bg-green-50 border-l-4 border-[#8eb348] p-8 my-12 rounded-r-2xl">
            <p className="text-lg text-gray-800 font-medium">
              "This bootcamp represents a crucial step in building Africa's bioeconomy capacity. 
              By empowering young innovators with practical skills and knowledge, we're investing 
              in the continent's future self-sufficiency in biotechnology."
            </p>
            <p className="text-gray-600 mt-4">— Dr. Alex K. Mugengana, Founder & CSO, BioRep Labs</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">UVU Bio Rwanda Bioeconomy Hub</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The event took place at the UVU Bio Rwanda Bioeconomy Hub, a state-of-the-art facility 
            dedicated to fostering innovation in biotechnology and sustainable development. The hub 
            provides infrastructure, mentorship, and resources for biotech startups and researchers 
            working on solutions for Africa's health, agricultural, and environmental challenges.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Equipped with modern laboratories, co-working spaces, and meeting facilities, the hub 
            serves as a catalyst for collaboration between academia, industry, and government to 
            accelerate bioeconomy development in the region.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Practical Applications and Projects</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            A key component of the bootcamp was the project development segment, where participants 
            formed teams to work on real bioeconomy challenges. Teams developed innovative solutions 
            ranging from:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Bio-based alternatives to plastic packaging using agricultural waste</li>
            <li>Affordable diagnostic tools for malaria and tuberculosis</li>
            <li>Probiotic solutions for livestock health improvement</li>
            <li>Biofortified crops addressing micronutrient deficiencies</li>
            <li>Sustainable biofuel production from local biomass</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            The top three projects received seed funding and ongoing mentorship to help transform 
            their ideas into viable ventures. Several participants have already begun exploring 
            partnerships with research institutions and potential investors.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Networking and Collaboration</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond the formal sessions, the bootcamp provided valuable networking opportunities. 
            Participants connected with peers facing similar challenges, potential collaborators, 
            and mentors who can guide their biotech journeys. Many attendees reported that the 
            relationships formed during the bootcamp would be instrumental in their future work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Evening sessions featured informal discussions, mentorship circles, and social activities 
            that fostered a strong sense of community among participants. This network is expected to 
            continue growing as alumni stay connected through online platforms and future events.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Ahead</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The success of this inaugural bootcamp has set the stage for future programs. BioRep Labs 
            and UVU Bio Rwanda plan to make this an annual event, with expanded programming and 
            increased capacity to accommodate growing interest in bioeconomy education.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Additionally, an online alumni network has been established to facilitate ongoing learning, 
            collaboration, and support. Alumni will have access to exclusive resources, advanced 
            training modules, and priority consideration for research positions and startup incubation 
            opportunities.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Call to Action</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For those interested in participating in future bootcamps or learning more about the 
            UVU Bio Rwanda Bioeconomy Hub, applications for the next session will open in early 2026. 
            Priority will be given to applicants with innovative project ideas that address specific 
            challenges in African healthcare, agriculture, or environmental sustainability.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The program continues to seek partnerships with organizations committed to building 
            Africa's bioeconomy capacity. Potential sponsors, mentors, and collaborators are 
            encouraged to reach out to explore how they can contribute to this important initiative.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#4e74d0] p-8 my-12 rounded-r-2xl">
            <p className="text-lg text-gray-800 font-medium mb-4">
              Interested in future bootcamps or bioeconomy initiatives?
            </p>
            <a 
              href="/#contact" 
              className="inline-flex items-center px-6 py-3 bg-[#4e74d0] text-white font-semibold rounded-full hover:bg-[#3d5fb8] transition-all"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <a 
            href="/#news" 
            className="inline-flex items-center text-[#4e74d0] hover:text-[#3d5fb8] font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all news
          </a>
        </div>
      </div>
    </div>
  );
}
