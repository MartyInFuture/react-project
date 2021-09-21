/* eslint-disable no-undef */
import Button from "../../common/button/Button";
import buttonIcons from "../../../configs/buttonIcons.json";
import { Link } from "react-router-dom";
import { SprintListItemStyled } from "./SprintListItemStyled";
import { useParams } from "react-router";
const SprintListItem = ({ sprint }) => {
  const { id } = useParams();
  return (
    <SprintListItemStyled>
      <div className="LinkWrapper">
        <Link to={`/project/${id}/sprint/${sprint._id}`}>
          <div className="itemWrap">
            <h3>{sprint.name}</h3>

            <ul>
              <li>
                <span>Start date</span>
                <span>{sprint.startDate}</span>
              </li>
              <li>
                <span>Expire date</span>
                <span>{sprint.endDate}</span>
              </li>
              <li>
                <span>Duration</span>
                <span>{sprint.duration}</span>
              </li>
            </ul>
          </div>
        </Link>
        <Button
          icon={buttonIcons.delete}
          classBtn="delete"
          title="Edit the name"
          type="button"
          className="deleteBtn"
          // onClick={handleDelete}
        ></Button>
      </div>
    </SprintListItemStyled>
  );
};

export default SprintListItem;
