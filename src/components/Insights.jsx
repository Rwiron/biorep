import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { topics } from '../data/insights';
import { lastReviewed } from '../data/site';
import Reveal from './Reveal';
import Section from './Section';
import SourceList from './SourceList';
import { ArrowRight } from './icons';

/** Tabbed briefing on the field around our research. Content lives in data/insights.js. */
export default function Insights() {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);
  const topic = topics[selected];

  // Arrow keys move between tabs, as people expect from a tab list.
  const handleKeyDown = (event) => {
    const last = topics.length - 1;
    let next = null;
    if (event.key === 'ArrowRight') next = selected === last ? 0 : selected + 1;
    if (event.key === 'ArrowLeft') next = selected === 0 ? last : selected - 1;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = last;
    if (next === null) return;

    event.preventDefault();
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <Section
      id="insights"
      label="Insights"
      title="The landscape around our research"
      intro="The science, funding and institutions that shape drug discovery for malaria and neglected diseases in the region. Every item links to its source."
    >
      <Reveal>
        <div className="border-b border-line-strong">
          <div
            role="tablist"
            aria-label="Insight topics"
            onKeyDown={handleKeyDown}
            className="-mx-5 -mb-px flex gap-x-8 overflow-x-auto px-5 [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {topics.map((item, index) => {
              const isSelected = index === selected;
              return (
                <button
                  key={item.id}
                  ref={(element) => {
                    tabRefs.current[index] = element;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isSelected}
                  aria-controls={`panel-${item.id}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelected(index)}
                  className={`shrink-0 border-b-2 pt-1 pb-3.5 text-[0.9375rem] font-medium whitespace-nowrap transition-colors duration-200 ${
                    isSelected ? 'border-accent text-ink' : 'border-transparent text-muted hover:text-ink'
                  }`}
                >
                  {item.title}
                </button>
              );
            })}
          </div>
        </div>

        <div role="tabpanel" id={`panel-${topic.id}`} aria-labelledby={`tab-${topic.id}`} className="pt-8">
          <p className="max-w-2xl text-lg leading-relaxed text-pretty">{topic.intro}</p>

          {topic.listTitle && <h3 className="label mt-10">{topic.listTitle}</h3>}

          <ul className={`border-t border-line ${topic.listTitle ? 'mt-4' : 'mt-8'}`}>
            {topic.items.map((item) => (
              <li
                key={item.title}
                className="grid grid-cols-1 gap-x-10 gap-y-2 border-b border-line py-7 sm:grid-cols-12"
              >
                <p className="text-sm text-muted tabular-nums sm:col-span-2 sm:pt-1">{item.date}</p>
                <div className="sm:col-span-10">
                  <h4 className="text-lg leading-snug">{item.title}</h4>
                  <p className="mt-2 leading-relaxed">{item.text}</p>
                  <SourceList
                    className="mt-3"
                    label={item.sources.length > 1 ? 'Sources' : 'Source'}
                    items={item.sources}
                  />
                  {item.to && (
                    <Link to={item.to} className="link mt-3 text-sm">
                      Read more on this site
                      <ArrowRight className="size-3.5" />
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-muted">Last reviewed {lastReviewed}.</p>
      </Reveal>
    </Section>
  );
}
