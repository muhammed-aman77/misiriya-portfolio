import { motion } from 'framer-motion';

/* -------------------------------------------------------
   TimelineItem — vertical timeline entry for education
   and experience
------------------------------------------------------- */
export default function TimelineItem({ item, index = 0, isLast = false }) {
  const { degree, role, institution, organization, university, duration, grade, current, type } = item;

  const heading = degree || role;
  const sub = institution || organization;

  return (
    <motion.div
      className={`timeline-item ${isLast ? 'timeline-item--last' : ''} ${current ? 'timeline-item--current' : ''}`}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
    >
      <div className="timeline-item__dot" aria-hidden="true">
        {current && <span className="timeline-item__dot-inner" />}
      </div>
      <div className="timeline-item__content">
        <div className="timeline-item__header">
          <h3 className="timeline-item__title">{heading}</h3>
        {duration && <span className="timeline-item__duration">{duration}</span>}
        </div>
        <p className="timeline-item__institution">{sub}</p>
        {university && <p className="timeline-item__university">{university}</p>}
        {type && <p className="timeline-item__type">{type}</p>}
        {grade && (
          <span className={`timeline-item__grade ${current ? 'timeline-item__grade--active' : ''}`}>
            {grade}
          </span>
        )}
      </div>
    </motion.div>
  );
}
