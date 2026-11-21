import { Link } from 'react-router-dom';
import { articles } from '../data/news';
import Reveal from './Reveal';
import Section from './Section';
import { ArrowRight } from './icons';

export default function News() {
  const [featured, ...rest] = articles;

  return (
    <Section
      id="news"
      tone="surface"
      label="Newsroom"
      title="News and briefings"
      intro="Stay updated with the latest developments in biotechnology and healthcare in the region."
    >
      <Reveal>
        <Link
          to={`/news/${featured.slug}`}
          className="group grid grid-cols-1 gap-x-10 gap-y-6 border-t border-line-strong pt-8 sm:grid-cols-12"
        >
          <img
            src={featured.image}
            alt={featured.imageAlt}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] w-full rounded-lg bg-line object-cover sm:col-span-6"
          />
          <div className="sm:col-span-6">
            <p className="label">
              {featured.category} · {featured.date}
            </p>
            <h3 className="mt-3 text-xl leading-snug transition-colors duration-200 group-hover:text-accent sm:text-2xl sm:leading-snug">
              {featured.title}
            </h3>
            <p className="mt-3 leading-relaxed">{featured.description}</p>
            <span className="link mt-5">
              Read the story
              <ArrowRight className="size-4" />
            </span>
          </div>
        </Link>
      </Reveal>

      <Reveal as="ul" className="mt-12 border-t border-line">
        {rest.map((article) => (
          <li key={article.slug}>
            <Link
              to={`/news/${article.slug}`}
              className="group grid grid-cols-1 gap-x-10 gap-y-2 border-b border-line py-6 sm:grid-cols-12 sm:items-baseline"
            >
              <p className="sm:col-span-3">
                <span className="label">{article.category}</span>
                <span className="text-sm text-muted sm:mt-1 sm:block">
                  <span className="sm:hidden"> · </span>
                  {article.date}
                </span>
              </p>
              <h3 className="text-lg leading-snug transition-colors duration-200 group-hover:text-accent sm:col-span-8">
                {article.title}
              </h3>
              <ArrowRight className="hidden size-5 justify-self-end text-muted transition duration-200 group-hover:translate-x-1 group-hover:text-accent sm:col-span-1 sm:block" />
            </Link>
          </li>
        ))}
      </Reveal>
    </Section>
  );
}
