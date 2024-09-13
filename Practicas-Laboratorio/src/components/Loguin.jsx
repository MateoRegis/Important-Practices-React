import React from 'react'
import { useState } from 'react'

const Loguin = () => {
  const [input, setInput] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
    if (input.includes(" ") || input.trim() === "") {
      alert("Usuario inválido para registrarse");
      return;
    } else {
      alert("Usuario registrado correctamente!");
      setInput("");
    }
  };

  const handleInput = (e) => {
    let text = e.target.value;
    if (text.includes("o") || text.includes("O")) {
      alert("Por favor, ¡Nombres de usuario sin la letra o/O!");
      return;
    }
    setInput(text);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 via-blue-400 to-purple-600">
      <form onSubmit={handleForm} className="w-full max-w-lg bg-white rounded-lg shadow-2xl p-6 space-y-4 border border-gray-200">
        <h1 className="text-center text-3xl font-bold text-gray-800">REGISTRO DE USUARIO</h1>
        <div className="space-y-2">
          <label htmlFor="username" className="block text-gray-700 font-medium">NOMBRE DE USUARIO :</label>
          <input 
            id="username"
            type="text" 
            value={input} 
            onChange={handleInput} 
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Introduce tu nombre de usuario"
          />
        </div>
        <button type='submit' className="w-full text-center py-2 bg-gradient-to-r from-purple-500 to-blue-700 text-white rounded-md hover:from-purple-600 hover:to-blue-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-colors">
          Registrarse
        </button>
        <p className="text-center text-gray-500">{input ? `UERNAME: ${input}` : "POR VAFOR , INGRESE UN NOMBRE DE USUARIO."}</p>
      </form>
    </div>
  )
}

export default Loguin;
