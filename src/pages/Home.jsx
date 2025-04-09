import { useUser } from '../context/UserContext'
import { Link } from 'react-router-dom'

function Home() {
  const { user, isAuthenticated } = useUser()
  
  return (
    <div className="min-h-screen p-4 bg-gradient-to-br from-green-100 to-teal-100 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-xl shadow-xl overflow-hidden bg-white">
          <div className="px-4 sm:px-6 py-6 sm:py-8 text-center bg-gradient-to-r from-green-600 to-teal-600">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">Welcome to Day 8</h1>
            <p className="mt-2 text-green-100">Your React project is ready!</p>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-lg shadow-md bg-green-50">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-green-800">Getting Started</h2>
                <p className="text-green-700">
                  This project is set up with React, Vite, and Tailwind CSS. You can start building your application by editing the files in the src directory.
                </p>
              </div>
              
              <div className="p-4 sm:p-6 rounded-lg shadow-md bg-teal-50">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 text-teal-800">Features</h2>
                <ul className="list-disc list-inside space-y-1 text-teal-700">
                  <li>React 18</li>
                  <li>Vite for fast development</li>
                  <li>Tailwind CSS for styling</li>
                  <li>ESLint for code quality</li>
                  <li>Context API for state management</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              {isAuthenticated ? (
                <Link 
                  to="/profile" 
                  className="w-full sm:w-auto text-center font-medium py-2 px-6 rounded-lg transition duration-200 bg-green-600 hover:bg-green-700 text-white"
                >
                  View Profile
                </Link>
              ) : (
                <Link 
                  to="/login" 
                  className="w-full sm:w-auto text-center font-medium py-2 px-6 rounded-lg transition duration-200 bg-green-600 hover:bg-green-700 text-white"
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 