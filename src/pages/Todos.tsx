import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../store/useStore'

export default function Todos() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useStore()
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      addTodo(inputValue.trim())
      setInputValue('')
    }
  }

  return (
    <div className="max-w-3xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-5xl text-blue-500">checklist</span>
        <h1 className="text-4xl font-bold text-gray-900">Todo List</h1>
      </div>
      
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              add_task
            </span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Add a new todo..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm" />
          </div>
          <button 
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
            <span className="material-symbols-outlined">add</span>
            <span>Add</span>
          </button>
        </div>
      </form>

      <div className="space-y-3">
        {todos.length === 0 ? (
          <div className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200 border-dashed">
            <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">
              inbox
            </span>
            <p className="text-gray-600 italic text-lg">No todos yet. Add one above!</p>
          </div>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all group">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-white cursor-pointer" />
              <span
                className={`flex-1 text-lg transition-all ${
                  todo.completed
                    ? 'line-through text-gray-400'
                    : 'text-gray-900'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1">
                <span className="material-symbols-outlined">delete</span>
              </button>
            </div>
          ))
        )}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/"
          className="px-6 py-3 bg-white hover:bg-blue-50 text-gray-700 rounded-lg transition-colors border border-blue-200 hover:border-blue-300 shadow-sm flex items-center gap-2">
          <span className="material-symbols-outlined">arrow_back</span>
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  )
}
