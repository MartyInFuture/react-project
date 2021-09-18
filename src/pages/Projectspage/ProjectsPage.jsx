import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../../Components/common/modal/Modal';
import CreateProject from '../../Components/CreateProject/CreateProject';
// import ProjectList from '';
import projectsOperations from '../../redux/projects/projects-operations';
import {  getError } from '../../redux/projects/projects-selectors';
  
import styles from '../Projectspage/ProjectsPage.module.css';
// import Spinner from 'react-loader-spinner';

const ProjectsPage = () => {
  const [showModal, setShowModal] = useState(false);
  // const loading = useSelector(getLoadingProjects);
  const Error = useSelector(getError);

  const dispatch = useDispatch();
  useEffect(() => dispatch(projectsOperations.getAllProjects()), [dispatch]);

  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  const toggleModal = () => setShowModal(!showModal);

  useEffect(() => {
    if (Error === 'Request failed with status code 404') {
      alert({
        text: `You are not a user of this project or it has been deleted`,
        icon: 'error',
        button: { text: 'OK', className: `${styles.swalButton}` },
      });
    }
  }, [Error]);

  return (
    <>
      <div className={styles.ProjectsHeaderBar}>
        <h1 className={styles.ProjectsTitle}>Projects</h1>

        {/* {loading && <Spinner />} */}

        <label htmlFor="CreateButton" className={styles.ProjectsUtilDiv}>
          <button
            className={styles.ProjectsCreateButton}
            type="button"
            name="Create"
            id="CreateButton"
            onClick={toggleModal}
          ></button>
          Create a project
        </label>

        {showModal && (
          <Modal onCloseModal={toggleModal}>
            <CreateProject onClickCancel={toggleModal} />
          </Modal>
        )}
      </div>
      {/* <ProjectList /> */}
    </>
  );
};

export default ProjectsPage;