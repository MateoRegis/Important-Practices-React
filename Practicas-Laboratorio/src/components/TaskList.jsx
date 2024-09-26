import React from "react";
import PropTypes from "prop-types";
import Task from "./Task";

const TaskList = ({ data, setTasks }) => {
  const handleDeleteTask = (id) => {
    const updatedTasks = data.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="w-full max-w-4xl p-4 bg-gradient-to-r from-gray-100 to-gray-300 rounded-xl shadow-md">
        <ul className="space-y-4">
          {data.map((task) => (
            <Task
              key={task.id}
              name={task.name}
              completed={task.completed}
              onDelete={() => handleDeleteTask(task.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

TaskList.propTypes = {
  data: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskList;
