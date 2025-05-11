import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    // In a real application, you would authenticate against a server.
    // For this example, we'll just simulate a successful login.
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true') // Store login status
      navigate('/about')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <Link to="/login">Sign Up</Link> {/* Optional signup link */}
      </p>
    </div>
  )
}
