function dateOfToday() {
    var date = new Date().toLocaleDateString();

    document.getElementById("todaysDate").textContent = `Today's date is: ${date}`;
}

async function getRandomWord() {
    try {
        const response = await fetch("./data/word-list.txt");

        const text = await response.text();

        const words = text.split(/\s+/);

        const randomIndex = Math.floor(Math.random() * words.length);
        
        var word = words[randomIndex];

        document.getElementById("dailyWord").textContent = `${word}`;

    } catch (err) {
        console.error('Error reading file:', err);
        return null;
    }
}
window.onload = function() {
    dateOfToday();
    getRandomWord();
};
