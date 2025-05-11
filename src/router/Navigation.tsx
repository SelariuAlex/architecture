import { Link, useNavigate } from 'react-router-dom'

const authService = {
  isAuthenticated: () => {
    if (typeof window === 'undefined') return false // Handle server-side rendering
    return localStorage.getItem('isLoggedIn') === 'true'
  },
  login: (username: string, password: string, callback: (success: boolean) => void): void => {
    // Simulate an API call
    setTimeout(() => {
      if (username === 'user' && password === 'password') {
        if (typeof window !== 'undefined') {
          localStorage.setItem('isLoggedIn', 'true')
        }
        callback(true)
      } else {
        callback(false)
      }
    }, 500) // Simulate 500ms delay
  },
  logout: (callback: () => void): void => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('isLoggedIn')
    }
    callback()
  },
}

export const Navigation = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout(() => {
      navigate('/login')
    })
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/you">About You</Link>
        </li>
      </ul>
      {authService.isAuthenticated() && <button onClick={handleLogout}>Logout</button>}
    </nav>
  )
}
