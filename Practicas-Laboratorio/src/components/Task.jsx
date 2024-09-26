import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";

const Task = ({ name, completed, onDelete }) => {
  const [completado, SetCompletado] = useState(completed);

  const handleEliminar = () => {
    onDelete();
  };

  return (
    <li
      className={`flex items-center justify-between p-4 mb-2 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${
        completado ? "bg-green-400" : "bg-red-600"
      }`}
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completado}
          onChange={() => SetCompletado(!completado)}
          className="form-checkbox h-6 w-6 text-teal-500 mr-4"
        />
        <span
          className={`${
            completado ? "text-white line-through" : "text-white"
          } text-lg font-medium`}
        >
          {name}
        </span>
      </div>
      <button
        onClick={handleEliminar}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:shadow-outline"
      >
        Eliminar
      </button>
    </li>
  );
};

Task.propTypes = {
  name: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Task;
