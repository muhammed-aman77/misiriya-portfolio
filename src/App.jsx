import { useCallback, useEffect, useState } from 'react';
import Navbar     from './components/Navbar';
import Footer     from './components/Footer';
import ProjectCaseStudy from './components/ProjectCaseStudy';
import Hero          from './sections/Hero';
import About         from './sections/About';
import Skills        from './sections/Skills';
import Experience    from './sections/Experience';
import Projects      from './sections/Projects';
import Certifications from './sections/Certifications';
import Education     from './sections/Education';
import Resume        from './sections/Resume';
import Contact       from './sections/Contact';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/experience.css';
import './styles/projects.css';
import './styles/certifications.css';
import './styles/education.css';
import './styles/achievements.css';
import './styles/resume.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/components.css';
import './styles/case-study.css';
import './styles/editorial.css';
import { resolveProjectRoute } from './utils/projectRoutes';

function currentLocation() {
  return `${window.location.pathname}${window.location.hash}`;
}

export default function App() {
  const [location, setLocation] = useState(currentLocation);
  const pathname = location.split('#')[0] || '/';
  const route = resolveProjectRoute(pathname);
  const isProjectPath = pathname.startsWith('/projects');

  useEffect(() => {
    const handlePopState = () => setLocation(currentLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (pathname === '/' && window.location.hash) {
      requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [location, pathname]);

  const navigate = useCallback((href) => {
    window.history.pushState({}, '', href);
    setLocation(currentLocation());
    if (!href.includes('#')) window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Navbar isProjectPage={isProjectPath} onNavigate={navigate} />
      {route ? (
        <ProjectCaseStudy project={route.project} parentProject={route.parentProject} onNavigate={navigate} />
      ) : isProjectPath ? (
        <main className="case-study-page case-study-page--not-found">
          <div className="case-study__panel">
            <p className="case-study__eyebrow">PROJECT NOT FOUND</p>
            <h1>That project page is unavailable.</h1>
            <a className="case-study__back" href="/#projects" onClick={(event) => { event.preventDefault(); navigate('/#projects'); }}>Back to projects</a>
          </div>
        </main>
      ) : (
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Experience onNavigate={navigate} />
          <Projects onNavigate={navigate} />
          <Certifications />
          <Education />
          <Resume />
          <Contact />
        </main>
      )}
      <Footer />
    </>
  );
}
