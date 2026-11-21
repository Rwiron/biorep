import { Link } from 'react-router-dom';
import labImage from '../assets/image/lab.jpg';
import { ArrowRight } from './icons';

const facts = [
  { label: 'Primary focus', value: 'Malaria' },
  { label: 'Based in', value: 'Kigali, Rwanda' },
  { label: 'Hub partner', value: 'UVU Bio Rwanda' },
];

export default function Hero() {
  return (
    <section id="top" className="bg-white pt-28 sm:pt-36 lg:pt-44">
      <div className="container-x">
        <div className="max-w-4xl">
          <p className="label">Biotech research · Kigali, Rwanda</p>
          <h1 className="mt-5 text-[2.5rem] leading-[1.06] tracking-[-0.03em] text-balance sm:text-6xl lg:text-[4.25rem]">
            Advancing biotech solutions for unmet medical needs
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty sm:text-xl sm:leading-relaxed">
            BioRep Labs uses emerging technologies to develop therapies for diseases endemic to the region, beginning
            with malaria.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link to="/#research" className="btn btn-primary">
              Our research
            </Link>
            <Link to="/#contact" className="link">
              Partner with us
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        <img
          src={labImage}
          alt="A researcher working at a bench in a laboratory lined with analytical instruments"
          width="1800"
          height="1200"
          fetchPriority="high"
          className="mt-14 aspect-[4/3] w-full rounded-lg bg-surface object-cover object-[center_60%] sm:mt-16 sm:aspect-[2/1] lg:aspect-[21/9]"
        />

        <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {facts.map((fact) => (
            <div key={fact.label} className="py-5 sm:px-8 sm:py-8 sm:first:pl-0">
              <dt className="label">{fact.label}</dt>
              <dd className="mt-1.5 text-lg font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
