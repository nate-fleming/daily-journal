const entryList = document.querySelector('.entryLog')


fetch('http://localhost:8088/entries')
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
            div.append(h2, h3, p, p2)
        })
    })




