/** A compact, linked list of the outside sources behind a piece of content. */
export default function SourceList({ items, label = 'Sources', className = '' }) {
  return (
    <p className={`text-sm leading-relaxed text-muted ${className}`}>
      {label}:{' '}
      {items.map((source, index) => (
        <span key={source.href}>
          <a
            href={source.href}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line-strong underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            {source.label}
          </a>
          {index < items.length - 1 ? '; ' : '.'}
        </span>
      ))}
    </p>
  );
}
