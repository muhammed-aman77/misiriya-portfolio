import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Folder, Mail, FileText } from 'lucide-react';
import SocialLinks from '../components/SocialLinks';
import Button from '../components/Button';
import { personal } from '../data/portfolioData';

/* -------------------------------------------------------
   Hero Section — Typography-focused, no video
------------------------------------------------------- */
export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);

  const scrollTo = (id) => () =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero" ref={sectionRef} aria-label="Hero — introduction">
      {/* Decorative background grid */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-grid" />
        <div className="hero__bg-blob hero__bg-blob--1" />
        <div className="hero__bg-blob hero__bg-blob--2" />
      </div>

      <div className="hero__inner container">
        <motion.div className="hero__content" style={{ y: textY }}>

          {/* Location label */}
          <motion.div
            className="hero__eyebrow"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__eyebrow-line" aria-hidden="true" />
            <span>COMPUTER SCIENCE &nbsp;·&nbsp; SOFTWARE &amp; SECURITY</span>
          </motion.div>
          <p className="hero__location">KANNUR, KERALA, INDIA <span>—</span> PORTFOLIO</p>

          {/* Main name — largest element */}
          <motion.h1
            className="hero__name"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="hero__name-first">NAFEESATHUL</span>
            <span className="hero__name-last">MISRIYA<br />SHAMINAS<span className="hero__name-period">.</span></span>
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="hero__divider"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Professional direction */}
          <motion.div
            className="hero__directions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="hero__direction">
              Computer Science &amp; Engineering Student
            </p>
            <span className="hero__direction-sep" aria-hidden="true">/</span>
            <p className="hero__direction">
              Software Development · Cyber Security · AI/ML · Embedded Systems
            </p>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="hero__tagline"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
          >
              {personal.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="primary"
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollTo('#projects')(); }}
              icon={<Folder size={15} />}
            >
              View Projects
            </Button>
            <Button
              variant="secondary"
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo('#contact')(); }}
              icon={<Mail size={15} />}
            >
              Let's Connect
            </Button>
            <Button
              variant="ghost"
              href={personal.resumePath}
              target="_blank"
              icon={<FileText size={15} />}
            >
              View Résumé
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <SocialLinks size="md" />
          </motion.div>
        </motion.div>

        {/* Right — decorative typographic composition */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <div className="hero__art">
              <div className="hero__art-orbit-label">Computer Science</div>
            <div className="hero__art-badge">
              <span className="hero__art-badge-text">CSE</span>
            </div>
            <div className="hero__art-ring hero__art-ring--lg" />
            <div className="hero__art-ring hero__art-ring--sm" />
            <div className="hero__art-lines">
              <span /><span /><span /><span />
            </div>
            <div className="hero__art-card hero__art-card--1">
              <div className="hero__art-card-dot" />
              <div className="hero__art-card-bar" />
              <div className="hero__art-card-bar hero__art-card-bar--short" />
            </div>
            <div className="hero__art-card hero__art-card--2">
              <div className="hero__art-card-label">Cyber Security</div>
              <div className="hero__art-card-value">Ethical Hacking</div>
            </div>
            <div className="hero__art-card hero__art-card--3">
              <div className="hero__art-card-label">Embedded Systems</div>
              <div className="hero__art-card-value">IoT · AI / ML</div>
            </div>
            <div className="hero__art-word hero__art-word--1">Python</div>
            <div className="hero__art-word hero__art-word--2">Security</div>
            <div className="hero__art-index">01 <span>—</span> 08</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="hero__scroll-cta"
        onClick={scrollTo('#about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        aria-label="Scroll to About section"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} />
        </motion.span>
      </motion.button>
    </section>
  );
}
