import Title from '../../Components/common/title/Title';
import Button from '../../Components/common/button/Button';
import { ProjectsStyled } from './ProjectsStyled';
import ProjectsList from '../../Components/projects/projectsList/ProjectsList';

const projects = [
  {
    title: 'Project 1',
    description: 'Project 1 description',
    members: ['test@email.com'],
    sprints: ['507f1f77bcf86cd799439012'],
    _id: '1',
    __v: 0,
  },
  {
    title: 'Project 2',
    description: 'Project 2 description',
    members: ['test@email.com'],
    sprints: ['507f1f77bcf86cd799439012'],
    _id: '2',
    __v: 0,
  },
  {
    title: 'Project 3',
    description: 'Project 3 description',
    members: ['test@email.com'],
    sprints: ['507f1f77bcf86cd799439012'],
    _id: '3',
    __v: 0,
  },
  {
    title: 'Project 4',
    description: 'Project 4 description',
    members: ['test@email.com'],
    sprints: ['507f1f77bcf86cd799439012'],
    _id: '4',
    __v: 0,
  },
];

const Projects = () => {
  return (
    <ProjectsStyled>
      <div className="headerWrapper">
        <Title title="Проекти" />
        <div className="buttonWrapper">
          <Button />
          <p className="buttonMessage">Створити проект</p>
        </div>
      </div>
      <ProjectsList projects={projects} />
    </ProjectsStyled>
  );
};

export default Projects;
