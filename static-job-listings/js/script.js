let cardContainer = document.querySelector('.card__container');
let jobFilterContainer = document.querySelector('.job-filter__container');
let clearFiltersBtn = document.querySelector('.clear-btn');
let filters;

fetch("../data.json")
    .then(response => response.json())
    .then(json => {
        data = json;

        let cards = ``;
        json.forEach(element => {
            if (element.featured) {
                cards += constructFeaturedCard(element);
            } else {
                cards += constructCard(element);
            }
        });

        cardContainer.innerHTML = cards;

        // add listener for each filter on each card
        filters = document.querySelectorAll('.filter');
        filters.forEach((filter) => {
            filter.addEventListener('click', handleFilterClick);
        });
    });

// add listener for clearing filters
clearFiltersBtn.addEventListener('click', handleClearBtnClick);

function handleClearBtnClick(e) {
    e.target.previousElementSibling.innerHTML = '';
}

function handleFilterClick(e) {
    // If filter is already selected, do nothing
    if (isFilterSelected(e.target.innerText)) return;

    // If not, add filter btn and listener (to remove filter)
    if (jobFilterContainer.innerText === '') {
        jobFilterContainer.innerHTML = constructFilterBtn(e.target.innerText);
    } else {
        let lastFilterBtn = jobFilterContainer.lastElementChild;
        lastFilterBtn.insertAdjacentHTML('afterend', constructFilterBtn(e.target.innerText));
    }

    let removeFilterBtn = jobFilterContainer.lastElementChild.querySelector('.remove-filter-btn');
    removeFilterBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}

function isFilterSelected(filterText) {
    return jobFilterContainer.innerText.includes(filterText);
}

function constructFilterBtn(text) {
    return `
    <span class="job-filter">${text} 
        <button class="remove-filter-btn"></button>
    </span>`;
}

function constructFeaturedCard(json) {
    let html = `
        <div class="card card--featured">
        <img class="card__logo" src=${json.logo} alt="">
        
        <div class="card__body">
        
        <div class="card__top">
        <span>${json.company}</span>
        <span class="tag__container">`;

    html +=
        json.new ? `<span class="tag tag--new">New!</span>` : ``
    html +=
        json.featured ? `<span class="tag tag--featured">Featured</span>
        </span>` : ``;
    html +=
        `</div>
        <h1 class="card__header">${json.position}</h1>

        <div class="card__detail">
        <span>${json.postedAt}</span> 
            <span class="circle">&#9679;</span>
            <span>${json.contract}</span>
            <span class="circle">&#9679;</span>
            <span>${json.location}</span>
            </div>

            </div>
        <div class="filter__container">
        ${constructFilters(json)}
        </div>
    </div>`;

    return html;
}

function constructCard(json) {
    let html = `
    <div class="card">
        <img class="card__logo" src=${json.logo} alt="">
        
        <div class="card__body">

        <div class="card__top">
        <span>${json.company}</span>
            <span class="tag__container">`;

    html +=
        json.new ? `<span class="tag tag--new">New!</span>` : ``
    html +=
        json.featured ? `<span class="tag tag--featured">Featured</span>
            </span>` : ``;
    html +=
        `</div>
        <h1 class="card__header">${json.position}</h1>
        
        <div class="card__detail">
        <span>${json.postedAt}</span> 
        <span class="circle">&#9679;</span>
        <span>${json.contract}</span>
        <span class="circle">&#9679;</span>
        <span>${json.location}</span>
        </div>
        
        </div>
        <div class="filter__container">
        ${constructFilters(json)}
        </div>
        </div>`;

    return html;
}

// helper function
function constructFilters(json) {
    let filters = ``;
    filters += `<span class="filter">${json.role}</span>`;
    filters += `<span class="filter">${json.level}</span>`;

    json.languages.forEach(language => {
        filters += `<span class="filter">${language}</span>`;
    });

    json.tools.forEach(tool => {
        filters += `<span class="filter">${tool}</span>`;
    });

    return filters;
}