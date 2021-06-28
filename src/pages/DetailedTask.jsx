import { Link } from "react-router-dom";
import "../styles/detailedtask.css";

import TaskBox from "../components/TaskBox";

const DetailedTask = () => {
  return (
    <div id="detailedTask-page">
      <div>
        <h2>Some Title</h2>
        <div>
          <p>Some description comes here</p>
          <p>Date Created</p>
          <p>Date expires</p>
        </div>
      </div>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default DetailedTask;
