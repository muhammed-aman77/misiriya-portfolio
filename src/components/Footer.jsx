import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { personal } from '../data/portfolioData';

const year = new Date().getFullYear();

/* -------------------------------------------------------
   Footer — minimal editorial footer
------------------------------------------------------- */
export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <p className="footer__name">{personal.name}</p>
          <p className="footer__tagline">Computer Science &amp; Engineering Student</p>
        </div>

        <nav className="footer__social" aria-label="Social media links">
          <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon size={18} />
          </a>
          <a href={personal.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon size={18} />
          </a>
          <a href={`mailto:${personal.email}`} aria-label="Send email">
            <Mail size={18} />
          </a>
        </nav>

        <p className="footer__copy">
          &copy; {year} {personal.name}. Crafted with care.
        </p>
      </div>
    </footer>
  );
}
