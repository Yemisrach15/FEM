let seconds = document.querySelector('.seconds');
let minutes = document.querySelector('.minutes');
let hours = document.querySelector('.hours');
let days = document.querySelector('.days');

function updateSecond(secondCard) {
    let currentSecond = Number(secondCard.innerHTML) + 1;
    if (currentSecond == 60) {
        currentSecond = 0;
        updateMinute(minutes);
    }

    secondCard.innerHTML = formatDate(currentSecond);
}

function updateMinute(minuteCard) {
    let currentMinute = Number(minuteCard.innerHTML) + 1;
    if (currentMinute == 60) {
        currentMinute = 0;
        updateHour(hours);
    }

    minuteCard.innerHTML = formatDate(currentMinute);
}

function updateHour(hourCard) {
    let currentHour = Number(hourCard.innerHTML) + 1;
    if (currentHour == 24) {
        currentHour = 0;
        updateDay(days);
    }
    hourCard.innerHTML = formatDate(currentHour);
}

function updateDay(dayCard) {
    let currentDay = Number(dayCard.innerHTML) + 1;
    dayCard.innerHTML = formatDate(currentDay);
}

function formatDate(date) {
    if (String(date).length == 1) {
        return `0${date}`;
    }
    return String(date);
}

setInterval(updateSecond, 1000, seconds);