import { Navigation } from './router/Navigation'
import { Outlet } from 'react-router-dom'

export const App = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
    </>
  )
}
