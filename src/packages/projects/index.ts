import { ProjectDetailsPage } from './screens/ProjectDetailsPage';
import { ProjectListPage } from './screens/ProjectListPage';

export { CreateProjectModal } from './components/CreateProjectModal';
export { ProjectCard } from './components/ProjectCard';
export { ProjectList } from './components/ProjectList';

export type { ProjectCardProps } from './components/ProjectCard/types';
export type { ProjectListProps } from './components/ProjectList/types';
export type { CreateProjectModalProps } from './components/CreateProjectModal/types';
export type { ProjectListPageProps } from './screens/ProjectListPage/types';
export type { ProjectDetailsPageProps } from './screens/ProjectDetailsPage/types';

export const screens = {
  ProjectDetailsPage,
  ProjectListPage,
};
