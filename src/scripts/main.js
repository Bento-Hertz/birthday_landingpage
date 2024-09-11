AOS.init();

const eventDate = new Date('July 9, 2025 18:00:00');
const eventTimeStamp = eventDate.getTime();

const displayTimeElement = document.querySelector('#time_counter');

setInterval(() => {
    const now = new Date();
    const currentTimeStamp = now.getTime();

    const msUntilEvent = eventTimeStamp - currentTimeStamp;
    const dayInMs = 1000 * 60 * 60 * 24;
    const hourInMs = 1000 * 60 * 60;
    const minuteInMs = 1000 * 60;
    const ms = 1000;
    
    const daysUntilEvent = Math.floor(msUntilEvent / dayInMs);
    const hoursUntilEvent = Math.floor((msUntilEvent % dayInMs) / hourInMs);
    const minutesUntilEvent = Math.floor((msUntilEvent % hourInMs) / minuteInMs);
    const secondsUntilEvent = Math.floor((msUntilEvent % minuteInMs) / (ms));

    displayTimeElement.innerHTML = daysUntilEvent + 'd ' + hoursUntilEvent + 'h ' + minutesUntilEvent + 'm ' + secondsUntilEvent + 's';
}, 1000);