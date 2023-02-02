import React from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './assets/logo.svg'
import Profile from './pages/Profile'
import './App.css'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path='/' element={<Profile userName='rubenrgc' />} />
          <Route path='/projects' element={<Projects userName='rubenrgc' />} />
          <Route path='/projects/:name' element={<ProjectDetail userName='rubenrgc' />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
