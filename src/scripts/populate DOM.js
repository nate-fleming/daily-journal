let body = document.querySelector("#body")

const populateDOM = () => {
    body.innerHTML = `
        <h1> Daily Journal</h1>
         <div class="flexbox-container">
        <form action="">
        <div class="transparent">
            <fieldset>
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate" required>
            </fieldset>
            <fieldset>
                <label for="concepts">Title</label>
                <input type="text" name="concepts" id="title" required>
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal Entry</label>
                <textarea type="text" name="journalEntry" id="journalEntry" cols="30" rows="4" required></textarea>
            </fieldset>
            <fieldset>
                <label for="mood">Mood for the day</label>
                <select name="mood" id="mood" required>
                    <option value="Aight">Aight</option>
                    <option value="Sad">Sad</option>
                    <option value="Happy">Happy</option>
                    <option value="Hopeless">Hopeless</option>
                </select>
            </fieldset>
        </div>
                <button type="button" id="save-btn">Save Journal Entry</button>
        </form>
        <form class="filtered-searches">
            <div class="mood-filter transparent">
                <legend>Filter Journal Entries</legend>
                <input type="radio" class="radio" value="aight"><label>Aight</label>
                <input type="radio" class="radio"  value="sad"><label>Sad</label>
                <input type="radio" class="radio" value="happy"><label>Happy</label>
                <input type="radio" class="radio" value="hopeless"><label>Hopeless</label>
            </div>
            <div class="word-filter transparent">
                <label>Serch Entries</label>
                <input type="text"  id="search-entries" placeholder="Search Journal Entres" required>
            </div>
        </form>
        <div class="flexbox-container">
            <article class="entryLog"></article>
        </div>`
}

populateDOM()

