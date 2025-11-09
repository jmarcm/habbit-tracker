import { useState } from 'react'
import './App.css'
import { getTodayFormattedDate, getTodayFrenchFormat } from './utils/dates.js'
import Header from './components/Header.jsx'
import NewHabit from './NewHabit.jsx'
import Habit from './Habit.jsx'

export default function App() {

  const today = new Date();
  const todayFrenchFormat = getTodayFrenchFormat(today);

  const [habits, setHabits] = useState([
    { id: 1, text: "Marcher 15mn", status: "todo", value: 1 },
    { id: 2, text: "Méditer", status: "done", value: 1 },
    { id: 3, text: "Boire de l'eau", status: "in-progress", value: 12 },
  ]);

  const habitsElements = habits.map(habit => (
    <Habit
      key={habit.id}
      text={habit.text}
      status={habit.status}
      value={habit.value}
    />
  ));


  return (
    <>
      <Header />
      <main>
        <NewHabit />
        <h2>{todayFrenchFormat}</h2>
        <div className="current-habits">
          {habitsElements}
        </div>
      </main>
    </>
  )
}
