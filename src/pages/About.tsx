import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-5xl text-blue-500">info</span>
        <h1 className="text-4xl font-bold text-gray-900">About This App</h1>
      </div>
      
      <div className="space-y-8">
        <section className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-blue-500">code</span>
            <h2 className="text-2xl font-semibold text-gray-900">Technology Stack</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">React 19</strong>
                <span className="text-gray-600"> - Modern UI library</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">TypeScript</strong>
                <span className="text-gray-600"> - Type-safe development</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">Vite</strong>
                <span className="text-gray-600"> - Build tool</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">React Router</strong>
                <span className="text-gray-600"> - Client-side routing</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">Tailwind CSS</strong>
                <span className="text-gray-600"> - Utility-first CSS framework</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">Material Icons</strong>
                <span className="text-gray-600"> - Modern icon system</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">Playwright</strong>
                <span className="text-gray-600"> - End-to-end testing</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">TanStack Query</strong>
                <span className="text-gray-600"> - Server state management & data fetching</span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-blue-500 mt-1">check_circle</span>
              <div>
                <strong className="text-blue-600">Axios</strong>
                <span className="text-gray-600"> - HTTP client</span>
              </div>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-xl p-6 border border-blue-200 shadow-md">
          <div className="flex items-center gap-2 mb-4">
            <span className="material-symbols-outlined text-blue-500">auto_awesome</span>
            <h2 className="text-2xl font-semibold text-gray-900">Features</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">route</span>
              <div className="text-gray-700">Client-side routing with React Router</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">cloud_sync</span>
              <div className="text-gray-700">Server state management with TanStack Query</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">cached</span>
              <div className="text-gray-700">Automatic caching and background refetching</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">shield</span>
              <div className="text-gray-700">TypeScript for type safety</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">error</span>
              <div className="text-gray-700">Error handling</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">palette</span>
              <div className="text-gray-700">UI with Tailwind CSS</div>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-cyan-500 mt-1">widgets</span>
              <div className="text-gray-700">Material Icons integration</div>
            </li>
          </ul>
        </section>
      </div>

      <div className="mt-8 flex gap-4 justify-center">
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
