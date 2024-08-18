function dateOfToday() {
    var date = new Date().toLocaleDateString();

    document.getElementById("todaysDate").textContent = `Today's date is: ${date}`;
}

window.onload = dateOfToday;