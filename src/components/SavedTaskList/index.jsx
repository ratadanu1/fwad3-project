import React from "react";
import TaskBlock from "../TaskBlock";
import TaskSkeleton from "./TaskSkeleton";
import taskApi from "../../api/tasks/index.js";

const TaskList = () => {
  const [taskList, setTaskList] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [task] = React.useState(1);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await taskApi.getTaskList(task);
        setTaskList([...taskList, ...data]);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [task]);

  return (
    <>
      <div className="flex flex-row justify-center flex-wrap gap-3">
        {isLoading ? (
          [...new Array(4)].map((item, i) => <TaskSkeleton key={i} />)
        ) : taskList.filter((task) => task.isSaved).length > 0 ? (
          taskList
            .filter((task) => task.isSaved)
            .map((task) => (
              <TaskBlock
                key={task.id}
                task={task}
                onDelete={() => handleDelete(task.id)}
              />
            ))
        ) : (
            <div className="p-4 mb-4 text-lg text-red-800 bg-red-500 dark:bg-gray-800 dark:text-red-400 border-2" role="alert">
                <span className="font-medium">Alert!</span> There are no saved tasks. 
            </div>
        )}
      </div>
    </>
  );
};

export default TaskList;
