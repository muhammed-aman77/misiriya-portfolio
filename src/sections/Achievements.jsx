import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { achievements } from '../data/portfolioData';
import { Trophy, GraduationCap } from 'lucide-react';

const iconMap = {
  trophy:   Trophy,
  academic: GraduationCap,
};

/* -------------------------------------------------------
   Achievements Section
------------------------------------------------------- */
export default function Achievements() {
  return (
    <section id="achievements" className="section section--alt achievements" aria-label="Achievements and recognition">
      <div className="container">
        <SectionHeading
          number="07"
          label="Achievements"
          title="Recognition & Highlights"
        />

        <div className="achievements__grid">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;
            return (
              <motion.article
                key={item.id}
                className="achievement-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                aria-label={item.title}
              >
                <div className="achievement-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </div>
                <div className="achievement-card__body">
                  <span className="achievement-card__index">{item.icon === 'trophy' ? '02' : '01'}</span>
                  <span className="achievement-card__label">{item.label}</span>
                  <h3 className="achievement-card__title">{item.title}</h3>
                  <p className="achievement-card__desc">{item.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
