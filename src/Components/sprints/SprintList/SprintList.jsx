/* eslint-disable no-undef */
// import { useSelector } from 'react-redux';

import SprintListItem from '../SprintListItem/SprintListItem';
import { SprintListStyled } from './SprintListStyled';

const SprintList = ({ sprints }) => {
  return (
    <>
      <SprintListStyled>
        <p className="listWrapper">Create first sprint</p>

        <ul className="listWrapper">
          {sprints &&
            sprints.map((sprint) => (
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
