import { motion } from 'framer-motion';
import { ExternalLink, Clock, Award } from 'lucide-react';

/* -------------------------------------------------------
   CertificationCard — clean certificate display card
------------------------------------------------------- */
export default function CertificationCard({ cert, index = 0 }) {
  const { title, issuer, date, duration, certificateUrl } = cert;

  return (
    <motion.article
      className="cert-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      aria-label={`Certificate: ${title} from ${issuer}`}
    >
      <div className="cert-card__icon" aria-hidden="true">
        <Award size={22} />
      </div>
      <span className="cert-card__index">{String(index + 1).padStart(2, '0')} <i>—</i> CREDENTIAL</span>
      <div className="cert-card__body">
        <p className="cert-card__issuer">{issuer}</p>
        <h3 className="cert-card__title">{title}</h3>
        <div className="cert-card__meta">
          <span className="cert-card__date">{date}</span>
          {duration && (
            <span className="cert-card__duration">
              <Clock size={12} aria-hidden="true" />
              {duration}
            </span>
          )}
        </div>
      </div>
      <div className="cert-card__footer">
        {certificateUrl ? (
          <a
            href={certificateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card__link"
            aria-label={`View certificate: ${title}`}
          >
            View Certificate
            <ExternalLink size={13} aria-hidden="true" />
          </a>
        ) : (
          <span className="cert-card__placeholder">Certificate available upon request</span>
        )}
      </div>
    </motion.article>
  );
}
