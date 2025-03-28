import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Trial from './sections/Trial'
import Login from './sections/Login'
import Contact from './sections/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Trial />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trial" element={<Trial />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;