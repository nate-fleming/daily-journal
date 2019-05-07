const radioButton = document.querySelectorAll(".radio")
const entryLog = document.querySelector(".entryLog")
const filteredSearch = document.querySelector("#search-entries")


API.getJournalEntries().then(entries => sendToDOM.renderJournal(entries))


document.querySelector("#save-btn").addEventListener("click", () => {
    let date = document.querySelector("#journalDate").value
    let title = document.querySelector("#title").value
    let content = document.querySelector("#journalEntry").value
    let mood = document.querySelector("#mood").value

    if (title.length > 10) {
        alert("Must be less than 10 characters")
        title = ""
    }


    const entry = {
        date: date,
        title: title,
        content: content,
        mood: mood
    }

    API.saveEntry(entry)
        .then(API.getJournalEntries().then(entries => sendToDOM.renderJournal(entries)))
})

//Mood Search
radioButton.forEach(button => {
    button.addEventListener("click", (e) => {
        radioButton.forEach(button => {
            button.checked = false
        })
        entryList.innerHTML = ""
        const entryMood = e.target.value
        API.getJournalEntries().then(entries => {
            let filteredEntries = entries.filter(entry => entry.mood.toLowerCase() === entryMood)
            sendToDOM.renderJournal(filteredEntries)
        })
        button.checked = true
    })
})

//Word Search
filteredSearch.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault()
        let word = e.target.value.toLowerCase()
        API.getJournalEntries().then(entries => {
            let searchEntries = entries.filter(entry => {
                for (const value of Object.values(entry)) {
                    if (isNaN(value) && value.toLowerCase().includes(word)) {
                        return value
                    }
                }
            })
            entryList.innerHTML = ""
            sendToDOM.renderJournal(searchEntries)
        })
    }
})

//Delete Entry
entryLog.addEventListener("click", (e) => {
    if (e.target.className === "delete-button") {
        let deleteButtonId = e.target.id.split("--")[1]
        API.deleteEntry(deleteButtonId)
            .then(API.getJournalEntries().then(entries => sendToDOM.renderJournal(entries)))
    }
})

//Edit entry
entryLog.addEventListener("click", (e) => {
    if (e.target.className === "edit-button") {
        let editButtonId = e.target.id.split("--")[1]
        API.getOneEntry(editButtonId)
            .then(entry => {
                makeEdit(entry)
                document.querySelector(".save-edit-btn").addEventListener("click", (e) => {
                    let objectId = e.target.id.split("--")[1]
                    let date = document.querySelector("#editJournalDate").value
                    let title = document.querySelector("#editTitle").value
                    let content = document.querySelector("#editBody").value
                    let mood = document.querySelector("#editMood").value

                    let newObject = {
                        date: date,
                        title: title,
                        content: content,
                        mood: mood
                    }

                    API.editEntry(objectId, newObject)
                        .then(API.getJournalEntries().then(entries => sendToDOM.renderJournal(entries)))
                })
            })
    }

})


