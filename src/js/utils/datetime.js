export function updateDateTime() {
    const now = new Date();

    // Get Arabic weekday name
    const formattedWeekday = new Intl.DateTimeFormat('ar-SA', {
        weekday: 'long',
        timeZone: 'Asia/Riyadh'
    }).format(now);

    // Get date components for Gregorian calendar and English digits
    const day = now.toLocaleString('en-US', { day: '2-digit', timeZone: 'Asia/Riyadh' });
    const month = now.toLocaleString('en-US', { month: '2-digit', timeZone: 'Asia/Riyadh' });
    const year = now.toLocaleString('en-US', { year: 'numeric', timeZone: 'Asia/Riyadh' });
    const formattedDate = `${day}-${month}-${year}`;

    // Get time components for 12-hour format without AM/PM and English digits
    let hours = parseInt(now.toLocaleString('en-US', { hour: 'numeric', hour12: true, timeZone: 'Asia/Riyadh' }));
    const minutes = now.toLocaleString('en-US', { minute: '2-digit', timeZone: 'Asia/Riyadh' });

    // Adjust hours for 12-hour format (e.g., 12 AM should be 12, 12 PM should be 12)
    // The example "4:34" implies just the number, not 04.
    // If the current hour is 0 (midnight), it should be 12.
    // If the current hour is 13-23 (PM), it should be hour - 12.
    // If the current hour is 12 (noon), it should be 12.
    const currentHours24 = now.toLocaleString('en-US', { hour: 'numeric', hourCycle: 'h23', timeZone: 'Asia/Riyadh' });
    let displayHours = parseInt(currentHours24);
    if (displayHours === 0) {
        displayHours = 12; // 12 AM
    } else if (displayHours > 12) {
        displayHours -= 12; // PM hours
    }
    const formattedMinutes = minutes.padStart(2, '0');
    const formattedTime = `${displayHours}:${formattedMinutes}`;

    const dateTimeString = `${formattedWeekday} ${formattedDate} / ${formattedTime}`;
    console.log(`Current Date and Time: ${dateTimeString}`);

    document.getElementById('current-datetime').textContent = dateTimeString;
}
