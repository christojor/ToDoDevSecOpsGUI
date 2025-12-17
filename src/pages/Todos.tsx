import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTodos, useCreateTodo, useUpdateTodo, useDeleteTodo } from '../hooks/useTodoApi'
import { getErrorMessage } from '../lib/errorHandler'

export default function Todos() {
  const [inputValue, setInputValue] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editedName, setEditedName] = useState('')
  const [validationError, setValidationError] = useState<string | null>(null)
  
  const { data: todos = [], isLoading, error } = useTodos()
  const createTodo = useCreateTodo()
  const updateTodo = useUpdateTodo()
  const deleteTodo = useDeleteTodo()

  const activeTodos = todos.filter(todo => !todo.isComplete)
  const completedTodos = todos.filter(todo => todo.isComplete)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setValidationError(null)
      createTodo.mutate({ name: inputValue.trim() }, {
        onSuccess: () => {
          setInputValue('')
          setValidationError(null)
        },
        onError: (error) => {
          const errorMessage = getErrorMessage(error)
          setValidationError(errorMessage)
        }
      })
    }
  }

  const handleToggle = (id: string, isComplete: boolean, name: string) => {
    updateTodo.mutate({ id, data: { name, isComplete: !isComplete } })
  }

  const handleDelete = (id: string) => {
    deleteTodo.mutate(id)
  }

  const startEditing = (id: string, currentName: string) => {
    setEditingId(id)
    setEditedName(currentName)
  }

  const cancelEditing = () => {
    setEditingId(null)
    setEditedName('')
  }

  const saveEdit = (id: string, isComplete: boolean) => {
    if (editedName.trim() && editedName !== '') {
      setValidationError(null)
      updateTodo.mutate(
        { id, data: { name: editedName.trim(), isComplete } },
        {
          onSuccess: () => {
            setEditingId(null)
            setEditedName('')
            setValidationError(null)
          },
          onError: (error) => {
            const errorMessage = getErrorMessage(error)
            setValidationError(errorMessage)
          }
        }
      )
    } else {
      cancelEditing()
    }
  }

  if (error) {
    return (
      <div className="max-w-3xl mx-auto animate-fade-in">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <span className="material-symbols-outlined text-5xl text-red-500 mb-4">error</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Error Loading Todos</h2>
          <p className="text-gray-700 mb-4">
            {error instanceof Error ? error.message : 'Failed to load todos'}
          </p>
          {error instanceof Error && error.message.includes('Network Error') && (
            <p className="text-sm text-gray-600 mb-4">
              Please make sure the backend API is running at{' '}
              <code className="bg-gray-200 px-2 py-1 rounded">{import.meta.env.VITE_API_BASE_URL || 'https://localhost:5001/api'}</code>
            </p>
          )}
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Retry
          </button>
        </div>
      </div>
    )
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
              onChange={(e) => {
                setInputValue(e.target.value)
                if (validationError) setValidationError(null)
              }}
              placeholder="Add a new todo..."
              disabled={createTodo.isPending}
              className="w-full pl-12 pr-4 py-3 bg-white border border-blue-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed" />
          </div>
          <button 
            type="submit"
            disabled={createTodo.isPending || !inputValue.trim()}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
            {createTodo.isPending ? (
              <>
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                <span>Adding...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">add</span>
                <span>Add</span>
              </>
            )}
          </button>
        </div>
        
        {validationError && (
          <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3 animate-fade-in">
            <span className="material-symbols-outlined text-red-500 mt-0.5">error</span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-red-800 mb-1">Validation Error</p>
              <p className="text-sm text-red-700 whitespace-pre-line">{validationError}</p>
            </div>
            <button
              onClick={() => setValidationError(null)}
              className="text-red-400 hover:text-red-600 transition-colors">
              <span className="material-symbols-outlined text-lg">close</span>
            </button>
          </div>
        )}
      </form>

      {isLoading ? (
        <div className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200">
          <span className="material-symbols-outlined text-6xl text-blue-500 mb-4 animate-spin">
            progress_activity
          </span>
          <p className="text-gray-600 text-lg">Loading todos...</p>
        </div>
      ) : todos.length === 0 ? (
        <div className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200 border-dashed">
          <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">
            inbox
          </span>
          <p className="text-gray-600 italic text-lg">No todos yet. Add one above!</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-gray-500 italic mb-3 flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base">info</span>
            <span>Tip: Double-click a todo name to edit it</span>
          </p>
          
          {activeTodos.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-700 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">radio_button_unchecked</span>
                Active Tasks ({activeTodos.length})
              </h2>
              <div className="space-y-3">
                {activeTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-4 p-4 bg-white rounded-lg border border-blue-200 hover:border-blue-300 hover:shadow-md transition-all group">
                    <input
                      type="checkbox"
                      checked={todo.isComplete}
                      onChange={() => handleToggle(todo.id, todo.isComplete, todo.name)}
                      disabled={updateTodo.isPending}
                      className="w-5 h-5 rounded border-blue-300 text-blue-600 focus:ring-blue-500 focus:ring-offset-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" />
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        onBlur={() => saveEdit(todo.id, todo.isComplete)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            saveEdit(todo.id, todo.isComplete)
                          } else if (e.key === 'Escape') {
                            cancelEditing()
                          }
                        }}
                        autoFocus
                        disabled={updateTodo.isPending}
                        className="flex-1 px-2 py-1 text-lg bg-white border-2 border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    ) : (
                      <span
                        onDoubleClick={() => startEditing(todo.id, todo.name)}
                        className="flex-1 text-lg transition-all cursor-pointer text-gray-900"
                        title="Double-click to edit"
                      >
                        {todo.name}
                      </span>
                    )}
                    <button
                      onClick={() => handleDelete(todo.id)}
                      disabled={deleteTodo.isPending}
                      className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {completedTodos.length > 0 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-500 mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined">check_circle</span>
                Completed ({completedTodos.length})
              </h2>
              <div className="space-y-3">
                {completedTodos.map((todo) => (
                  <div
                    key={todo.id}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all group">
                    <input
                      type="checkbox"
                      checked={todo.isComplete}
                      onChange={() => handleToggle(todo.id, todo.isComplete, todo.name)}
                      disabled={updateTodo.isPending}
                      className="w-5 h-5 rounded border-gray-300 text-green-600 focus:ring-green-500 focus:ring-offset-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed" />
                    {editingId === todo.id ? (
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        onBlur={() => saveEdit(todo.id, todo.isComplete)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            saveEdit(todo.id, todo.isComplete)
                          } else if (e.key === 'Escape') {
                            cancelEditing()
                          }
                        }}
                        autoFocus
                        disabled={updateTodo.isPending}
                        className="flex-1 px-2 py-1 text-lg bg-white border-2 border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    ) : (
                      <span
                        onDoubleClick={() => startEditing(todo.id, todo.name)}
                        className="flex-1 text-lg transition-all cursor-pointer line-through text-gray-400"
                        title="Double-click to edit"
                      >
                        {todo.name}
                      </span>
                    )}
                    <button
                      onClick={() => handleDelete(todo.id)}
                      disabled={deleteTodo.isPending}
                      className="p-2 text-red-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100 flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTodos.length === 0 && completedTodos.length === 0 && (
            <div className="text-center py-16 bg-blue-50 rounded-xl border border-blue-200 border-dashed">
              <span className="material-symbols-outlined text-6xl text-blue-300 mb-4">
                inbox
              </span>
              <p className="text-gray-600 italic text-lg">No todos yet. Add one above!</p>
            </div>
          )}
        </>
      )}

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
