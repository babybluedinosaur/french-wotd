function checkIfDayPassed()
{
    const today = new Date().toDateString();
    const storedDate = localStorage.getItem('todaysDate');
    if (storedDate !== today)
    {
        localStorage.setItem('todaysDate', today);
        return true;
    }
    return false;
}

//get word from data.txt
async function fetchWord()
{
    if (checkIfDayPassed()) 
    {
        const response = await fetch(browser.runtime.getURL('data/word-list.txt'));
        const text = await response.text();
        const words = text.split('\n').map(word => word.trim());
        const word = words[Math.floor(Math.random() * words.length)];
        localStorage.setItem('word', word);
    }
    displayRandomWord(localStorage.getItem('word'));
}

//display word on extension
function displayRandomWord(word)
{
    document.getElementById('word').textContent = word;
}
fetchWord();

