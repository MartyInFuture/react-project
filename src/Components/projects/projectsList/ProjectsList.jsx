import { ProjectsListStyled } from './ProjectsListStyled';
import ProjectItem from '../projectItem/ProjectItem';

const ProjectsList = ({ projects }) => {
  return (
    <ProjectsListStyled>
      {projects.map((item) => (
        <ProjectItem key={item._id} project={item} />
      ))}
    </ProjectsListStyled>
  );
};

export default ProjectsList;
