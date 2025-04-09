import { useUser } from '../context/UserContext'

function Profile() {
  const { user, logout } = useUser()

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden m-4">
      <div className="p-4 sm:p-8">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          Profile Information
        </div>
        <div className="mt-4 space-y-2">
          <p className="text-gray-700">
            <span className="font-bold">Name:</span> {user?.name}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Email:</span> {user?.email}
          </p>
          <p className="text-gray-700">
            <span className="font-bold">Role:</span> {user?.role}
          </p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={logout}
            className="w-full sm:w-auto px-4 py-2 rounded-md text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile 