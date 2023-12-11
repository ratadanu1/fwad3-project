import './App.css'
import MainPage from './pages/MainPage'
import SavedPage from './pages/SavedPage'
import TaskPage from './pages/TaskPage'
import CreateTaskPage from './pages/CreateTaskPage'
import React from "react";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path="/task/:id" element={<TaskPage/>}/>
            <Route path="/saved" element={<SavedPage/>}/>
            <Route path="/create" element={<CreateTaskPage/>}/>
        </Routes>
    </>
  )
}

export default App
