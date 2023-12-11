import React from "react";
import TaskBlock from "../TaskBlock";
import TaskSkeleton from "./TaskSkeleton";
import taskApi from "../../api/tasks/index.js";

const TaskList = () => {
  const [taskList, setTaskList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [task] = React.useState(1);

  const [sortOrder, setSortOrder] = React.useState("asc"); 
  const [sortedTaskList, setSortedTaskList] = React.useState([]);

  const [searchTerm, setSearchTerm] = React.useState("");

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await taskApi.getTaskList(task);
        setTaskList([...taskList, ...data]);
        setSortedTaskList([...taskList, ...data]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [task]);

  const handleDelete = async (taskId) => {
    try {
      await taskApi.deleteTask(taskId);

      const updatedTaskList = taskList.filter(task => task.id !== taskId);
      setTaskList(updatedTaskList);

      const updatedSortedTaskList = sortedTaskList.filter(task => task.id !== taskId);
      setSortedTaskList(updatedSortedTaskList);
    } catch (error) {
      console.error("Eroare la ștergerea task-ului", error);
    }
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);

    const sortedList = [...sortedTaskList].sort((a, b) => {
      const compareValue = a.title.localeCompare(b.title);
      return sortOrder === "asc" ? compareValue : -compareValue;
    });

    setSortedTaskList(sortedList);
  };

  return (
    <>
    <div className="flex flex-row justify-between">
        <button className="mb-4" onClick={handleSort}>Sort by title</button>
        <input
          className="border border-gray-400 rounded-md p-2 w-1/4 mb-4" 
          type="text"
          placeholder="Search by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-row justify-center flex-wrap gap-3">
        {
          isLoading ? (
            [...new Array(4)].map((item, i) => (
				<TaskSkeleton key={i} />)
			)) : (
        sortedTaskList
            .filter((task) => task.title.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((task) => (
              <TaskBlock key={task.id} task={task} onDelete={() => handleDelete(task.id)} />
            ))

      )}
      </div>
    </>
  );
};

export default TaskList;
