import { useState } from 'react'
import './App.css'
import { Header } from '../components/Header'
import { NavBar } from '../components/NavBar'
import { Slider } from '../components/Slider'
import MasVendidos from '../components/MasVendidos'


function App() {

  return (
    <div className="body-general">
      <Header />
      <NavBar />
      <Slider />
      <MasVendidos />
    </div>
  )
}

export default App

