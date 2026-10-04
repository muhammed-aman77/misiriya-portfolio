import { projects } from '../data/portfolioData';

const slugById = {
  'tlb-memory-access': 'tlb-impact-on-memory-access-time',
};

export function getProjectPath(project) {
  const slug = slugById[project.id];
  if (!slug) return '/projects';

  return `/projects/${slug}`;
}

const routeEntries = [
  ...projects.map((project) => [getProjectPath(project), { project }]),
];

const projectRoutes = new Map(routeEntries);

export function resolveProjectRoute(pathname) {
  return projectRoutes.get(pathname.replace(/\/$/, '') || '/') || null;
}

export const projectRoutePaths = routeEntries.map(([path]) => path);
