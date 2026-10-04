import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { personal } from '../data/portfolioData';

const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Internship',     href: '#experience' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education',      href: '#education' },
  { label: 'Contact',        href: '#contact' },
];

export default function Navbar({ isProjectPage = false, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  /* Track scroll for navbar style */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Intersection observer for active section */
  useEffect(() => {
    const sections = navLinks.map(({ href }) => document.querySelector(href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, [isProjectPage]);

  /* Lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = useCallback((href) => {
    setMenuOpen(false);
    if (isProjectPage) {
      onNavigate(`/${href}`);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      setTimeout(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 60);
    }
  }, [isProjectPage, onNavigate]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Brand */}
        <a
          href={isProjectPage ? '/#home' : '#home'}
          className="navbar__brand"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
          aria-label={`${personal.name} — go to top`}
        >
          <span className="navbar__brand-first">Nafeesathul</span>
          <span className="navbar__brand-last"> Misriya</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            {navLinks.map(({ label, href }) => {
              const sectionId = href.replace('#', '');
              return (
                <li key={label}>
                  <a
                    href={isProjectPage ? `/${href}` : href}
                    className={`navbar__link ${activeSection === sectionId ? 'navbar__link--active' : ''}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    aria-current={activeSection === sectionId ? 'true' : undefined}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <X size={24} />
              </motion.span>
            ) : (
              <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                <Menu size={24} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="navbar__mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="navbar__mobile-links" role="list">
              {navLinks.map(({ label, href }, i) => {
                const sectionId = href.replace('#', '');
                return (
                  <motion.li
                    key={label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.24, delay: i * 0.04 }}
                  >
                    <a
                      href={isProjectPage ? `/${href}` : href}
                      className={`navbar__mobile-link ${activeSection === sectionId ? 'navbar__mobile-link--active' : ''}`}
                      onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                      aria-current={activeSection === sectionId ? 'true' : undefined}
                    >
                      {label}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
            <div className="navbar__mobile-footer">
              <a href={`mailto:${personal.email}`} className="navbar__mobile-contact">
                {personal.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
