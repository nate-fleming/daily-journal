
const journalEntries = [
    
]

const objectJournalEntry = {
    date: '',
    title: '',
    content: '',
    mood: ''
}

const loopsJournalEntry = {
    date: '',
    title: '',
    content: '',
    mood: ''
}

const githubJournalEntry = {
    date: '',
    title: '',
    content: '',
    mood: ''
}



const addEntry = () => journalEntries.push(objectJournalEntry,loopsJournalEntry,githubJournalEntry);

addEntry();

console.log(journalEntries);