const entryList = document.querySelector('.entryLog')


const entryComponent = {
    makeEntry(entry) {
        const h2 = document.createElement('h2')
        const h3 = document.createElement('h3')
        const p = document.createElement('p')
        const p2 = document.createElement('p')
        const div = document.createElement('div')
        const deleteBtn = document.createElement('button')
        const editBtn = document.createElement('button')

        div.classList = `journal-entry entry--${entry.id} transparent`
        div.id = `entry--${entry.id}`
        h2.textContent = entry.title
        h3.textContent = entry.date
        p.textContent = entry.content
        p2.textContent = `Mood: ${entry.mood}`
        deleteBtn.textContent = "Delete Entry"
        deleteBtn.id = `delete--${entry.id}`
        deleteBtn.className = "delete-button"
        editBtn.textContent = "Edit Entry"
        editBtn.id = `edit--${entry.id}`
        editBtn.className = "edit-button"

        entryList.appendChild(div)
        div.append(h2, h3, p, p2, deleteBtn, editBtn)
    }
}

makeEdit = (entry) => {
    console.log(entry.mood)
    const editDiv = document.querySelector(`.entry--${entry.id}`)
    editDiv.innerHTML = `
        <fieldset>
            <label for="journalDate">Date of entry</label>
            <input type="date" id="editJournalDate"  value="${entry.date}" required>
        </fieldset>
        <fieldset>
            <label for="concepts">Title</label>
            <input type="text" id="editTitle" value="${entry.title}" required>
        </fieldset>
        <fieldset>
            <label for="journalEntry">Journal Entry</label>
            <textarea type="text" id="editBody" cols="30" rows="4" required>${entry.content}</textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <select name="mood" id="editMood" value="${entry.mood}" required>
                <option value="Aight">Aight</option>
                <option value="Sad">Sad</option>
                <option value="Happy">Happy</option>
                <option value="Hopeless">Hopeless</option>
            </select>
        </fieldset>
        <button id="saveEdit--${entry.id}" class="save-edit-btn">Save Edits</button>
    `
}





