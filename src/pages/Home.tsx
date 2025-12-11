export default function Home() {

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Welcome to DevSecOps ToDo App
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
          A task management application built with the latest web technologies.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 mb-6">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-blue-600">task_alt</span>
          What is this app?
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          DevSecOps ToDo App is a task management tool designed to help you organize your daily tasks. 
          Whether you're managing personal errands or professional projects, this app provides a clean, responsive interface 
          to keep track of what needs to be done.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Built with React, TypeScript, and Tailwind CSS, it combines modern development practices with an elegant user experience 
          that works seamlessly across all your devices.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-cyan-600">settings</span>
          Key Features
        </h3>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">check_circle</span>
            <span>Create, complete, and delete tasks</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">check_circle</span>
            <span>Clean, modern interface with responsive design</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="material-symbols-outlined text-blue-500 text-2xl">settings</span>
            <span>Server state management with TanStack Query for optimal performance</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="material-symbols-outlined text-blue-500 text-xl mt-0.5">check_circle</span>
            <span>Built with best-practice DevSecOps principles</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
