import Title from "../../Components/common/title/Title"
import Button from "../../Components/common/button/Button"
import { ProjectsStyled } from "./ProjectsStyled"
import ProjectsList from "../../Components/projects/projectsList/ProjectsList"
import { useDispatch, useSelector } from "react-redux"
import projectOperations from "../../redux/projects/newProject/newProjects-operations"
import { useState, useEffect } from "react"

import projectSelectors from "../../redux/projects/newProject/newProjects-selectors"
import { token } from "../../redux/auth/auth-operations"
import { authSelectors } from "../../redux/auth"
import CreateProject from "../../Components/projects/createProject/CreateProject"

const projects = [
  {
    title: "Project 1",
    description: "Project 1 description",
    members: ["test@email.com"],
    sprints: ["507f1f77bcf86cd799439012"],
    _id: "1",
    __v: 0,
  },
  {
    title: "Project 2",
    description: "Project 2 description",
    members: ["test@email.com"],
    sprints: ["507f1f77bcf86cd799439012"],
    _id: "2",
    __v: 0,
  },
  {
    title: "Project 3",
    description: "Project 3 description",
    members: ["test@email.com"],
    sprints: ["507f1f77bcf86cd799439012"],
    _id: "3",
    __v: 0,
  },
  {
    title: "Project 4",
    description: "Project 4 description",
    members: ["test@email.com"],
    sprints: ["507f1f77bcf86cd799439012"],
    _id: "4",
    __v: 0,
  },
]

const Projects = () => {
  const isAuth = useSelector(authSelectors.getAccessToken)
  // const projects = useSelector(projectSelectors.getProjects)
  const dispatch = useDispatch()

  const [closeModalProject, setCloseModalProject] = useState(false)

  const onHandleClick = () => {
    dispatch(
      projectOperations.postProject({
        title: "Project Repet`s best students",
        description: "Project Repet`s best students description",
      })
    )
  }

  // useEffect(() => {
  //   dispatch(projectOperations.getProjects());
  // }, [dispatch]);
  useEffect(() => {
    token.set(isAuth)
    isAuth && dispatch(projectOperations.getProjects())
  }, [dispatch])

  return (
    <ProjectsStyled>
      <div className="headerWrapper">
        <Title title="Проекти" />
        <div className="buttonWrapper">
          <Button onHandleClick={() => setCloseModalProject(true)} />
          <p className="buttonMessage">Створити проект</p>
        </div>
      </div>
      {projects.length && <ProjectsList projects={projects} />}
      <CreateProject closeModal={closeModalProject} setCloseModal={setCloseModalProject} />
    </ProjectsStyled>
  )
}

export default Projects
