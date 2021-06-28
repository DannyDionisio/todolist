import { Link } from "react-router-dom";
import { getTodos, createTodo } from "../services/api";
import "../styles/home.css";

import Button from "../components/Button";
import TaskBox from "../components/TaskBox";
import { useEffect, useState } from "react";

const Home = () => {
  const [description, setDescription] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [name, setName] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      getTodos()
        .then((response) => {
          setTaskList(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          alert("Error load todos list.");
          setIsLoading(false);
        });
    }
  }, [isLoading]);

  const handleNewTask = (event) => {
    event.preventDefault();

    const data = {
      name,
      description,
      expireDate,
    };

    try {
      createTodo(data).then(() => {
        setIsLoading(true);
      });
    } catch (error) {
      alert("Error to create Todo, try again.");
    }

    if (name === "") {
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
            onChange={(event) => setName(event.target.value)}
            value={name}
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
            onChange={(event) => setExpireDate(event.target.value)}
            value={expireDate}
          />

          <Button type="submit">Add Task</Button>
        </form>
      </div>
      {taskList.map((task) => {
        return (
          <TaskBox key={task.name}>
            <Link to="/detailedtask">{task.name}</Link>
          </TaskBox>
        );
      })}
    </div>
  );
};

export default Home;
