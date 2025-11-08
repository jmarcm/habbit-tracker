import React from "react";

export default function NewHabit() {

    function addHabbit(formData) {
        const data = Object.fromEntries(formData);
        console.log(data);
    }

    return (
        <form action={addHabbit} className="add-habit-form">
            <label htmlFor="habitName">Ajouter une habitude</label>
            <input type="text" id="habitName" name="habitName" className="input" />
            <label htmlFor="">Fréquence par jour</label>
            <input type="text" id="habitFrequency" name="habitFrequency" className="input" defaultValue="1" />
            <div className="buttons">
                <button type="reset" className="btn-add-habit cancel">Annuler</button>
                <button type="submit" className="btn-add-habit valid">Ajouter</button>
            </div>

        </form>
    );
}