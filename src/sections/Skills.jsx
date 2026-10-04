import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { skills } from '../data/portfolioData';
import { BrainCircuit, Code2, Database, PanelsTopLeft, Wrench } from 'lucide-react';

const categoryIcons = [Code2, PanelsTopLeft, BrainCircuit, Database, Wrench];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const categoryVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const pillVariants = {
  hidden:  { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-label="Skills and technologies">
      <div className="container">
        <SectionHeading
          number="02"
          label="Skills"
          title="Technologies & Tools"
          subtitle="A focused set of technologies I work with to build intelligent and user-focused products."
        />

        <motion.div
          className="skills__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {skills.map((group, index) => {
            const Icon = categoryIcons[index] || Code2;
            return (
            <motion.div key={group.category} className={`skills__category skills__category--${index + 1}`} variants={categoryVariants}>
              <h3 className="skills__category-title">
                <span className="skills__category-icon" aria-hidden="true"><Icon size={20} strokeWidth={1.6} /></span>
                <span className="skills__category-title-text">{group.category}</span>
                <span className="skills__category-count">{String(group.items.length).padStart(2, '0')} skills</span>
              </h3>
              <motion.ul
                className="skills__pills"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                role="list"
                aria-label={`${group.category} skills`}
              >
                {group.items.map((skill) => (
                  <motion.li key={skill} variants={pillVariants}>
                    <span className="skills__pill">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          );})}
        </motion.div>
      </div>
    </section>
  );
}
