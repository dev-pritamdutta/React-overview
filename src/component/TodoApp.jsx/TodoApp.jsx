import React, { useState } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [allTodo, setAllTodo] = useState([]);

  const handleAddTask = () => {
    console.log("clicked", task);
    if (task.trim() === "") return;

    setAllTodo([...allTodo, { text: task, id: Date.now() }]);
    setTask("");
  };
    const handleDeleteTask = (id) => {
      setAllTodo(allTodo.filter((todo) => todo.id !== id));
    };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Todo List App</h1>

      {/* input field and button */}
      <div className="flex gap-2">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          name="text"
          id="text"
          placeholder="Enter a task"
          className="border p-2 rounded flex-grow"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white px-4 cursor-pointer py-2 rounded"
        >
          Add Task
        </button>
      </div>

      <div>
        {allTodo.length > 0 ? (
          <ul className="mt-4">
            {allTodo.map((todo, index) => (
              <li
                key={index}
                className="flex items-center justify-between p-2 bg-gray-100 mb-2 rounded"
              >
                <p> {todo.text}</p>
                <button
                onClick={(e) => {handleDeleteTask(todo.id)}}
                 className="bg-red-500 text-white px-4 cursor-pointer py-2 rounded">
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 text-gray-500">No tasks added yet.</p>
        )}
      </div>
    </div>
  );
};

export default TodoApp;
