import { useState } from 'react';
import { Link } from 'react-router-dom';
import SourceList from '../components/SourceList';
import { ArrowLeft, ArrowRight, Check, LinkIcon } from '../components/icons';
import { articles } from '../data/news';
import { lastReviewed } from '../data/site';

/**
 * Shared shell for every news page: heading, optional photo, the sources behind the
 * article, a copy-link action and the other stories. The article text is passed in as children.
 */
export default function ArticleLayout({ slug, children }) {
  const article = articles.find((item) => item.slug === slug);
  const others = articles.filter((item) => item.slug !== slug);
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard access can be blocked; the address bar still has the link.
    }
  };

  return (
    <>
      <article className="bg-white pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="container-x">
          <header className="mx-auto max-w-[44rem]">
            <Link to="/#news" className="link text-sm">
              <ArrowLeft className="size-4" />
              Newsroom
            </Link>
            <p className="label mt-10">
              {article.category} · {article.date}
            </p>
            <h1 className="mt-4 text-[2rem] leading-[1.12] tracking-[-0.025em] text-balance sm:text-[2.75rem]">
              {article.title}
            </h1>
          </header>

          {article.image && (
            <figure className="mx-auto mt-10 max-w-4xl sm:mt-12">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="aspect-[3/2] w-full rounded-lg bg-surface object-cover"
              />
              {article.caption && (
                <figcaption className="mx-auto mt-3 max-w-[44rem] text-sm text-muted">{article.caption}</figcaption>
              )}
            </figure>
          )}

          <div
            className={`mx-auto max-w-[44rem] ${
              article.image ? 'mt-10 sm:mt-12' : 'mt-10 border-t border-line pt-10'
            }`}
          >
            <div className="article-body">{children}</div>

            <div className="mt-12 border-t border-line pt-6">
              <SourceList items={article.sources} />
              <p className="mt-2 text-sm text-muted">Last reviewed {lastReviewed}.</p>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
              <Link to="/#news" className="link">
                <ArrowLeft className="size-4" />
                Back to all news
              </Link>
              <button type="button" onClick={copyLink} className="btn btn-secondary px-4 py-2 text-sm">
                {copied ? <Check className="size-4 text-accent" /> : <LinkIcon className="size-4" />}
                <span aria-live="polite">{copied ? 'Link copied' : 'Copy link'}</span>
              </button>
            </div>
          </div>
        </div>
      </article>

      <aside aria-labelledby="more-news" className="bg-surface py-16 sm:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-[44rem]">
            <h2 id="more-news" className="label">
              More from the newsroom
            </h2>
            <ul className="mt-4 border-t border-line-strong">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/news/${item.slug}`}
                    className="group flex items-baseline justify-between gap-6 border-b border-line py-5"
                  >
                    <span>
                      <span className="block text-sm text-muted">
                        {item.category} · {item.date}
                      </span>
                      <span className="mt-1 block text-lg leading-snug font-semibold tracking-[-0.02em] text-ink transition-colors duration-200 group-hover:text-accent">
                        {item.title}
                      </span>
                    </span>
                    <ArrowRight className="size-5 shrink-0 translate-y-1 text-muted transition duration-200 group-hover:translate-x-1 group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
