import { useState } from 'react';
import { sources } from '../data/sources';
import Reveal from './Reveal';
import Section from './Section';
import SourceList from './SourceList';

const faqs = [
  {
    q: 'What does BioRep Labs do?',
    a: 'BioRep Labs is a biotech company based in Kigali, Rwanda. We aim to utilize emerging technologies for the development of therapies to treat diseases endemic to the region. Malaria is our primary focus.',
  },
  {
    q: 'Why is malaria the primary focus?',
    a: 'Malaria caused an estimated 610,000 deaths in 2024. About 95% of them were in the WHO African Region, and most were children under five. Partial resistance to artemisinin, the basis of current first-line treatments, has been confirmed in Eritrea, Rwanda, Uganda and Tanzania, which makes new medicines an urgent need.',
    sources: [sources.whoMalaria2025, sources.whoArtemisinin],
  },
  {
    q: 'Which other diseases do you work on?',
    a: 'Beyond malaria, we are committed to addressing other neglected tropical diseases and health challenges affecting communities in the region.',
  },
  {
    q: 'How can organizations partner with BioRep Labs?',
    a: "Organizations interested in collaboration can contact us directly. We're open to research partnerships, funding opportunities, and joint ventures aligned with our mission.",
  },
  {
    q: "What is Rwanda's biotech ecosystem?",
    a: "Rwanda's biotech ecosystem includes research institutions, regulatory bodies like Rwanda FDA, the African Medicines Agency (AMA), startups, and established companies working together to advance life sciences. Rwanda FDA reached WHO Maturity Level 3 in December 2024, and the African Medicines Agency has operated from Kigali since October 2025.",
    sources: [sources.whoRwandaMl3, sources.hpwAma],
  },
  {
    q: 'Are there any open positions?',
    a: 'There are currently no openings. Please check back for future opportunities.',
  },
];

function Question({ id, item, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={id}
          className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
        >
          <span className="text-lg leading-snug font-medium tracking-[-0.01em] text-ink">{item.q}</span>
          <span aria-hidden="true" className="relative mt-1.5 size-4 shrink-0">
            <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-ink" />
            <span
              className={`absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-ink transition-transform duration-300 ${
                open ? 'scale-y-0' : ''
              }`}
            />
          </span>
        </button>
      </h3>
      <div
        id={id}
        inert={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-w-2xl pb-6">
            <p className="leading-relaxed">{item.a}</p>
            {item.sources && <SourceList className="mt-3" items={item.sources} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section
      id="faqs"
      label="FAQs"
      title="Frequently asked questions"
      intro="Learn more about our research, partnerships, and the biotech ecosystem in Rwanda."
    >
      <Reveal className="border-t border-line-strong">
        {faqs.map((item, index) => (
          <Question
            key={item.q}
            id={`faq-${index}`}
            item={item}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
          />
        ))}
      </Reveal>
    </Section>
  );
}
