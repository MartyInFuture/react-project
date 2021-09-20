import Button from '../Components/common/button/Button';
import Title from '../Components/common/title/Title';
import SprintList from '../Components/sprints/SprintList/SprintList';
// import CreateMembers from '../Components/projects/addMembers/CreateMembers';
import { SprintStyled } from './SprintStyled';
import buttonIcons from '../configs/buttonIcons.json';
import NavContainer from '../Components/common/containers/navContainer/NavContainer';
import NavMenu from '../Components/navMenu/NavMenu';

const SprintPage = () => {
  return (
    <>
      <NavContainer>
        <NavMenu />
      </NavContainer>
      <SprintStyled>
        {/* <div className="main"> */}
        <article>
          <div className="headerWrap">
            <div className="contentWrap">
              <div className="titleWrap">
                <form
                //   onSubmit={closeInputHandler}
                //   className={
                //     showInput ? changeTitleFormActive : changeTitleForm
                //   }
                >
                  <input
                    className="inputChangeTitle"
                    // value={name}
                    name="name"
                    type="text"
                    // onChange={handleNameChange}
                  />
                  {/* <button
                                    onHandleClick={null}
                                    
                                /> */}
                </form>
                {/* {!showInput && ( */}
                <>
                  <Button
                    icon={buttonIcons.edit}
                    classBtn="editDelete"
                    title="Edit the name"
                    type="button"
                    className="buttonChange"
                    // onClick={editNameHandle}
                  ></Button>
                  <Title />
                </>
                {/* )} */}
              </div>

              <p>current project description</p>

              <div className="addWrap">
                <Button
                  icon={buttonIcons.group_add}
                  classBtn="group_add"
                  title="Add people"
                  type="button"
                ></Button>
                <span>Add people</span>
              </div>

              <div className="addWrap">
                {/* <CreateMembers className="AddGroupIcon" />
                            <span onClick={() => toggleModal('addPeople')}>Add people</span> */}
              </div>
            </div>

            {767 && (
              <Button
                icon={buttonIcons.add}
                classBtn="add"
                // onClick={() => toggleModal('createSprint')}
              />
            )}
            {/* {768 && (
                    <div className="createSprintWrap">
                        {768 && (
                        <Button icon = {buttonIcons.add} classBtn = "add"
                            title="Create a sprint"
                            onClick={() => toggleModal('createSprint')}
                        />
                        )}
                        { 1280 && <span>Create a sprint</span>}
                    </div>
                    )} */}
          </div>

          <SprintList />
        </article>
        {/* </div> */}
      </SprintStyled>
    </>
  );
};

export default SprintPage;
