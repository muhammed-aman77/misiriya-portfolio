import { motion } from 'framer-motion';
import { ExternalLink, Network, FileText } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { getProjectPath } from '../utils/projectRoutes';

/* -------------------------------------------------------
   ProjectCard — premium project showcase card
   Visual areas use styled decorative artwork that can
   be replaced with real screenshots later.
------------------------------------------------------- */
export default function ProjectCard({ project, index = 0, reverse = false, onOpen }) {
  const {
    number, title, subtitle, year, description,
    technologies, role, githubUrl, liveUrl, visual,
  } = project;

  const cardVariants = {
    hidden:  { opacity: 0, y: 44 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 },
    },
  };

  return (
    <motion.article
      className={`project-card ${reverse ? 'project-card--reverse' : ''}`}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      aria-label={`Project: ${title}`}
    >
      {/* Visual area */}
      <motion.div
        className="project-card__visual"
        whileHover={{ scale: 1.018 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <ProjectVisual type={visual} number={number} title={title} />
      </motion.div>

      {/* Content area */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span className="project-card__number">{number}</span>
          <span className="project-card__year">{year}</span>
        </div>

        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
        <p className="project-card__description">{description}</p>

        {role && (
          <p className="project-card__role">
            <strong>Role:</strong> {role}
          </p>
        )}

        {technologies.length > 0 && <ul className="project-card__tech" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="project-card__tech-item">{tech}</li>
          ))}
        </ul>}

        <div className="project-card__actions">
          <a href={getProjectPath(project)} className="project-case-link" onClick={(event) => { event.preventDefault(); onOpen(project); }} aria-label={`Open case study for ${title}`}>
            View Case Study <span aria-hidden="true">↗</span>
          </a>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
              aria-label={`View ${title} on GitHub`}
            >
              <GithubIcon size={15} aria-hidden="true" />
              View Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              aria-label={`View ${title} live`}
            >
              <ExternalLink size={15} aria-hidden="true" />
              Live Demo
            </a>
          )}
          {project.projectDocument && <a className="btn btn--outline" href={project.projectDocument} target="_blank" rel="noopener noreferrer" aria-label={`Open project document for ${title}`}><FileText size={15} /> Project document</a>}
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------
   ProjectVisual — decorative cover artwork per project
   Replace the inner div content with a real <img> later.
------------------------------------------------------- */
export function ProjectVisual({ type, number, title }) {
  const cfg = { bg: '#191714', accent: '#B89A72', label: 'Virtual Memory · Address Translation', elements: ['CPU', 'TLB', 'Page Table', 'Memory'] };

  return (
    <div
      className="project-visual"
      role="img"
      style={{ '--proj-bg': cfg.bg, '--proj-accent': cfg.accent }}
      aria-label={`Concept diagram for ${title}: CPU checks the TLB; a hit leads to memory, while a miss leads through the page table to memory.`}
    >
      {/* Background */}
      <div className="project-visual__bg" />

      {/* Large project number */}
      <div className="project-visual__number" aria-hidden="true">{number}</div>

      {/* Grid lines decoration */}
      <div className="project-visual__grid" aria-hidden="true" />
      <div className="project-visual__diagram project-visual__diagram--tlb" aria-hidden="true">
        <div className="tlb-flow">
          <div className="tlb-flow__check"><span>CPU</span><i>→</i><span>TLB</span></div>
          <div className="tlb-flow__branch"><small>HIT</small><i>→</i><b>Memory</b></div>
          <div className="tlb-flow__branch"><small>MISS</small><i>→</i><b>Page Table</b><i>→</i><b>Memory</b></div>
        </div>
      </div>

      {/* Top label */}
      <div className="project-visual__top" aria-hidden="true">
        <span className="project-visual__label">{cfg.label}</span>
        <span className="project-visual__concept">CONCEPT VISUAL</span>
      </div>

      {/* Center content */}
      <div className="project-visual__center" aria-hidden="true">
        <div className={`project-visual__icon-ring project-visual__icon-ring--${type}`}>
          <Network size={38} strokeWidth={1.25} />
        </div>
      </div>

      {/* Tech chips */}
      <div className="project-visual__chips" aria-hidden="true">
        {cfg.elements.map((el) => (
          <span key={el} className="project-visual__chip">{el}</span>
        ))}
      </div>

      {/* Scanline overlay */}
      <div className="project-visual__overlay" aria-hidden="true" />
    </div>
  );
}
