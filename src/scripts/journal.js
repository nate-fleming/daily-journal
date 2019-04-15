const entryList = document.querySelector('.entryLog')


const journalEntries = [
    {
        date: '07/24/2018',
        title: 'Array methods',
        content: 'We learned about 4 different array methods today. forEach made sense, but the others still confuse me.',
        mood: 'ok'
    }
]

const createEntry = (journalEntry) => {
    console.log(journalEntry)
    return `
    <h2>${journalEntry.title}</h1>
    <h3>${journalEntry.date}</h2>
    <p>${journalEntry.content}</p>
    <p>Mood: ${journalEntry.mood}</p>
    `
}


const renderJournalEntries = (entries) => {
    entries.forEach(entry => {
        item = createEntry(entry)
        entryList.innerHTML += item
    })
}


renderJournalEntries(journalEntries)
// const addEntry = () => journalEntries.push();

// addEntry();

// console.log(journalEntries);