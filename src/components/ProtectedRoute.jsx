import { Navigate, useLocation } from 'react-router-dom'
import { useUser } from '../context/UserContext'

/**
 * ProtectedRoute component
 * 
 * This component checks if a user is authenticated using the UserContext.
 * If the user is authenticated, it renders the children components.
 * If not, it redirects to the login page and saves the current location.
 * 
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - The components to render if authenticated
 * @param {string} props.redirectPath - The path to redirect to if not authenticated (default: '/login')
 * @returns {React.ReactNode} - The protected component or a redirect
 */
function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser()
  const location = useLocation()
  
  if (!isAuthenticated) {
    // Redirect to login page but save the attempted url
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  
  // Render children if authenticated
  return children
}

export default ProtectedRoute 