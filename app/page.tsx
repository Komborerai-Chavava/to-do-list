"use strict";
'use client'; // This tells Next.js this page is interactive!

import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState<{ id: number; text: string }[]>([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: inputValue }]);
    setInputValue(''); // Clear the input box
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          My Tasks ✅
        </h1>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 border-2 border-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 text-black"
            placeholder="Add a new task..."
          />
          <button
            onClick={addTodo}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-100"
            >
              <span className="text-gray-700">{todo.text}</span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700 font-bold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        
        {todos.length === 0 && (
          <p className="text-center text-gray-400 mt-4">No tasks yet. Relax! ☕</p>
        )}
      </div>
    </main>
  );
}
