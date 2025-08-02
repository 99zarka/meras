export function updateDateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

    const day = now.getDate();
    const formattedDay = day < 10 ? '0' + day : day;

    const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                        "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    const dateTimeString = `${hours}:${formattedMinutes} ${ampm} || ${formattedDay} ${month} ${year}`;
    console.log(`Current Date and Time: ${dateTimeString}`);

    document.getElementById('current-datetime').textContent = dateTimeString;
}
