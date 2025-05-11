import { Routes, Route } from 'react-router-dom'

import { App } from '../App'
import { Home } from '../pages/Home/Home'
import { About } from '../pages/About/About'
import { AboutYou } from '../pages/AboutYou/AboutYou'
import { Login } from '../pages/Login/Login'
import { ProtectedRoute } from './ProtectedRoute'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="about" element={<About />}>
            <Route path="you" element={<AboutYou />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}
