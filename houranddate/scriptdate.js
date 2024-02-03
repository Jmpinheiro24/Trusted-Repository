function updateDateTime() {
    var currentDate = new Date();
    var dateTimeFormatted = currentDate.toLocaleString();
    document.getElementById('dateTime').textContent = dateTimeFormatted;
}

setInterval(updateDateTime, 1000);
updateDateTime(); 
