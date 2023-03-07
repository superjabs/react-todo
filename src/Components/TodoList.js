import { useEffect, useState } from "react";
import FormAdd from "./FormAdd";
import axios from "axios";
import ListItemTodo from "./ListItemTodo";

export default function TodoList() {
  const url = "http://localhost:8000/data";
  const [todos, setTodos] = useState([]);

  // GET ALL TODOS
  useEffect(() => {
    axios.get(url).then((res) => {
      try {
        setTodos(res.data);
      } catch (err) {}
    });
  }, [todos]);

  // ADD TODO
  function saveTodo(todo) {
    return axios.post(url, todo);
  }

  // DELETE TODO
  function deleteTodo(id) {
    return axios.delete(`${url}/${id}`);
  }

  // UPDATE TODO
  function updateTodo(id, todo) {
    return axios.put(`${url}/${id}`, todo);
  }

  return (
    <>
      <h1 className="text-xl font-bold py-3 border-b-2 border-black">
        react-todo🧾
      </h1>
      <FormAdd saveData={saveTodo} />
      <p className="pb-2 font-semibold">your list</p>
      {todos.length > 0 ? (
        <ul>
          {todos
            .map((todo) => (
              <ListItemTodo
                deleteData={deleteTodo}
                updateData={updateTodo}
                todo={todo.todo}
                key={todo.id}
                id={todo.id}
              />
            ))
            .reverse()}
        </ul>
      ) : (
        <p className="flex justify-center mt-10">no activity</p>
      )}
    </>
  );
}
