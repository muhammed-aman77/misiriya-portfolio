import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { education } from '../data/portfolioData';

/* -------------------------------------------------------
   Education Section — Editorial timeline layout
------------------------------------------------------- */
export default function Education() {
  return (
    <section id="education" className="section education" aria-label="Educational background">
      <div className="container">
        <SectionHeading number="06" label="Education" title="Academic Background" />

        <div className="edu-timeline">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              className={`edu-item ${item.current ? 'edu-item--current' : ''} ${i === education.length - 1 ? 'edu-item--last' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Left: year/status column */}
              <div className="edu-item__aside">
                <span className="edu-item__year">{item.duration}</span>
                {item.current && (
                  <span className="edu-item__current-badge">Current</span>
                )}
              </div>

              {/* Connector */}
              <div className="edu-item__connector" aria-hidden="true">
                <div className="edu-item__dot" />
                {i < education.length - 1 && <div className="edu-item__line" />}
              </div>

              {/* Right: content */}
              <div className="edu-item__content">
                <h3 className="edu-item__degree">{item.degree}</h3>
                <p className="edu-item__institution">
                  {item.institution}
                  {item.location && <span className="edu-item__location"> — {item.location}</span>}
                </p>
                {item.university && (
                  <p className="edu-item__university">{item.university}</p>
                )}
                <div className="edu-item__grade">
                  <span className="edu-item__grade-label">{item.gradeLabel}</span>
                  <span className="edu-item__grade-value">{item.grade}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
