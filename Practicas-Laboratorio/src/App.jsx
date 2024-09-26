import React from "react";
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <TaskForm data={tasks} setTasks={setTasks}></TaskForm>
      <TaskList data={tasks} setTasks={setTasks}></TaskList>
    </>
  );
};

export default App;
