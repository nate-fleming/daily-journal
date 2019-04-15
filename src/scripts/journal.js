const entryList = document.querySelector('.entryLog')



const journalEntries = [
    {
        date: '07/24/2018',
        title: 'Array methods',
        content: 'We learned about 4 different array methods today. forEach made sense, but the others still confuse me.',
        mood: 'ok'
    }
]


journalEntries.forEach(entry => {
    const h2 = document.createElement('h2')
    const h3 = document.createElement('h2')
    const p = document.createElement('p')
    const p2 = document.createElement('p')
    
    h2.textContent = entry.title
    h3.textContent = entry.date
    p.textContent = entry.content
    p2.textContent = `Mood: ${entry.mood}`

    entryList.appendChild(h2)
    entryList.appendChild(h3)
    entryList.appendChild(p)
    entryList.appendChild(p2)
})


