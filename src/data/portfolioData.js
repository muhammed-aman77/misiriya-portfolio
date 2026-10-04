// Verified portfolio content for Nafeesathul Misriya Shaminas.
export const personal = {
  name: 'Nafeesathul Misriya Shaminas',
  nameShort: 'Misriya',
  titles: ['Computer Science & Engineering Student'],
  tagline: 'Third-year B.E. student interested in software development and cyber security, with technical exposure to AI/ML and embedded systems.',
  location: 'Kannur, Kerala, India',
  email: 'misriyashaminas1@gmail.com',
  phone: '90614555095',
  linkedin: 'https://www.linkedin.com/in/misiriya-shaminas-523120441',
  github: 'https://github.com/misriyashaminas1-code',
  instagram: '',
  resumePath: '/resume/misiriya-resume.pdf',
};

export const about = {
  paragraphs: [
    'I am a third-year B.E. Computer Science and Engineering student at KMCT College of Engineering, Kerala, affiliated with KTU, with a CGPA of 8.09/10. My foundation includes Python and C, alongside exposure to web development, databases, AI/ML and embedded systems.',
    'I am interested in software development and cyber security. Through a two-week Cyber Security & Ethical Hacking internship, I gained exposure to the field. My academic work includes studying how the Translation Lookaside Buffer affects memory-access performance.',
  ],
};

export const skills = [
  { category: 'Programming Languages', items: ['Python', 'C', 'JavaScript'] },
  { category: 'Web Development', items: ['HTML', 'CSS', 'React', 'Next.js', 'Node.js', 'REST APIs', 'Streamlit'] },
  { category: 'AI / Machine Learning', items: ['Machine Learning', 'Image Processing', 'Feature Engineering', 'scikit-learn', 'TinyML', 'TensorFlow Lite'] },
  { category: 'Embedded / IoT', items: ['STM32', 'Arduino', 'I2C', 'Serial Communication', 'Sensor Interfacing', 'Accelerometer', 'Temperature Sensors', 'Sound Sensors', 'Current Sensors'] },
  { category: 'Databases', items: ['MySQL', 'MongoDB'] },
  { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Excel', 'Tableau'] },
];

export const experience = [{
  id: 'retecnox-cyber-intern',
  role: 'Cyber Security & Ethical Hacking Intern',
  company: 'Retechnox Technologies LLP',
  type: 'Internship',
  duration: 'June 2026 · 2 weeks',
  description: 'Completed a 2-week internship in Cyber Security & Ethical Hacking organized by Retechnox Technologies LLP.',
  highlights: [],
  technologies: [],
  entryNumber: '01',
  focus: 'CYBER SECURITY',
}];

export const projects = [{
  id: 'tlb-memory-access',
  number: '01',
  title: 'TLB Impact on Memory Access Time',
  subtitle: 'Effective Memory Access Time (EMAT)',
  year: 'Academic project',
  description: 'An academic study of how TLB hit ratio and miss penalty affect Effective Memory Access Time.',
  technologies: [],
  role: 'Academic project',
  projectDocument: '/tlbprojectdetails.pdf',
  caseStudy: {
    category: 'COMPUTER SYSTEMS · MEMORY',
    overview: 'Modern computer systems use virtual memory to manage physical memory. A Translation Lookaside Buffer (TLB) caches recent address translations to speed up memory access.',
    sections: [
      { title: 'Problem Statement', body: 'Analyze how TLB hit ratio and miss penalty affect Effective Memory Access Time (EMAT).' },
      { title: 'Objectives', items: ['Understand the TLB working mechanism', 'Derive and explain the EMAT formula', 'Compare performance with and without a TLB', 'Perform numerical and graphical analysis'] },
      { title: 'Background', body: 'When the CPU accesses memory, it checks the TLB first. A TLB hit finds the page number in the cache and is faster. A TLB miss requires accessing the page table in main memory, increasing delay.' },
      { title: 'Methodology', items: ['Literature study on virtual memory and TLB', 'Mathematical derivation of EMAT', 'Simulation using a programming language (not specified in the project document)', 'Graphical analysis of hit ratio versus EMAT'] },
      { title: 'EMAT Formula', formula: true },
      { title: 'Analysis', body: 'The project examines how hit ratio and miss penalty affect effective memory access time. No specific measured values or experimental results are provided in the project document.' },
      { title: 'Expected Outcome', body: 'A higher TLB hit ratio is expected to reduce memory access time and improve overall system performance.' },
      { title: 'Conclusion', body: 'The TLB helps improve system speed by reducing address-translation time. Efficient TLB design contributes to better computer performance.' },
    ],
  },
  githubUrl: null,
  liveUrl: null,
  visual: 'tlb',
}];

export const internshipProjects = [];
export const certifications = [
  {
    id: 'cyber-security-internship',
    title: 'Certificate of Completion · Cyber Security & Ethical Hacking Internship',
    issuer: 'Retechnox Technologies LLP',
    date: '2026',
    duration: '2 weeks',
    certificateUrl: '/certificates/cyber-certificate.jpeg',
  },
  {
    id: 'ai-robotics-webinar',
    title: 'Certificate of Participation · Webinar on AI & Robotics',
    issuer: 'Entri Campus Connect',
    date: 'September 2026',
    duration: null,
    certificateUrl: '/certificates/ai-certificate.pdf',
  },
  {
    id: 'graphic-uiux-workshop',
    title: 'Certificate of Participation · Graphic and UI/UX Design Workshop',
    issuer: 'Innovation & Entrepreneurship Development Cell (IEDC)',
    date: 'February 17, 2026',
    duration: null,
    certificateUrl: '/certificates/uiux-certificate.pdf',
  },
];

export const education = [
  { id: 'be-cse', degree: 'B.E. in Computer Science and Engineering', institution: 'KMCT College of Engineering', location: 'Kerala', university: 'KTU', duration: 'Third year', grade: '8.09/10', gradeLabel: 'CGPA', current: true },
  { id: 'higher-secondary', degree: 'Higher Secondary Education', institution: 'Chovva Higher Secondary School', location: 'Kerala', university: 'Kerala State Board', duration: '', grade: '94%', gradeLabel: 'Score', current: false },
  { id: 'sslc', degree: 'SSLC / Class X', institution: 'Kadambur English School', location: 'Kerala', university: 'CBSE', duration: '', grade: '83.5%', gradeLabel: 'Score', current: false },
];

export const achievements = [];
export const leadership = [];
export const languages = ['Malayalam', 'English'];
