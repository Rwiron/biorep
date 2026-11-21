import { Link } from 'react-router-dom';
import { contact, navLinks } from '../data/site';
import { ArrowUp } from './icons';

const footerLinks = [...navLinks, { id: 'faqs', label: 'FAQs' }, { id: 'contact', label: 'Contact' }];

export default function Footer() {
  return (
    <footer className="bg-night text-white/60">
      <div className="container-x pt-14 pb-8 sm:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-6">
            <Link to="/" className="inline-flex items-center gap-2.5" aria-label="BioRep Labs home">
              <span className="grid size-9 place-items-center rounded-md bg-white">
                <img src="/logo-mark.png" alt="" width="28" height="28" className="size-7" />
              </span>
              <span className="text-[1.0625rem] font-semibold tracking-tight text-white">BioRep Labs</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Providing solutions for unmet medical needs through emerging technologies and innovative biotech
              research.
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <h3 className="text-sm font-medium tracking-normal text-white">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link to={`/#${link.id}`} className="transition-colors duration-200 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-medium tracking-normal text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={contact.phoneHref} className="transition-colors duration-200 hover:text-white">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors duration-200 hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li>
                {contact.location}, {contact.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} BioRep Labs. All rights reserved.</p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 transition-colors duration-200 hover:text-white"
          >
            Back to top
            <ArrowUp className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
