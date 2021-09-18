import { ProjectItemStyled } from './ProjectItemStyled';
import Button from '../../common/button/Button';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project }) => {
  return (
    <ProjectItemStyled>
      <Link to={`/project/${project._id}`} className="projectLink">
        <h3 className="projectTitle">{project.title}</h3>
        <div className="projectTextWrapper">
          <p className="projectTextDescription">{project.description}</p>
        </div>
        <div className="projectButtonWrapper">
          <Button classBtn="deleteProject" icon="delete" />
        </div>
      </Link>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
