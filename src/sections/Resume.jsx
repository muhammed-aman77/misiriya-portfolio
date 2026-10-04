import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import { personal } from '../data/portfolioData';
import { FileText, Download } from 'lucide-react';

/* -------------------------------------------------------
   Resume Section
------------------------------------------------------- */
export default function Resume() {
  return (
    <section id="resume" className="section resume" aria-label="Resume">
      <div className="container">
        <div className="resume__inner">
          <motion.div
            className="resume__content"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeading
              label="Résumé"
              title="View My Résumé"
              subtitle="A full overview of my education, skills, projects and experience."
            />

            <p className="resume__note">
              Your resume PDF is available from this page.
            </p>

            <div className="resume__actions">
              <Button
                variant="primary"
                href={personal.resumePath}
                target="_blank"
                icon={<FileText size={16} />}
                aria-label="View résumé in browser"
              >
                View Résumé
              </Button>
              <Button
                variant="secondary"
                href={personal.resumePath}
                download="misiriya-resume.pdf"
                icon={<Download size={16} />}
                aria-label="Download résumé PDF"
              >
                Download PDF
              </Button>
            </div>
          </motion.div>

          {/* Decorative resume preview card */}
          <motion.div
            className="resume__preview"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            <div className="resume__mock">
              <div className="resume__mock-header">
                <div className="resume__mock-name" />
                <div className="resume__mock-title" />
              </div>
              <div className="resume__mock-line" />
              <div className="resume__mock-section">
                <div className="resume__mock-label" />
                <div className="resume__mock-text" />
                <div className="resume__mock-text resume__mock-text--short" />
              </div>
              <div className="resume__mock-line" />
              <div className="resume__mock-section">
                <div className="resume__mock-label" />
                <div className="resume__mock-text" />
                <div className="resume__mock-text" />
                <div className="resume__mock-text resume__mock-text--short" />
              </div>
              <div className="resume__mock-line" />
              <div className="resume__mock-section">
                <div className="resume__mock-label" />
                <div className="resume__mock-pills">
                  <div className="resume__mock-pill" />
                  <div className="resume__mock-pill" />
                  <div className="resume__mock-pill" />
                  <div className="resume__mock-pill" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
