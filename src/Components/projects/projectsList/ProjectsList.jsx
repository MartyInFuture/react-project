
import { ProjectsListStyled } from './ProjectsListStyled';
import ProjectItem from '../projectItem/ProjectItem';
import { randomBackgroud } from '../../../helpers/randomBackground';
import { colors } from '../../../configs/background.json';


const ProjectsList = ({ projects }) => {
  console.log(`itemProjListUp`, projects);
  return (
    <ProjectsListStyled>

      {projects.map((item) => (
        <ProjectItem
          key={item._id}
          project={item}
          background={() => randomBackgroud(colors)}
        />
      ))}

    </ProjectsListStyled>
  );
};

export default ProjectsList;
