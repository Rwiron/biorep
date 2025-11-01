export default function Performance() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80" 
              alt="Doctor"
              className="rounded-3xl shadow-2xl w-full"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Our performance results-based care, built for you
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Your expert provider will assess your care and create a grounded plan, 
              weaving support from integrative to end. Choose medication, therapy, or both!
            </p>
            <a 
              href="#research" 
              className="inline-flex items-center px-8 py-4 bg-[#4e74d0] text-white font-semibold rounded-full hover:bg-[#3d5fb8] transition-all shadow-lg shadow-[#4e74d0]/25"
            >
              Learn more
              <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
