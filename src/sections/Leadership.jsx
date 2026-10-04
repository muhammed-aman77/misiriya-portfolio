import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { leadership } from '../data/portfolioData';
import { Users, CheckCircle2 } from 'lucide-react';

/* -------------------------------------------------------
   Leadership & Activities Section
------------------------------------------------------- */
export default function Leadership() {
  return (
    <section id="leadership" className="section leadership" aria-label="Leadership and activities">
      <div className="container">
        <SectionHeading
          label="Leadership"
          title="Leadership & Activities"
          subtitle="Departmental coordination roles that developed my communication, design and team management skills."
        />

        <div className="leadership__grid">
          {leadership.map((item, i) => (
            <motion.article
              key={item.id}
              className="leadership-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`${item.role} at ${item.organization}`}
            >
              <div className="leadership-card__icon" aria-hidden="true">
                <Users size={22} />
              </div>
              <div className="leadership-card__body">
                <div className="leadership-card__header">
                  <div>
                    <h3 className="leadership-card__role">{item.role}</h3>
                    <p className="leadership-card__org">{item.organization}</p>
                  </div>
                  {item.duration && <span className="leadership-card__duration">{item.duration}</span>}
                </div>
                {item.responsibilities.length > 0 && <ul className="leadership-card__list" role="list">
                  {item.responsibilities.map((r, j) => (
                    <li key={j} className="leadership-card__item">
                      <CheckCircle2 size={13} className="leadership-card__check" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
