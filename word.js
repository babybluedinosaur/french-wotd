async function fetchWord()
{
    const response = await fetch(browser.runtime.getURL('data/word-list.txt'));
    const text = await response.text();
    const words = text.split('\n').map(word => word.trim());
    tomorrow = new Date()+1;
    displayRandomWord(words);   

}

function displayRandomWord(words)
{
    const word = words[Math.floor(Math.random() * words.length)];
    document.getElementById('word').textContent = word;
}

fetchWord();