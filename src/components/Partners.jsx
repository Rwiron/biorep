import ScrollAnimation from './ScrollAnimation';

export default function Partners() {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-8 bg-[#1a2332]">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animation="scroll-animate-fade">
          <h2 className="text-white text-center text-base md:text-xl font-medium mb-8 md:mb-12">
            Trusted By The 1000+ Modern Teams And Companies
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animation="scroll-animate" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-12 items-center justify-items-center">
            <div className="text-white text-lg md:text-2xl font-bold">PAPERZ</div>
            <div className="text-white text-xl md:text-3xl font-serif">Dorfus</div>
            <div className="text-white text-lg md:text-2xl font-bold">Martino</div>
            <div className="text-white text-lg md:text-2xl font-bold">square</div>
            <div className="text-white text-lg md:text-2xl font-bold">Gobona</div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
