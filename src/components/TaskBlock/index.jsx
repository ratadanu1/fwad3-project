import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import taskApi from "../../api/tasks/index.js";

const TaskBlock = ({ task, onDelete }) => {

  const handleDeleteClick = () => {
    if (window.confirm("Sigur doriți să ștergeți acest task?")) {
      onDelete();
    }
  };

  const handleSaved = async (newTask) => {
    const isCurrentlySaved = newTask.isSaved;

    const updatedTask = { ...newTask, isSaved: !isCurrentlySaved };

    try {
      const result = await taskApi.updateTask(updatedTask);

      if (result) {
        const successMessage = updatedTask.isSaved
          ? "Task-ul a fost salvat cu succes!"
          : "Task-ul a fost sters din save!";

        window.alert(successMessage);
      }
    } catch (error) {
      console.error("Eroare la actualizarea task-ului:", error);
      window.alert("A apărut o eroare la actualizarea task-ului.");
    }
  };

  const dueDate = new Date(task.dueDate);
  const formattedDueDate = `${dueDate.getDate()}/${
    dueDate.getMonth() + 1
  }/${dueDate.getFullYear()}`;

  return (
    <div className="shadow-lg rounded-xl w-[395px] p-4 bg-zinc-300 relative overflow-hidden">
      <div className="flex flex-col gap-4 text-gray-800 text-sm font-medium mb-2 ">
        <div className="font-medium">{task.title}</div>
        <div>{formattedDueDate}</div>
      </div>
      <Link to={`/task/${task.id}`} task={task}>
        <button className="mx-1 text-purple-600">View Details</button>
      </Link>
      <button className="mx-1 text-green-600" onClick={() => handleSaved(task)}>
        {task.isSaved ? 'Unsave' : 'Save'}
      </button>
      <button 
          className={`mx-1 text-red-600 ${task.isSaved ? " opacity-25 cursor-not-allowed" : " "}`} 
          onClick={!task.isSaved ? handleDeleteClick : undefined} 
          disabled={task.isSaved}
      >
        Delete
      </button>
    </div>
  );
};

export default TaskBlock;
