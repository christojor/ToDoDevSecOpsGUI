import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center animate-fade-in max-w-2xl mx-auto">
      <div className="mb-8">
        <span className="material-symbols-outlined text-9xl text-blue-400">
          error
        </span>
      </div>
      <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent">
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-4 text-gray-900">Page Not Found</h2>
      <p className="text-gray-600 mb-8 text-lg">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md hover:shadow-lg">
        <span className="material-symbols-outlined">home</span>
        <span>Go back home</span>
      </Link>
    </div>
  )
}
