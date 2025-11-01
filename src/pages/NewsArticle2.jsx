export default function NewsArticle2() {
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
          Healthcare
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          AMA, newly opened in Rwanda, appoints first CEO
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>October 28, 2025</span>
          <span>•</span>
          <span>4 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1200&q=80"
          alt="African Medicines Agency headquarters"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            The African Medicines Agency (AMA), headquartered in Kigali, Rwanda, has appointed its 
            inaugural Chief Executive Officer, marking a significant milestone in the continent's 
            journey toward pharmaceutical independence and regulatory excellence.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Historic Appointment</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Margareth Ndomondo-Sigonda has been named as the first CEO of the African Medicines 
            Agency, bringing over 25 years of experience in pharmaceutical regulation and public health. 
            Her appointment signals the operational launch of the continental regulatory body established 
            under the African Union.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The AMA was officially inaugurated in Rwanda, chosen for its strategic location, strong 
            regulatory framework, and commitment to healthcare excellence. The agency aims to harmonize 
            medical product regulation across Africa and increase access to quality, safe, and effective 
            medicines.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Mission and Vision</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The African Medicines Agency has been established with several key objectives:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Harmonize regulatory standards across African countries</li>
            <li>Facilitate faster access to quality medical products</li>
            <li>Strengthen continental capacity for medicines regulation</li>
            <li>Promote local pharmaceutical manufacturing</li>
            <li>Combat counterfeit and substandard medical products</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Strategic Location</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Rwanda's selection as the host country for AMA headquarters reflects its impressive 
            track record in health system strengthening and regulatory development. The country's 
            recent WHO Level 4 certification further validates this choice, demonstrating the 
            sophisticated regulatory environment that will support the agency's operations.
          </p>

          <div className="bg-green-50 border-l-4 border-[#8eb348] p-8 my-12 rounded-r-2xl">
            <p className="text-lg text-gray-800 font-medium">
              "The establishment of AMA in Rwanda represents a new era for healthcare in Africa, 
              where regulatory excellence will drive equitable access to quality medicines."
            </p>
            <p className="text-gray-600 mt-4">— Dr. Margareth Ndomondo-Sigonda, CEO of AMA</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact on Regional Healthcare</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The AMA is expected to play a crucial role in addressing Africa's healthcare challenges, 
            particularly in the wake of the COVID-19 pandemic which highlighted gaps in pharmaceutical 
            self-sufficiency. By streamlining regulatory processes and promoting collaboration, the 
            agency aims to reduce the time and cost of bringing medicines to market.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Industry experts project that AMA will significantly boost pharmaceutical investment in 
            Africa, encouraging both local and international companies to establish manufacturing 
            facilities on the continent. This shift could create thousands of jobs and reduce Africa's 
            dependence on imported medicines, which currently account for over 70% of pharmaceutical 
            consumption.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Next Steps</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Under Dr. Ndomondo-Sigonda's leadership, AMA will begin implementing its strategic plan, 
            including establishing technical working groups, developing harmonized guidelines, and 
            building partnerships with national regulatory authorities across the continent.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The agency is expected to be fully operational within the next year, with plans to review 
            its first applications for medicines authorization by mid-2026.
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
