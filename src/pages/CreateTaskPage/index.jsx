import React, { useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskForm from '../../components/TaskForm';
import taskApi from '../../api/tasks/index.js';


const CreateTaskPage = () => {
  const [taskList, setTaskList] = useState([]);
  const [sortedTaskList, setSortedTaskList] = useState([]);

  const handleAddTask = async (newTask) => {
    try {
      const response = await taskApi.addTask(newTask);

      if (response.status === 200 || response.status === 201) {
        setTaskList([...taskList, response.data]);
        setSortedTaskList([...sortedTaskList, response.data]);
      } else {
        console.error("Eroare la adăugarea task-ului:", response.statusText);
      }
    } catch (error) {
      console.error("Eroare la adăugarea task-ului:", error.message);
    }
  };

  return (
    <div>
      <Header />
        <TaskForm onAddTask={handleAddTask}/>
      <Footer />
    </div>
  );
};

export default CreateTaskPage;