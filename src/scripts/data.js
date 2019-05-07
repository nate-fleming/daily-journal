const API = {
    getJournalEntries() {
        return fetch('http://localhost:8088/entries')
            .then(entries => entries.json())
    },
    getOneEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`)
            .then(entries => entries.json())
    },
    saveEntry(newJournalEntry) {
        return fetch("http://localhost:8088/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)
        })
            .then(entries => entries.json())
    },
    deleteEntry(id) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
    },
    editEntry(id, obj) {
        return fetch(`http://localhost:8088/entries/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
    }
}