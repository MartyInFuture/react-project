/* eslint-disable no-undef */
// import { useSelector } from 'react-redux';

import SprintListItem from "../SprintListItem/SprintListItem";
import { SprintListStyled } from "./SprintListStyled";

const SprintList = ({ sprints }) => {
  const data = {
    sprints: [
      {
        project: 1,
        name: "Sprint 1",
        startDate: "2020-12-30",
        endDate: "2020-12-31",
        duration: 100,
        id: 243424,
      },
      {
        project: 1,
        name: "Sprint 2",
        startDate: "2020-12-30",
        endDate: "2021-12-31",
        duration: 400,
        id: 243425,
      },
      {
        project: 1,
        name: "Sprint 3",
        startDate: "2020-12-30",
        endDate: "2021-12-31",
        duration: 300,
        id: 243426,
      },
      {
        project: 1,
        name: "Sprint 4",
        startDate: "2020-12-30",
        endDate: "2021-12-31",
        duration: 4,
        id: 243427,
      },
    ],
  };

  return (
    <>
      <SprintListStyled>
        <p className="listWrapper">Create first sprint</p>

        <ul className="listWrapper">
          {sprints &&
            data.sprints.map((sprint) => (
              <li key={sprint.id} className="listItem">
                <SprintListItem sprint={sprint} />
              </li>
            ))}
        </ul>
      </SprintListStyled>
    </>
  );
};

export default SprintList;
