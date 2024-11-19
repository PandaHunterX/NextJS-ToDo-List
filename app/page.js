"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // function to add the task
  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  // function to mark the task complete
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // function to delete the task
  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-700">
      <div className="m-5 max-w-lg mx-auto p-6 bg-blue-100 bg-opacity-80 border-8 border-indigo-500 rounded-lg shadow-2xl backdrop-blur-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-6 animate-bounce">To-Do List</h1>

        <div className="flex items-center border-2 border-indigo-300 rounded-lg overflow-hidden mb-6">
          <input
            type="text"
            placeholder="Add a new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="w-full p-3 border-none focus:outline-none text-indigo-800 text-lg bg-white bg-opacity-80 placeholder-blue-500 rounded-l-lg"
          />
          <button
            onClick={addTask}
            className="bg-indigo-500 text-white px-6 py-2 hover:bg-indigo-600 transition duration-300 transform hover:scale-105 hover:shadow-lg rounded-r-lg"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-4">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex items-center justify-between p-4 bg-blue-200 bg-opacity-90 rounded-lg shadow-lg transition duration-300 hover:bg-indigo-50 transform hover:scale-105 hover:shadow-xl animate-slideIn"
            >
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={t.completed}
                  onChange={() => toggleTaskCompletion(t.id)}
                  className="h-5 w-5"
                />
                <span
                  className={`text-lg text-gray-800 ${t.completed ? "line-through text-indigo-500" : "text-blue-500"}`}
                >
                  {t.text}
                </span>
              </div>

              <button
                onClick={() => deleteTask(t.id)}
                className="text-white p-2 rounded bg-blue-500 transform hover:scale-105 transition duration-200"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}