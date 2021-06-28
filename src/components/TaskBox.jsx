import "../styles/taskbox.css";

import checkImg from "../assets/images/check.svg";
import editImg from "../assets/images/edit.svg";
import deleteImg from "../assets/images/delete.svg";

const TaskBox = (props) => {
  return (
    <div id="taskbox">
      <p>{props.children}</p>

      <div className="side-buttons">
        <button className="checked-button" type="button">
          <img src={checkImg} alt="Check todo" />
        </button>

        <button className="edit-button" type="button">
          <img src={editImg} alt="Edit todo" />
        </button>

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
