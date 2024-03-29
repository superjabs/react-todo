import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

export default function FormAdd({ saveData }) {
  const [initialTodo, setInitialTodo] = useState({ todo: "" });

  function changeHandler(e) {
    setInitialTodo({ todo: e.target.value });
  }

  function submitHandler(e) {
    // add validation before submit notes
    if (initialTodo.todo !== "") {
      e.preventDefault();
      saveData(initialTodo);
      setInitialTodo({ todo: "" });
    }
  }

  return (
    <div className="pt-3 pb-5">
      <p className="pb-3 font-semibold">add new activity</p>
      <form
        action=""
        className="flex items-center justify-center"
        onSubmit={submitHandler}
      >
        <input
          onChange={changeHandler}
          value={initialTodo.todo}
          placeholder="write here . . ."
          className="w-11/12 mr-2 border p-2"
          type="text"
        />
        <button
          type="submit"
          className="bg-gray-900 text-white rounded-sm p-3 mr-2"
        >
          <AiOutlinePlus />
        </button>
      </form>
    </div>
  );
}
