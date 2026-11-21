import leaderImage from '../assets/image/leader.jpg';
import Reveal from './Reveal';
import Section from './Section';

const statements = [
  {
    label: 'Vision',
    text: 'To be a leading biotech company that provides solutions for unmet medical needs in the region and beyond.',
  },
  {
    label: 'Mission',
    text: 'We aim to utilize emerging technologies for the development of therapies to treat diseases endemic to the region.',
  },
];

const advisory = ['Management', 'Scientific', 'Research & Development'];

export default function About() {
  return (
    <Section
      id="about"
      tone="surface"
      label="About"
      title="Solutions for unmet medical needs, in the region and beyond"
    >
      <Reveal className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line-strong pt-8 sm:grid-cols-2">
        {statements.map((statement) => (
          <div key={statement.label}>
            <h3 className="label">{statement.label}</h3>
            <p className="mt-3 text-xl leading-snug font-medium tracking-[-0.01em] text-pretty text-ink sm:text-[1.375rem]">
              {statement.text}
            </p>
          </div>
        ))}
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line pt-8 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <h3 className="label">Leadership</h3>
          <img
            src={leaderImage}
            alt="Alex K. Mugengana, PhD"
            width="560"
            height="553"
            loading="lazy"
            decoding="async"
            className="mt-4 aspect-square w-40 rounded-lg bg-line object-cover sm:w-full"
          />
        </div>
        <div className="sm:col-span-8 sm:pt-9">
          <p className="text-2xl font-semibold tracking-[-0.02em] text-ink">Alex K. Mugengana, PhD</p>
          <p className="mt-1 font-medium text-accent">Founder &amp; Chief Scientific Officer</p>
          <p className="mt-5 leading-relaxed">
            Alex earned his PhD in pharmaceutical sciences from the University of Tennessee in Memphis, USA. He has
            accumulated experience in medicinal chemistry, chemical biology and drug discovery research from both the
            University of Tennessee and St. Jude Children&apos;s Research Hospital.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-14 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-line pt-8 sm:grid-cols-12">
        <div className="sm:col-span-4">
          <h3 className="label">Advisory Board</h3>
          <ul className="mt-4 space-y-2 font-medium text-ink">
            {advisory.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-8">
          <h3 className="label">Careers</h3>
          <p className="mt-4 font-medium text-ink">There are currently no openings.</p>
          <p className="mt-1">Please check back for future opportunities.</p>
        </div>
      </Reveal>
    </Section>
  );
}
