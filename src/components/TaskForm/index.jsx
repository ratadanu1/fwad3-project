import React, { useState } from "react";

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim() === "" ||
      dueDate.trim() === "" ||
      description.trim() === ""
    ) {
      alert("Campurile sunt obligatorii!");
      return;
    }

    const newTask = {
      title,
      description,
      dueDate,
      createdAt: new Date().toISOString(),
    };

    if (onAddTask(newTask)) {
      alert("Task-ul a fost adăugat cu succes!");
    }

    setTitle("");
    setDueDate("");
    setDescription("");
  };

  return (
    <>
	<div className="flex justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[500px]" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Write task description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="dueDate"
            >
              Due Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
              id="dueDate"
              type="date"
              placeholder="Due Date"
			  value={dueDate}
          		onChange={handleDueDateChange}
            />
          </div>
          <div className="flex justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Add Task
            </button>
          </div>
        </form>
	</div>
    </>
  );
};

export default TaskForm;
