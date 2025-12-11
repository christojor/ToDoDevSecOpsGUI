import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50 text-gray-900">
      <header className="bg-gradient-to-r from-blue-600 to-cyan-600 border-b border-blue-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <span className="material-symbols-outlined text-6xl sm:text-7xl lg:text-8xl text-white">
              task_alt
            </span>
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                DevSecOps ToDo App
              </h2>
            </div>
          </div>
        </div>
      </header>

      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="w-full">{children}</div>
      </main>

      <footer className="mt-auto bg-white/80 border-t border-blue-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-gray-600">
          <div className="mt-6 pt-6 border-t border-blue-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-1">
                <span className="material-symbols-outlined text-base">
                  copyright
                </span>
                <span>
                  {new Date().getFullYear()} Christoffer Jörgensen. All rights reserved.
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
