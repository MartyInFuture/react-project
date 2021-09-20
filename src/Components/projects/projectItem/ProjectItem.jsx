import { ProjectItemStyled } from './ProjectItemStyled';
import Button from '../../common/button/Button';
import { Link } from 'react-router-dom';
import buttonIcons from '../../../configs/buttonIcons.json';

const ProjectItem = ({ project, background }) => {
  console.log(background);
  return (
    <ProjectItemStyled>
      <Link
        to={`/project/${project._id}`}
        className={`${background()} projectLink`}
      >
        <h3 className="projectTitle">{project.title}</h3>
        <div className="projectTextWrapper">
          <p className="projectTextDescription">{project.description}</p>
        </div>
        <div className="projectButtonWrapper">
          <Button classBtn="deleteProject" icon={buttonIcons.delete} />
        </div>
      </Link>
    </ProjectItemStyled>
  );
};

export default ProjectItem;
