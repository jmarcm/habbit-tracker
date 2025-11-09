import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getTodayFormattedDate, getTodayFrenchFormat } from './utils/dates.js'
import Header from './components/Header.jsx'
import NewHabit from './NewHabit.jsx'
import Habit from './Habit.jsx'

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
        <div className="current-habits">
          <Habit text="Marcher 15mn" status="todo" value={1} />
          <Habit text="Méditer" status="done" value={1} />
          <Habit text="Boire de l'eau" status="in-progress" value={12} />
        </div>
      </main>
    </>
  )
}
