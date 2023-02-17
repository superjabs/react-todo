import React, { useEffect, useState } from "react";
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
  });

  // ADD TODO
  function addTodo(todo) {
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
    <div className="pt-5">
      <FormAdd addData={addTodo} />
      <p className="pb-2 font-semibold">your list</p>
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
    </div>
  );
}
