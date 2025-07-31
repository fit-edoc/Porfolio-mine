import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet, Routes } from 'react-router-dom'
import Nav from './Components/Nav'

function App() {


  return (
  <div className='min-h-screen w-screen bg-neutral-900'>

    <Nav/>
    <Outlet/>
  </div>
  )
}

export default App
