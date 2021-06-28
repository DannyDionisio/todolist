import axios from "axios";

const USER_ID = "fd5985a9-f551-4c6e-95ee-0bbcc10bbe4f";
const api = axios.create({
  baseURL: "https://0jj5dyvv79.execute-api.eu-west-1.amazonaws.com/dev/items",
});

getTodos;
createTodo;
deleteTodos;
updateTodos;

export default api;
