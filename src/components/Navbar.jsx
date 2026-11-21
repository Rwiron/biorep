import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { contact, navLinks } from '../data/site';

export default function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const progressRef = useRef(null);

  const close = () => setOpen(false);
  const active = isHome ? activeSection : '';

  // A hairline under the header once the page moves; on article pages, a reading-progress line.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
  }, [pathname]);

  // Mark the link for the section currently crossing the middle of the screen.
  useEffect(() => {
    if (!isHome) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );

    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  // While the mobile menu is open: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!open) return undefined;

    const desktop = window.matchMedia('(min-width: 768px)');
    const onKey = (event) => event.key === 'Escape' && setOpen(false);
    const onResize = () => desktop.matches && setOpen(false);

    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    desktop.addEventListener('change', onResize);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b bg-white transition-colors duration-200 ${
          scrolled || open ? 'border-line' : 'border-transparent'
        }`}
      >
        <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link to="/" onClick={close} className="flex shrink-0 items-center gap-2.5" aria-label="BioRep Labs home">
            <img src="/logo-mark.png" alt="" width="36" height="36" className="size-8 lg:size-9" />
            <span className="text-[1.0625rem] font-semibold tracking-tight text-ink">BioRep Labs</span>
          </Link>

          <ul className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <Link
                    to={`/#${link.id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`relative py-2 text-[0.9375rem] transition-colors duration-200 ${
                      isActive ? 'text-ink' : 'text-body hover:text-ink'
                    }`}
                  >
                    {link.label}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 bottom-0 h-px bg-accent transition-opacity duration-200 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link to="/#contact" onClick={close} className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex">
              Contact us
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative -mr-2.5 grid size-11 place-items-center md:hidden"
            >
              <span
                className={`absolute h-[1.5px] w-6 bg-ink transition duration-300 ${
                  open ? 'rotate-45' : '-translate-y-[4px]'
                }`}
              />
              <span
                className={`absolute h-[1.5px] w-6 bg-ink transition duration-300 ${
                  open ? '-rotate-45' : 'translate-y-[4px]'
                }`}
              />
            </button>
          </div>
        </nav>

        {!isHome && (
          <div
            ref={progressRef}
            aria-hidden="true"
            className="absolute inset-x-0 -bottom-px h-0.5 origin-left scale-x-0 bg-accent"
          />
        )}
      </header>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-white transition-[opacity,visibility] duration-200 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="container-x flex min-h-full flex-col pt-2 pb-8">
          <ul>
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  onClick={close}
                  className="block border-b border-line py-5 text-2xl font-semibold tracking-tight text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-10">
            <Link to="/#contact" onClick={close} className="btn btn-primary w-full">
              Contact us
            </Link>
            <p className="mt-6 flex flex-col gap-2 text-sm text-muted">
              <a href={contact.phoneHref}>{contact.phone}</a>
              <a href={`mailto:${contact.email}`} className="break-all">
                {contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
