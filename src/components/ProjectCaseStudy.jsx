import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, FileText } from 'lucide-react';
import { ProjectVisual } from './ProjectCard';

export default function ProjectCaseStudy({ project, onNavigate }) {
  const { caseStudy = {}, technologies = [] } = project;

  return (
    <main className="case-study-page" aria-labelledby="case-study-title">
      <motion.div className="case-study__panel" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .24 }}>
        <header className="case-study__topbar">
          <a href="/#projects" onClick={(event) => { event.preventDefault(); onNavigate('/#projects'); }} className="case-study__back">← <span>Back to projects</span></a>
        </header>
        <div className="case-study__hero">
          <ProjectVisual type={project.visual} number={project.number} title={project.title} />
          <div className="case-study__hero-copy">
            <p className="case-study__eyebrow">{caseStudy.category}</p>
            <p className="case-study__number">{project.number} <span>—</span> {project.year}</p>
            <h1 id="case-study-title">{project.title}</h1>
            <p className="case-study__subtitle">{project.subtitle}</p>
            <p>{caseStudy.overview || project.description}</p>
          </div>
        </div>
        <div className="case-study__sections">
          {caseStudy.sections?.map((section, index) => (
            <CaseSection key={section.title} number={String(index + 1).padStart(2, '0')} title={section.title}>
              {section.body && <p>{section.body}</p>}
              {section.items && <ul className="case-study__focus">{section.items.map((item) => <li key={item}><ArrowUpRight size={14} aria-hidden="true" />{item}</li>)}</ul>}
              {section.technologyList && <ul className="case-study__tags">{technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>}
              {section.steps && <ol className="case-study__flow">{section.steps.map((step, stepIndex) => <li key={step}><span>{String(stepIndex + 1).padStart(2, '0')}</span>{step}{stepIndex < section.steps.length - 1 && <ArrowDownRight size={15} aria-hidden="true" />}</li>)}</ol>}
              {section.formula && <div className="emat-formula"><strong>EMAT = h(t + m) + (1 − h)(t + 2m)</strong><p><b>h</b> = hit ratio <span>·</span> <b>t</b> = TLB access time <span>·</span> <b>m</b> = memory access time</p></div>}
            </CaseSection>
          ))}
        </div>
        <footer className="case-study__footer">
          {project.projectDocument && <a href={project.projectDocument} target="_blank" rel="noopener noreferrer"><FileText size={15} /> Project document <ArrowUpRight size={15} /></a>}
          <a href="/#projects" onClick={(event) => { event.preventDefault(); onNavigate('/#projects'); }}>Back to Projects <span aria-hidden="true">↗</span></a>
        </footer>
      </motion.div>
    </main>
  );
}

function CaseSection({ number, title, children }) {
  return <section className="case-study__section"><span>{number}</span><div><h2>{title}</h2>{children}</div></section>;
}
