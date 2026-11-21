import { sources } from '../data/sources';
import Reveal from './Reveal';
import Section from './Section';
import SourceList from './SourceList';

// Figures from WHO's World malaria report 2025 (data for 2024). Update with each new report.
const figures = [
  {
    value: '282',
    unit: 'million',
    label: 'malaria cases worldwide in 2024, about 9 million more than the year before.',
  },
  {
    value: '95%',
    label: 'of malaria deaths were in the WHO African Region, most of them among children under five.',
  },
  {
    value: '8',
    unit: 'countries',
    label: 'in Africa, at least, where resistance to antimalarial drugs is confirmed or suspected.',
  },
];

export default function Challenge() {
  return (
    <Section
      id="challenge"
      tone="surface"
      label="The challenge"
      title="Malaria killed an estimated 610,000 people in 2024. The medicines that treat it are under pressure."
      intro="Almost all of those deaths were in Africa, and most were young children. Partial resistance to artemisinin, the basis of today's first-line treatments, has now been confirmed in Rwanda and three other African countries. New medicines that work in new ways are needed, and that is where our research is focused."
    >
      <Reveal as="ul" className="grid grid-cols-1 gap-x-10 gap-y-8 border-t border-line-strong pt-8 sm:grid-cols-3">
        {figures.map((figure) => (
          <li key={figure.label}>
            <p className="flex items-baseline gap-2 text-ink">
              <span className="text-5xl font-semibold tracking-[-0.03em] tabular-nums">{figure.value}</span>
              {figure.unit && <span className="text-lg font-medium">{figure.unit}</span>}
            </p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed">{figure.label}</p>
          </li>
        ))}
      </Reveal>

      <Reveal className="mt-12 grid grid-cols-1 gap-x-10 gap-y-3 border-t border-line pt-8 sm:grid-cols-12">
        <h3 className="text-lg sm:col-span-4">In Rwanda</h3>
        <p className="leading-relaxed sm:col-span-8">
          Rwanda is one of four African countries where WHO has confirmed partial resistance to artemisinin. Malaria
          incidence rose from 45 cases per 1,000 people in 2023–24 to 76 the following year, before easing to 72 in
          2025–26. The country now rotates three combination treatments between areas to slow the spread of
          resistance.
        </p>
      </Reveal>

      <SourceList
        className="mt-10"
        items={[sources.whoMalaria2025, sources.whoArtemisinin, sources.rbcMalaria2026]}
      />
    </Section>
  );
}
