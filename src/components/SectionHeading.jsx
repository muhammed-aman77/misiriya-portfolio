import { motion } from 'framer-motion';

/* -------------------------------------------------------
   SectionHeading — elegant editorial section label + title
------------------------------------------------------- */
export default function SectionHeading({ label, title, subtitle, centered = false, light = false, number }) {
  return (
    <motion.div
      className={`section-heading ${centered ? 'section-heading--centered' : ''} ${light ? 'section-heading--light' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {label && <div className="section-heading__eyebrow">{number && <span className="section-heading__number">{number} / 08</span>}<span className="section-heading__label">{label}</span></div>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
      <div className="section-heading__line" aria-hidden="true" />
    </motion.div>
  );
}
