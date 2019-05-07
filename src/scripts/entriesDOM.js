const sendToDOM = {
    renderJournal(entries) {
        entries.forEach(entry => {
            entryComponent.makeEntry(entry)
        })
    }
}
