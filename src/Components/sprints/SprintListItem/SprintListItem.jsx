import Button from "../../common/button/Button"
import buttonIcons from "../../../configs/buttonIcons.json"
import { Link } from "react-router-dom"
import { SprintListItemStyled } from "./SprintListItemStyled"
import { useDispatch } from "react-redux"
import { deleteSprint } from "../../../redux/sprints/sprints-operations"
import { useParams } from "react-router-dom"

const SprintListItem = ({ sprint }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(deleteSprint(sprint.id ?? sprint._id))
  }

  return (
    <SprintListItemStyled>
      <div className="LinkWrapper">
        <Link to={`/project/${id}/sprint/${sprint._id ?? sprint.id}`}>
          <div className="itemWrap">
            <h3>{sprint.title}</h3>

            <ul>
              <li>
                <span>Дата початку</span>
                <span>{sprint.startDate}</span>
              </li>
              <li>
                <span>Дата закінчення</span>
                <span>{sprint.endDate}</span>
              </li>
              <li>
                <span>Тривалість</span>
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
          onHandleClick={handleClick}
        ></Button>
      </div>
    </SprintListItemStyled>
  )
}

export default SprintListItem
