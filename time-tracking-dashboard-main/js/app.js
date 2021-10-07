let profileContainer = document.querySelector('.card:first-of-type');
let dailyBtn = document.querySelector('#btn-daily');
let weeklyBtn = document.querySelector('#btn-weekly');
let monthlyBtn = document.querySelector('#btn-monthly');
let data, currentActiveBtn;
// TODO: REMOVE DUPLICATE ON INSERTADJACENTHTML
fetch("data.json")
    .then(response => response.json())
    .then(json => {
        data = json;
        profileContainer.insertAdjacentHTML('afterend', displayWeekly(data));
    })
    .catch(e => console.log(e));

dailyBtn.addEventListener("click", () => {
    currentActiveBtn = document.querySelector('.btn--active')
    currentActiveBtn.classList.remove('btn--active');
    currentActiveBtn.disabled = false;

    dailyBtn.classList.add('btn--active');
    dailyBtn.disabled = true;
    profileContainer.insertAdjacentHTML('afterend', displayDaily(data));
});

weeklyBtn.addEventListener("click", () => {
    currentActiveBtn = document.querySelector('.btn--active')
    currentActiveBtn.classList.remove('btn--active');
    currentActiveBtn.disabled = false;

    weeklyBtn.classList.add('btn--active');
    weeklyBtn.disabled = true;
    profileContainer.insertAdjacentHTML('afterend', displayWeekly(data));
});

monthlyBtn.addEventListener("click", () => {
    currentActiveBtn = document.querySelector('.btn--active')
    currentActiveBtn.classList.remove('btn--active');
    currentActiveBtn.disabled = false;

    monthlyBtn.classList.add('btn--active');
    monthlyBtn.disabled = true;
    profileContainer.insertAdjacentHTML('afterend', displayMonthly(data));
});

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
