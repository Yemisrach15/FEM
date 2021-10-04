let mainContainer = document.querySelector('main');

fetch("data.json")
    .then(response => response.json())
    .then(json => {
        mainContainer.innerHTML += displayWeekly(json);
        console.log(json);
    });

let dailyBtn = document.querySelector('.btn-daily');
let weeklyBtn = document.querySelector('.btn-weekly');
let monthlyBtn = document.querySelector('.btn-monthly');

//FIXME: not working. Reason not figured out yet
dailyBtn.addEventListener("click", () => {
    console.log('clicked!');
    // document.querySelector('.btn--active').classList.remove('btn--active');
    // dailyBtn.classList.add('btn--active');
})

function displayDaily(json) {
    let cards = "";
    json.forEach(element => {
        let cardContent = `
            <div class="card">
                <div class="card__sub card--dark">
                <div class="card__top">
                    <p>${element.title}</p>
                    <button class="btn--ellipsis"><img src="./images/icon-ellipsis.svg" alt=""></button>
                </div>
                <div class="card__body">
                    <h2>${element.timeframes.daily.current}hrs</h2>
                    <p>Yesterday - ${element.timeframes.daily.previous}hrs</p>
                </div>
                </div>
            </div>
        `;
        cards += cardContent;
    })

    return cards;
}

function displayWeekly(json) {
    let cards = "";
    json.forEach(element => {
        let cardContent = `
            <div class="card">
                <div class="card__sub card--dark">
                <div class="card__top">
                    <p>${element.title}</p>
                    <button class="btn--ellipsis"><img src="./images/icon-ellipsis.svg" alt=""></button>
                </div>
                <div class="card__body">
                    <h2>${element.timeframes.weekly.current}hrs</h2>
                    <p>Last Week - ${element.timeframes.weekly.previous}hrs</p>
                </div>
                </div>
            </div>
        `;
        cards += cardContent;
    })

    return cards;
}

function displayMonthly(json) {
    let cards = "";
    json.forEach(element => {
        let cardContent = `
            <div class="card">
                <div class="card__sub card--dark">
                <div class="card__top">
                    <p>${element.title}</p>
                    <button class="btn--ellipsis"><img src="./images/icon-ellipsis.svg" alt=""></button>
                </div>
                <div class="card__body">
                    <h2>${element.timeframes.monthly.current}hrs</h2>
                    <p>Last Month - ${element.timeframes.monthly.previous}hrs</p>
                </div>
                </div>
            </div>
        `;
        cards += cardContent;
    })

    return cards;
}