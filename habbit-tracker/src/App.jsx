import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  function addHabbit(formData) {
    const habbitName = formData.get("habbitName");
    console.log(habbitName);
  }

  return (
    <main>
      <form action={addHabbit}>
        <input type="text" id="habbitName" name="habbitName" />
        <button>Ajouter</button>
      </form>
    </main>
  )
}
