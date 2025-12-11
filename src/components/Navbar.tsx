import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-blue-200 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center sm:justify-start py-3 sm:py-0 sm:h-14">
          <div className="flex gap-3 sm:gap-4 md:gap-6">
            <Link
              to="/"
              title="Home"
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                location.pathname === '/'
                  ? 'bg-blue-500 shadow-md'
                  : 'hover:bg-blue-100'
              }`}>
              <span className={`material-symbols-outlined text-lg sm:text-xl ${
                location.pathname === '/' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>home</span>
              <span className={`hidden xs:inline ${
                location.pathname === '/' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>Home</span>
            </Link>
            <Link
              to="/todos"
              title="Todos"
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                location.pathname === '/todos'
                  ? 'bg-blue-500 shadow-md'
                  : 'hover:bg-blue-100'
              }`}>
              <span className={`material-symbols-outlined text-lg sm:text-xl ${
                location.pathname === '/todos' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>checklist</span>
              <span className={`hidden xs:inline ${
                location.pathname === '/todos' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>Todos</span>
            </Link>
            <Link
              to="/about"
              title="About"
              className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base ${
                location.pathname === '/about'
                  ? 'bg-blue-500 shadow-md'
                  : 'hover:bg-blue-100'
              }`}>
              <span className={`material-symbols-outlined text-lg sm:text-xl ${
                location.pathname === '/about' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>info</span>
              <span className={`hidden xs:inline ${
                location.pathname === '/about' ? 'text-white' : 'text-gray-700 hover:text-blue-700'
              }`}>About</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
