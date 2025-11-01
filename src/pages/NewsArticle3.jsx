export default function NewsArticle3() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <a href="/#news" className="inline-flex items-center text-[#4e74d0] hover:text-[#3d5fb8] mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Newsroom
        </a>

        <div className="inline-block px-4 py-2 bg-[#4e74d0] text-white text-sm font-medium rounded-full mb-6">
          Funding
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          WHO budget cuts by US and recently by EU
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>October 25, 2025</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1200&q=80"
          alt="Global health funding"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The World Health Organization faces unprecedented financial challenges as major donors, 
            including the United States and European Union, announce significant budget reductions, 
            raising concerns about global health priorities and pandemic preparedness.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Funding Challenges</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The WHO is confronting a critical funding gap as traditional donor countries reassess 
            their contributions amid economic pressures and shifting political priorities. The United 
            States, historically the largest contributor, has proposed substantial reductions to its 
            WHO funding, followed by similar announcements from several European Union member states.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            These cuts come at a particularly challenging time, as the WHO continues to coordinate 
            responses to ongoing health emergencies, including disease outbreaks, humanitarian crises, 
            and the persistent effects of the COVID-19 pandemic.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact on Global Health Programs</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The budget reductions are expected to affect several critical WHO programs:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Disease surveillance and outbreak response systems</li>
            <li>Vaccination and immunization programs in low-income countries</li>
            <li>Malaria and tuberculosis control initiatives</li>
            <li>Maternal and child health services</li>
            <li>Antimicrobial resistance monitoring</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Health experts warn that these cuts could undermine years of progress in global health, 
            particularly affecting vulnerable populations in Africa and Asia who rely heavily on 
            WHO-coordinated health programs.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Regional Implications</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            For African countries, the funding cuts pose particular concerns. Many nations depend on 
            WHO technical support for building health systems, training healthcare workers, and 
            responding to disease outbreaks. The reduced funding could slow progress toward achieving 
            universal health coverage and the Sustainable Development Goals.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#4e74d0] p-8 my-12 rounded-r-2xl">
            <p className="text-lg text-gray-800 font-medium">
              "These funding cuts represent a short-sighted approach to global health security. 
              Diseases don't respect borders, and reducing WHO's capacity weakens everyone's ability 
              to respond to health threats."
            </p>
            <p className="text-gray-600 mt-4">— Global Health Policy Expert</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Alternative Funding Sources</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In response to the funding crisis, WHO leadership is actively seeking to diversify its 
            funding base. Initiatives include:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Expanding partnerships with emerging economies</li>
            <li>Strengthening collaboration with philanthropic organizations</li>
            <li>Developing innovative financing mechanisms</li>
            <li>Increasing contributions from middle-income countries</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            Some experts argue that this funding challenge could ultimately lead to a more sustainable 
            and equitable WHO, less dependent on a few large donors. However, the transition period 
            remains fraught with uncertainty.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Ahead</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The WHO has initiated comprehensive budget reforms and efficiency improvements to maximize 
            the impact of available resources. The organization is also advocating for increased 
            assessed contributions from member states to provide more predictable funding.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            As global health leaders gather for upcoming discussions, the WHO funding crisis will 
            likely dominate conversations about international cooperation, health security, and the 
            future of multilateral health organizations.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            For organizations like BioRep Labs and other regional health initiatives, these developments 
            underscore the importance of building strong local and regional capacity to address health 
            challenges, reducing overreliance on international funding streams.
          </p>
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
