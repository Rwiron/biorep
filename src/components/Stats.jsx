import ScrollAnimation from './ScrollAnimation';

export default function Stats() {
  const stats = [
    { value: "85%", label: "Of our members start with a notable to severe symptoms", size: "medium", color: "border-gray-300" },
    { value: "62%", label: "Of our members seen with a licensed therapist within 7 days", size: "large", color: "bg-[#4e74d0] text-white border-[#4e74d0]" },
    { value: "94%", label: "Of our members feel Healthshimi helps them within 12 weeks", size: "medium", color: "border-gray-300" },
    { value: "76%", label: "Of our members achieved clinically Significant Health within 12 weeks", size: "large", color: "bg-[#1a2332] text-white border-[#1a2332]" }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our numbers speak for themselves
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            BioRep Labs members have at least one thing in common: dealing dramatic improvement. 
            See how patients that complete their care.
          </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                rounded-full border-2 flex items-center justify-center flex-col
                ${stat.size === 'large' ? 'w-56 h-56 md:w-64 md:h-64' : 'w-44 h-44 md:w-52 md:h-52'}
                ${stat.color}
                hover:scale-105 transition-transform
              `}
            >
              <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 ${stat.color.includes('bg-') ? '' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <p className={`text-xs md:text-sm text-center px-4 md:px-8 leading-relaxed ${stat.color.includes('bg-') ? 'opacity-90' : 'text-gray-600'}`}>
                {stat.label}
              </p>
            </div>
          ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
