import "../styles/taskbox.css";

import deleteImg from "../assets/images/delete.svg";
import moment from "moment";

const TaskBox = (props) => {
  const isExpired = moment(props.expireDate).isBefore(moment());

  return (
    <div id="taskbox" className={isExpired ? "expired" : ""}>
      <p>{props.children}</p>

      <div className="side-buttons">
        <button
          className="delete-button"
          type="button"
          onClick={props.onDeleteClick}
        >
          <img src={deleteImg} alt="Delete todo" />
        </button>
      </div>
    </div>
  );
};

export default TaskBox;
