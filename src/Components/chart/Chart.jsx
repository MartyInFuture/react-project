import { ChartStyled } from "./ChartStyled";
import Button from "../common/button/Button";
import buttonIcons from "../../configs/buttonIcons.json";
import { Line } from "react-chartjs-2";
import { useSelector } from "react-redux";
import taskSelectors from "../../redux/task/task-selectors";
import sprintSelectors from "../../redux/sprints/sprints-selectors";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import moment from "moment";

const Chart = ({ title = "title", open, setOpen }) => {
  const [labels, setLabels] = useState([]);
  const sprints = useSelector(sprintSelectors.getSprints);
  const tasks = useSelector(taskSelectors.getTasks);
  const { id } = useParams();
  const [planedHours, setPlanedHours] = useState([]);

  useEffect(() => {
    if (sprints.length !== 0) {
      const currentSprint = sprints.find((sprint) => {
        const sprintId = sprint._id ?? sprint.id;
        return sprintId === id;
      });
      const startDate = currentSprint.startDate;
      const duration = currentSprint.duration;
      const labelsArr = [];
      for (let i = 0; i < duration; i++) {
        labelsArr.push(moment(startDate).add(i, "day").format("YYYY-MM-DD"));
      }
      setLabels(labelsArr);
    }
  }, [id, sprints]);
  useEffect(() => {
    if (tasks.length !== 0) {
      let tasksTotalTime = 0;
      tasks.forEach((task) => (tasksTotalTime += Number(task.hoursPlanned)));

      const tasksTotalTimeArr = [Number(tasksTotalTime)];
      const dayAmount = tasks[0].hoursWastedPerDay.length;

      const substractor = tasksTotalTime / (dayAmount - 1);
      let newSubstractor = substractor;
      for (let i = 0; i < dayAmount - 2; i++) {
        tasksTotalTimeArr.push(tasksTotalTime - newSubstractor);
        newSubstractor += substractor;
      }
      tasksTotalTimeArr.push(0);
      setPlanedHours(tasksTotalTimeArr);
    }
  }, [tasks]);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "My Second dataset",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(150, 0, 0)",
        borderColor: "red",
        borderCapStyle: "round",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "round",
        pointBorderColor: "red",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "red",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: planedHours,
      },
    ],
  };
  return (
    <>
      {open && (
        <ChartStyled>
          <div className="modal">
            <h3>{title}</h3>
            <div className="buttonWrapper">
              <Button
                classBtn="close"
                icon={buttonIcons.close}
                onHandleClick={() => setOpen(false)}
              />
            </div>
            <Line data={data} />
          </div>
        </ChartStyled>
      )}
    </>
  );
};

export default Chart;
