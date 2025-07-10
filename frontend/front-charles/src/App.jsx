import { useState } from 'react'
import './App.css'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Slider } from '../components/Slider'


function App() {

  return (
    <div className="body-general">
      <Header />
      <NavBar />
      <Slider />
    </div>
  )
}

export default App
