import { useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigationType } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';

/**
 * Keeps scrolling sensible in a single-page app:
 * - links such as "/#about" scroll to that section, from any page
 * - a new page starts at the top
 * - back/forward is left to the browser so it can restore the old position
 */
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  const navigationType = useNavigationType();
  const previousPath = useRef(null);

  useEffect(() => {
    const firstLoad = previousPath.current === null;
    const samePage = previousPath.current === pathname;
    previousPath.current = pathname;

    if (navigationType === 'POP' && !firstLoad) return;

    const behavior = samePage ? 'smooth' : 'instant';

    if (hash) {
      const target = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (target) target.scrollIntoView({ behavior });
    } else if (!firstLoad) {
      window.scrollTo({ top: 0, left: 0, behavior });
    }
  }, [pathname, hash, key, navigationType]);

  return null;
}

export default function Layout() {
  return (
    <>
      <ScrollManager />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
