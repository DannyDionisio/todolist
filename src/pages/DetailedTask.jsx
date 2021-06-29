import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { editTodo, getTodoByName } from "../services/api";
import moment from "moment";
import Button from "../components/Button";

import editImg from "../assets/images/edit.svg";

import "../styles/detailedtask.css";

const DetailedTask = () => {
  let { taskName } = useParams();
  const [description, setDescription] = useState();
  const [expireDate, setExpireDate] = useState();
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState();

  useEffect(() => {
    if (!isEditing) {
      getTodoByName(taskName)
        .then((response) => {
          setTask(response.data);
        })
        .catch((error) => {
          alert("Error edit todo.");
        });
    }
  }, [isEditing]);

  const handleSaveTask = (event) => {
    event.preventDefault();

    const data = {
      name: task.name,
      description,
      expireDate,
    };

    editTodo(data)
      .then(() => {
        setIsEditing(false);
      })
      .catch((error) => {
        alert("Error to edit Todo, try again.");
      });
  };

  const handleIsEditing = () => {
    setDescription(task.description);

    if (task.expireDate) {
      setExpireDate(task.expireDate.split("T")[0]);
    }
    setIsEditing(true);
  };

  if (!task) {
    return null;
  }

  if (isEditing) {
    return (
      <form id="detailedTask-page" onSubmit={handleSaveTask}>
        <h2>{task.name}</h2>

        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <label htmlFor="expireDate">Date Expires:</label>
        <input
          type="date"
          id="expireDate"
          value={expireDate}
          onChange={(event) => setExpireDate(event.target.value)}
        />

        <Button type="submit">Save Task</Button>
      </form>
    );
  }

  return (
    <div id="detailedTask-page">
      <div>
        <h2>{task.name}</h2>
        <p>
          Expiration Date:{" "}
          {moment(task.expireDate).format("DD/MM/YYYY HH:mm:ss")}
        </p>
        <div>
          <p>{task.description}</p>
        </div>

        <button className="edit-button" onClick={handleIsEditing}>
          <img src={editImg} alt="Edit todo" />
        </button>
      </div>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default DetailedTask;
