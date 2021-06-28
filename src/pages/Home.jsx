import { Link } from "react-router-dom";
import api from "../services/api";
import "../styles/home.css";

import Button from "../components/Button";
import TaskBox from "../components/TaskBox";
import { useEffect, useState } from "react";

const Home = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [id, setID] = useState("");

  useEffect(() => {
    api.get("title").then((response) => {
      setTitle(response.data);
    });
  }, []);

  const handleNewTask = (event) => {
    event.preventDefault();
    if (title === "") {
      return;
    }

    // TODO: não criar task que expira antes da data atual.
  };

  return (
    <div id="page-home">
      <h1>Project Tracker</h1>

      <div>
        <h2>To-Do List</h2>

        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setTitle(event.target.value)}
            value={title}
            required
          />
          <input
            type="text"
            placeholder="What you need to do?"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />
          <input
            type="date"
            onChange={(event) => setDate(event.target.value)}
            value={date}
          />

          <Button type="submit">Add Task</Button>
        </form>
      </div>
      <TaskBox>
        <Link to="/detailedtask">Desenhar o layout do projeto</Link>
      </TaskBox>
      <TaskBox>Fazer o style</TaskBox>
      <TaskBox>Sprints do projeto</TaskBox>
    </div>
  );
};

export default Home;
