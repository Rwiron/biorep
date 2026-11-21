import { Link } from 'react-router-dom';
import partnershipImage from '../assets/image/achieve.jpeg';
import { sources } from '../data/sources';
import Reveal from './Reveal';
import Section from './Section';
import SourceList from './SourceList';
import { ArrowRight } from './icons';

const areas = [
  {
    title: 'Malaria',
    note: 'Primary focus',
    text: 'Malaria is responsible for around 600,000 deaths a year, mostly in young children. Our research focuses on developing novel therapeutic approaches and drug candidates to combat this devastating disease.',
    tracks: [
      { title: 'Drug discovery', text: 'Novel antimalarial compounds' },
      { title: 'Chemical biology', text: 'Mechanism studies' },
    ],
  },
  {
    title: 'Other neglected diseases',
    text: 'Beyond malaria, we are committed to addressing other neglected tropical diseases and health challenges affecting communities in the region, using emerging technologies and innovative approaches.',
    context:
      "WHO estimates that 1.495 billion people needed interventions against neglected tropical diseases in 2023. Rwanda's 2026–2030 strategy estimates that 13 million people in the country remain at risk of at least one.",
    sources: [sources.whoNtd2025, sources.rwandaNtdPlan],
  },
  {
    title: 'Partnering & opportunities',
    text: 'Open to collaboration with research institutions and pharmaceutical companies.',
    link: { to: '/#contact', label: 'Start a conversation' },
  },
  {
    title: 'UVU Bio Rwanda',
    text: "Strategic partnership for advancing biotechnology in the region. BioRep Labs completed the Rwanda Biotech Enterprise Development Programme at the UVU Bio Rwanda Bioeconomy Hub, an open-access biotech laboratory at the University of Rwanda's College of Science and Technology.",
    link: { to: '/news/uvu-bio-bootcamp', label: 'Read the story' },
    image: {
      src: partnershipImage,
      alt: 'Three people holding a programme certificate in front of a UVU Bio Rwanda Bioeconomy Hub backdrop',
      caption: 'Receiving the programme certificate at the UVU Bio Rwanda Bioeconomy Hub.',
    },
  },
];

export default function Research() {
  return (
    <Section
      id="research"
      label="Research & development"
      title="Therapies for diseases endemic to the region"
      intro="Focused on developing innovative therapies for diseases endemic to the region through cutting-edge biotechnology."
    >
      <ol className="border-t border-line-strong">
        {areas.map((area, index) => (
          <Reveal
            as="li"
            key={area.title}
            className="grid grid-cols-1 gap-x-10 gap-y-4 border-b border-line py-8 sm:grid-cols-12 sm:py-10"
          >
            <div className="sm:col-span-5">
              <p className="text-sm text-muted tabular-nums">0{index + 1}</p>
              <h3 className="mt-2 text-xl sm:text-2xl">{area.title}</h3>
              {area.note && <p className="mt-1.5 text-sm font-medium text-accent">{area.note}</p>}
            </div>

            <div className="sm:col-span-7">
              <p className="leading-relaxed">{area.text}</p>

              {area.tracks && (
                <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line pt-5 min-[420px]:grid-cols-2">
                  {area.tracks.map((track) => (
                    <div key={track.title}>
                      <dt className="font-medium text-ink">{track.title}</dt>
                      <dd className="mt-0.5 text-[0.9375rem]">{track.text}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {area.context && (
                <div className="mt-6 border-t border-line pt-5">
                  <p className="text-[0.9375rem] leading-relaxed">{area.context}</p>
                  <SourceList className="mt-3" items={area.sources} />
                </div>
              )}

              {area.image && (
                <figure className="mt-6">
                  <img
                    src={area.image.src}
                    alt={area.image.alt}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[3/2] w-full rounded-lg bg-surface object-cover object-top"
                  />
                  <figcaption className="mt-3 text-sm text-muted">{area.image.caption}</figcaption>
                </figure>
              )}

              {area.link && (
                <Link to={area.link.to} className="link mt-5">
                  {area.link.label}
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
