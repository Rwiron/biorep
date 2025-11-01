import ScrollAnimation from './ScrollAnimation';

export default function News() {
  const news = [
    {
      title: 'Participants bootcamp on UVU Bio Rwanda Bioeconomy Hub',
      description: 'BioRep Labs hosts intensive bioeconomy bootcamp bringing together innovators, researchers, and entrepreneurs.',
      category: 'Events',
      color: '#8eb348',
      link: '/news/uvu-bio-bootcamp'
    },
    {
      title: 'Rwanda FDA gets level 4 certification by WHO',
      description: 'Rwanda becomes the fourth country on the continent to achieve this recognition, marking a significant milestone.',
      category: 'Regulation',
      color: '#4e74d0',
      link: '/news/rwanda-fda-who-certification'
    },
    {
      title: 'AMA, newly opened in Rwanda, appoints first CEO',
      description: 'The African Medicines Agency (AMA) launches operations in Rwanda with inaugural leadership appointment.',
      category: 'Healthcare',
      color: '#8eb348',
      link: '/news/ama-appoints-first-ceo'
    },
    {
      title: 'WHO budget cuts by US and recently by EU',
      description: 'Global health funding faces challenges as international organizations adjust priorities and allocations.',
      category: 'Funding',
      color: '#4e74d0',
      link: '/news/who-budget-cuts'
    }
  ];

  return (
    <section id="news" className="py-12 md:py-24 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <div className="mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Newsroom
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl">
            Stay updated with the latest developments in biotechnology and healthcare in the region.
          </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-all group flex flex-col h-full"
            >
              <div 
                className="inline-block px-3 py-1 text-white text-xs font-medium mb-4 w-fit rounded-md"
                style={{ backgroundColor: item.color }}
              >
                {item.category}
              </div>
              
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {item.description}
              </p>
              
              <a 
                href={item.link}
                className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:gap-2 transition-all mt-auto"
              >
                Read more
                <svg className="w-4 h-4 ml-1 group-hover:ml-0 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
