import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import taskApi from "../../api/tasks/index.js";

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await taskApi.getTask(id);
        setTask(data);
      } catch (error) {
        console.error("Error fetching task details:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  const dueDate = new Date(task.dueDate);
  const formattedDueDate = `${dueDate.getDate()}/${dueDate.getMonth() + 1}/${dueDate.getFullYear()}`;

  const createdAt = new Date(task.createdAt);
  const formattedCreatedAt = `${createdAt.getDate()}/${createdAt.getMonth() + 1}/${createdAt.getFullYear()}`;

  return (
    <>
      <div className="shadow-lg rounded-xl w-100 p-4 bg-white relative overflow-hidden">
        <a className="w-full h-full block">
          <div className="flex items-center border-b-2 mb-2 py-2">
            <div className="pl-3">
              <div className="font-medium">Title</div>
              <div className="text-gray-600 text-sm">{task.title}</div>
            </div>
          </div>
          <div className="w-full">
            <p className="text-gray-800 text-sm font-medium mb-2">
              Description
            </p>
            <p className="text-gray-800 text-xl font-medium mb-2">
              {task.description}
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2">
              Due: {formattedDueDate}
            </p>
            <p className="text-blue-600 text-xs font-medium mb-2">
              Created: {formattedCreatedAt}
            </p>
          </div>
        </a>
      </div>
    </>
  );
};

export default TaskDetails;
