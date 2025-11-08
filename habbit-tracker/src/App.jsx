import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'

export default function App() {

  function addHabbit(formData) {
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <>
    <Header />
    <main>
      
    </main>
    </>
  )
}
