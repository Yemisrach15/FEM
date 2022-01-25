let seconds = document.querySelectorAll('.seconds');
let minutes = document.querySelectorAll('.minutes');
let hours = document.querySelectorAll('.hours');
let days = document.querySelectorAll('.days');

function updateSecond(secondCards) {
    let currentSecond = Number(secondCards[0].innerHTML) + 1;
    if (currentSecond == 60) {
        currentSecond = 0;
        updateMinute(minutes);
    }

    secondCards.forEach((card) => {
        card.innerHTML = formatDate(currentSecond);
        if (card.classList.contains('top')) {
            card.classList.add('animate-flip-top');
        }
        if (card.classList.contains('bottom')) {
            card.classList.add('animate-flip-bottom');
        }
    })
}

function updateMinute(minuteCards) {
    let currentMinute = Number(minuteCards[0].innerHTML) + 1;
    if (currentMinute == 60) {
        currentMinute = 0;
        updateHour(hours);
    }

    minuteCards.forEach((card) => {
        card.innerHTML = formatDate(currentMinute);
        if (card.classList.contains('top')) {
            card.classList.remove('animate-flip-top');
            void card.offsetWidth;
            card.classList.add('animate-flip-top');
        }
        if (card.classList.contains('bottom')) {
            card.classList.remove('animate-flip-bottom');
            void card.offsetWidth;
            card.classList.add('animate-flip-bottom');
        }
    })
}

function updateHour(hourCards) {
    let currentHour = Number(hourCards[0].innerHTML) + 1;
    if (currentHour == 24) {
        currentHour = 0;
        updateDay(days);
    }

    hourCards.forEach((card) => {
        card.innerHTML = formatDate(currentHour);
        if (card.classList.contains('top')) {
            card.classList.remove('animate-flip-top');
            void card.offsetWidth;
            card.classList.add('animate-flip-top');
        }
        if (card.classList.contains('bottom')) {
            card.classList.remove('animate-flip-bottom');
            void card.offsetWidth;
            card.classList.add('animate-flip-bottom');
        }
    })
}

function updateDay(dayCards) {
    let currentDay = Number(dayCards[0].innerHTML) + 1;

    dayCards.forEach((card) => {
        card.innerHTML = formatDate(currentDay);
        if (card.classList.contains('top')) {
            card.classList.remove('animate-flip-top');
            void card.offsetWidth;
            card.classList.add('animate-flip-top');
        }
        if (card.classList.contains('bottom')) {
            card.classList.remove('animate-flip-bottom');
            void card.offsetWidth;
            card.classList.add('animate-flip-bottom');
        }
    })
}

function formatDate(date) {
    if (String(date).length == 1) {
        return `0${date}`;
    }
    return String(date);
}

setInterval(updateSecond, 1000, seconds);