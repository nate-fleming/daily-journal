const entryList = document.querySelector('.entryLog')


fetch('http://localhost:3000/entries')
    .then(entries => entries.json())
    .then(journalEntries => {
        journalEntries.forEach(entry => {
            const h2 = document.createElement('h2')
            const h3 = document.createElement('h3')
            const p = document.createElement('p')
            const p2 = document.createElement('p')
            const div = document.createElement('div')
            
            div.classList = 'journal-entry transparent'
            h2.textContent = entry.title
            h3.textContent = entry.date
            p.textContent = entry.content
            p2.textContent = `Mood: ${entry.mood}`
        
            entryList.appendChild(div)
            div.appendChild(h2)
            div.appendChild(h3)
            div.appendChild(p)
            div.appendChild(p2)
        })
    })




