import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getTodayFormattedDate, getTodayFrenchFormat } from './utils/dates.js'
import Header from './components/Header.jsx'
import NewHabit from './NewHabit.jsx'

export default function App() {

  console.log(getTodayFormattedDate());
  const today = new Date();
  const todayFrenchFormat = getTodayFrenchFormat(today);


  return (
    <>
      <Header />
      <main>
        <NewHabit />
        <h2>{todayFrenchFormat}</h2>
      </main>
    </>
  )
}
