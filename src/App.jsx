import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import Content from './components/content'

function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <Content></Content>
    </div>
  )
}

export default App
