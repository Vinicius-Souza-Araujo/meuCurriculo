import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Introducao from './Components/Introducao/Introducao'
import Formacao from './Components/Formacao/Formacao'

function App() {

  return (
    <div>
      <Header />
      <Introducao />
      <Formacao />
      
       
    </div>
  )
}

export default App
