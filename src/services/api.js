import axios from "axios";

const USER_ID = "fd5985a9-f551-4c6e-95ee-0bbcc10bbe4f";
const api = axios.create({
  baseURL: "https://0jj5dyvv79.execute-api.eu-west-1.amazonaws.com/dev/items",
});

export function getTodos() {
  return api.get(`/${USER_ID}`);
}

export function createTodo(data) {
  const todo = {
    ...data,
    id: USER_ID,
    creationDate: new Date(),
  };

  return api.post(``, todo);
}

/*
deleteTodos;
updateTodos;*/
