import { ProjectsListStyled } from "./ProjectsListStyled";
import ProjectItem from "../projectItem/ProjectItem";

const ProjectsList = ({ projects }) => {
  console.log(`itemProjListUp`, projects);
  return (
    <ProjectsListStyled>
      {projects.map((item) => {
        return <ProjectItem key={item._id} project={item} />;
      })}
    </ProjectsListStyled>
  );
};

export default ProjectsList;
