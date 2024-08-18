import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import "./App.css"
import Login from './pages/login' // Import the Login component
import Signup from './pages/signup'

const App = () => {
  return (
    <Router>
      <div>
        <Link to='/pages/login'>Hello</Link>

        <Routes>
          <Route path='/pages/login' element={<Login />} />
          <Route path='/pages/signup' element={<Signup />} />
          {/* Other routes can go here */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
