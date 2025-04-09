import { createContext, useState, useContext } from 'react'

// Create the context
const AppContext = createContext()

// Custom hook to use the app context
export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}

// Provider component
export const AppProvider = ({ children }) => {
  // Theme state
  const [theme, setTheme] = useState('light')
  
  // Toggle theme function
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }
  
  // Context value
  const value = {
    theme,
    toggleTheme,
    isDarkMode: theme === 'dark'
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext 