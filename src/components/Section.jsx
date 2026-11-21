import Reveal from './Reveal';

/**
 * Standard page section: a small label in the left margin, a heading and optional
 * introduction beside it, and the content aligned under the heading.
 * `tone="surface"` gives the light grey background used on alternate sections.
 */
export default function Section({ id, label, title, intro, tone = 'white', children }) {
  return (
    <section id={id} className={`py-16 sm:py-24 lg:py-28 ${tone === 'surface' ? 'bg-surface' : 'bg-white'}`}>
      <div className="container-x">
        <Reveal className="grid grid-cols-1 gap-x-10 gap-y-4 lg:grid-cols-12">
          <p className="label lg:col-span-3 lg:pt-3">{label}</p>
          <div className="lg:col-span-9">
            <h2 className="max-w-3xl text-[1.75rem] leading-[1.15] text-balance sm:text-4xl sm:leading-[1.12]">
              {title}
            </h2>
            {intro && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty">{intro}</p>}
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-x-10 sm:mt-14 lg:grid-cols-12">
          <div className="lg:col-span-9 lg:col-start-4">{children}</div>
        </div>
      </div>
    </section>
  );
}
