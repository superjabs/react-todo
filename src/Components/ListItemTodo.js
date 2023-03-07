import { useState } from "react";
import { MdDelete, MdCreate, MdCancel } from "react-icons/md";

export default function ListItemTodo({ todo, id, deleteData, updateData }) {
  const [isEdit, setIsEdit] = useState(false);
  const [initialTodo, setInitialTodo] = useState({ todo: todo });

  function switchEnable() {
    setIsEdit(!isEdit);
  }

  function changeHandler(e) {
    setInitialTodo({ todo: e.target.value });
  }

  function submitHandler(e) {
    e.preventDefault();
    setIsEdit(!isEdit);
    updateData(id, initialTodo);
  }

  return (
    <li className="py-2 flex">
      <form onSubmit={submitHandler} action="" className="w-5/6">
        {!isEdit ? (
          <input
            disabled
            value={initialTodo.todo}
            className="mr-2 bg-white p-2"
            type="text"
          />
        ) : (
          <input
            onChange={changeHandler}
            value={initialTodo.todo}
            className="w-5/6 outline-none border-b-2 mr-2 p-2"
            type="text"
          />
        )}
      </form>
      {!isEdit ? (
        <>
          <button
            onClick={switchEnable}
            className="bg-gray-900 text-white rounded-sm p-2 mr-2"
          >
            <MdCreate />
          </button>
          <button
            onClick={() => deleteData(id)}
            className="bg-gray-900 text-white rounded-sm p-2 mr-2"
          >
            <MdDelete />
          </button>
        </>
      ) : (
        <>
          <button
            onClick={submitHandler}
            className="bg-gray-900 text-white rounded-sm p-2 mr-2"
          >
            save
          </button>
          <button
            onClick={switchEnable}
            className="bg-gray-900 text-white rounded-sm p-2 mr-2"
          >
            <MdCancel />
          </button>
        </>
      )}
    </li>
  );
}
