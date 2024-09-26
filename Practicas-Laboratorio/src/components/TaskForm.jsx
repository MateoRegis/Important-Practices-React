import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const TaskForm = ({ data, setTasks }) => {
  const [nombre, setNombre] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (nombre.trim() !== "") {
      const newTask = { id: Math.random(), name: nombre, completed: false };
      const updatedTasks = [...data, newTask];
      setTasks(updatedTasks);
      setNombre("");
    } else {
      alert("El nombre no puede estar vacio");
    }
  };

  function handleNombre(e) {
    setNombre(e.target.value);
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="w-full max-w-xs p-5 rounded-lg shadow-xl bg-white">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Agregar Tarea</h2>
        <form onSubmit={handleForm} className="space-y-4">
          <label className="block">
            Nombre de la Tarea:
            <input
              type="text"
              value={nombre}
              onChange={handleNombre}
              placeholder="Introduce el nombre de la tarea"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Agregar
          </button>
        </form>
      </div>
    </div>
  );
};

TaskForm.propTypes = {
  data: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
};

export default TaskForm;
