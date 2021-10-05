let mainContainer = document.querySelector('#container');
let dailyBtn = document.querySelector('.btn-daily');
let weeklyBtn = document.querySelector('#btn-weekly');
let monthlyBtn = document.querySelector('#btn-monthly');
// create a global variable

async function fetchAll() {
let allData;
  
  try{
  
const res = await fetch('data.json');
      // assign the variable to the returned data 
        allData= await res.json();
        
        // if you want to display a default data e.g daily
        // then uncomment the following line
        
        /*
        mainContainer.insertAdjacentHTML('beforeend',displayDaily(allData))
        */
return allData
}
catch(err){
  console.error(err)
}
}
fetchAll()
//FIXME: async code blocking
dailyBtn.addEventListener("click", async() => {
   let d=await fetchAll();
   mainContainer.innerHTML=''

     mainContainer.insertAdjacentHTML('beforeend',displayDaily(d))

  // mainContainer.innerHTML+=displayDaily(d)
});
weeklyBtn.addEventListener("click", async () => {
   let d=await fetchAll()
mainContainer.innerHTML=''
  mainContainer.insertAdjacentHTML('beforeend',displayWeekly(d))

  // mainContainer.innerHTML+=displayWeekly(d)
});
monthlyBtn.addEventListener("click", async () => {
    let d=await fetchAll();
mainContainer.innerHTML=''
  mainContainer.insertAdjacentHTML('beforeend',displayMonthly(d))
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
    return cards

    
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

