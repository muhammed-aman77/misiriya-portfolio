import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/portfolioData';
import { getProjectPath } from '../utils/projectRoutes';

/* -------------------------------------------------------
   Projects Section
------------------------------------------------------- */
export default function Projects({ onNavigate }) {
  return (
    <section id="projects" className="section projects" aria-label="Portfolio projects">
      <div className="container">
        <SectionHeading
          number="03"
          label="Projects"
          title="Selected Work"
          subtitle="Academic work exploring computer systems and memory performance."
        />

        {/* Main projects */}
        <div className="projects__list">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              reverse={i % 2 === 1}
              onOpen={(project) => onNavigate(getProjectPath(project))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
