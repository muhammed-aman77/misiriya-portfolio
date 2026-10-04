import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { experience } from '../data/portfolioData';
import { Briefcase, CheckCircle2 } from 'lucide-react';

/* -------------------------------------------------------
   Experience Section
------------------------------------------------------- */
export default function Experience() {
  return (
    <section id="experience" className="section section--alt experience" aria-label="Work experience">
      <div className="container">
        <SectionHeading
          number="04"
          label="Experience"
          title="Internship Experience"
        />

        <div className="experience__list">
          {experience.map((item, i) => (
            <motion.article
              key={item.id}
              className="exp-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              aria-label={`${item.role} at ${item.company}`}
            >
              <div className="exp-card__icon" aria-hidden="true">
                <Briefcase size={20} />
              </div>

              <div className="exp-card__body">
                <span className="exp-card__index">{item.entryNumber} <i>—</i> {item.focus}</span>
                <div className="exp-card__header">
                  <div>
                    <h3 className="exp-card__role">{item.role}</h3>
                    <p className="exp-card__company">
                      {item.company}
                      <span className="exp-card__type"> — {item.type}</span>
                    </p>
                  </div>
                  <span className="exp-card__duration">{item.duration}</span>
                </div>

                {item.description && <p className="exp-card__description">{item.description}</p>}

                {item.highlights.length > 0 && <ul className="exp-card__highlights" role="list">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="exp-card__highlight">
                      <CheckCircle2 size={14} className="exp-card__check" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>}

                {item.technologies.length > 0 && <ul className="exp-card__tech" aria-label="Technologies used" role="list">
                  {item.technologies.map((t) => (
                    <li key={t} className="exp-card__tech-item">{t}</li>
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
