import { useState, useEffect } from 'react'
import './App.css'
import { getTodayFormattedDate, getTodayFrenchFormat } from './utils/dates.js'
import Header from './components/Header.jsx'
import NewHabit from './NewHabit.jsx'
import Habit from './Habit.jsx'
import supabase from './supabase-client.js'
import { fetchAllHabitsWithLogs } from './api.js'

export default function App() {

    const [habits, setHabits] = useState([]);

    useEffect(() => {
        fetchAllHabitsWithLogs()
            .then(data => setHabits(data));
    }, []);


    const today = new Date();
    const todayFrenchFormat = getTodayFrenchFormat(today);


    const habitsElements = habits.map(habit => (
        <Habit
            key={habit.id}
            name={habit.name}
            status={habit.status}
            daily_amount={habit.daily_amount}
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
