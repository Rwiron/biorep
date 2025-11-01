export default function NewsArticle1() {
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
          Regulation
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Rwanda FDA gets level 4 certification by WHO
        </h1>

        <div className="flex items-center gap-4 text-gray-600 mb-8">
          <span>November 1, 2025</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
          alt="Medical regulatory facility"
          className="w-full h-[500px] object-cover rounded-3xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            In a historic achievement for African healthcare, Rwanda's Food and Drug Authority (FDA) 
            has been awarded WHO Level 4 certification, making it the fourth country on the continent 
            to reach this prestigious standard.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">A Milestone Achievement</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The World Health Organization's Level 4 certification represents the highest standard of 
            regulatory performance, indicating that Rwanda's FDA has demonstrated exceptional capacity 
            in ensuring the safety, efficacy, and quality of medical products.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This certification positions Rwanda alongside South Africa, Egypt, and Ghana as African 
            nations meeting the WHO's most stringent regulatory requirements. The achievement reflects 
            years of systematic improvement in regulatory infrastructure, technical capacity, and 
            quality management systems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Impact on Healthcare</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Level 4 certification will significantly enhance Rwanda's capacity to regulate 
            pharmaceutical products, medical devices, and vaccines. This advancement is expected to:
          </p>

          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Accelerate access to essential medicines and vaccines</li>
            <li>Attract pharmaceutical investments to the region</li>
            <li>Strengthen regional regulatory collaboration</li>
            <li>Enhance public health protection mechanisms</li>
          </ul>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Regional Leadership</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dr. Charles Karangwa, Director General of Rwanda FDA, emphasized that this certification 
            demonstrates Rwanda's commitment to pharmaceutical excellence and patient safety. "This 
            achievement positions Rwanda as a regulatory leader in the region and opens new opportunities 
            for collaboration with international partners," he stated.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The certification process involved rigorous evaluation of Rwanda FDA's regulatory systems, 
            including licensing, market surveillance, clinical trial oversight, and post-market 
            surveillance capabilities.
          </p>

          <div className="bg-blue-50 border-l-4 border-[#4e74d0] p-8 my-12 rounded-r-2xl">
            <p className="text-lg text-gray-800 font-medium">
              "This certification is not just an achievement for Rwanda, but a beacon of hope for 
              advancing healthcare standards across the African continent."
            </p>
            <p className="text-gray-600 mt-4">— WHO Regional Director for Africa</p>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Looking Forward</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            With this certification, Rwanda is well-positioned to play a crucial role in the African 
            Medicines Agency (AMA) and contribute to harmonizing regulatory standards across the continent. 
            The country's success serves as a model for other African nations working to strengthen their 
            regulatory systems.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This milestone comes at a critical time as African countries work to enhance pharmaceutical 
            self-sufficiency and ensure equitable access to quality medicines for their populations.
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
