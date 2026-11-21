import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="bg-white pt-36 pb-24 sm:pt-48 sm:pb-32">
      <div className="container-x">
        <p className="label">Error 404</p>
        <h1 className="mt-4 text-4xl tracking-[-0.03em] sm:text-5xl">We couldn&apos;t find that page</h1>
        <p className="mt-4 max-w-md text-lg leading-relaxed">
          The link may be out of date, or the page may have moved.
        </p>
        <Link to="/" className="btn btn-primary mt-8">
          Back to the home page
        </Link>
      </div>
    </section>
  );
}
