import { useDispatch } from "react-redux";
import Button from "../../Components/common/button/Button";
import { addSprint } from "../../redux/sprints/sprints-operations";

const Sprint = () => {
  const dispatch = useDispatch();
  const onHandleClick = () => {
    const projectId = "614776eef4a6c03db8cc8ef3";
    dispatch(
      addSprint({
        projectId,
        sprintData: {
          title: "Sprint 6",
          endDate: "2020-12-31",
          duration: 1,
        },
      })
    );
  };
  return (
    <>
      <Button onHandleClick={onHandleClick} />
      <h1>Это спринты</h1>
    </>
  );
};

export default Sprint;
