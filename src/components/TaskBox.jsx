import "../styles/taskbox.css";

const TaskBox = (props) => {
  return (
    <div id="taskbox">
      <p>{props.children}</p>
    </div>
  );
};

export default TaskBox;
