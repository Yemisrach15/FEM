let cardContainer = document.querySelector('.card__container');
let jobFilterContainer = document.querySelector('.job-filter__container');
let clearFiltersBtn = document.querySelector('.clear-btn');
let headerContent = document.querySelector('.header-content');
let selectedFilters = [];
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
    selectedFilters = [];
    filterCards();

    // hide selected filters container if selectedFilters == []
    if (selectedFilters.length === 0) {
        headerContent.classList.add('invisible');
    }
}

function handleFilterClick(e) {
    let filterText = e.target.innerText;
    // If filter is already selected, do nothing
    if (isFilterSelected(filterText)) return;

    // If not, add filter btn and listener (to remove filter)
    if (selectedFilters.length === 0) {
        // unhide selected filters container
        headerContent.classList.remove('invisible');

        jobFilterContainer.innerHTML = constructFilterBtn(filterText);
    } else {
        let lastFilterBtn = jobFilterContainer.lastElementChild;
        lastFilterBtn.insertAdjacentHTML('afterend', constructFilterBtn(filterText));
    }
    // add filter to list
    selectedFilters.push(filterText);

    // Handle listener for removing filter
    let removeFilterBtn = jobFilterContainer.lastElementChild.querySelector('.remove-filter-btn');
    removeFilterBtn.addEventListener('click', (e) => {
        handleRemoveFilterClick(e, filterText);
    });

    filterCards();
}

function handleRemoveFilterClick(e, filterText) {
    e.target.parentElement.remove();
    const filterIndex = selectedFilters.indexOf(filterText);
    selectedFilters.splice(filterIndex, 1); // remove filter from list
    filterCards();

    // hide selected filters container if selectedFilters == []
    if (selectedFilters.length === 0) {
        headerContent.classList.add('invisible');
    }
}

// function to customise cards based on selected filters
function filterCards() {
    const cards = document.querySelectorAll('.card');

    // if there are no filters, unhide all cards
    if (selectedFilters.length === 0) {
        const hiddenCards = document.querySelectorAll('.card.hidden');
        for (let i = 0; i < hiddenCards.length; i++) {
            hiddenCards[i].classList.remove('hidden');
        }
        return;
    }

    // if there are filters, unhide matching cards and hide non-matching cards
    for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!hasSelectedFilters(card)) {
            card.classList.add('hidden');
        } else {
            card.classList.remove('hidden');
        }
    }
}

// function to check if card has all the selected filters
function hasSelectedFilters(card) {
    for (let i = 0; i < selectedFilters.length; i++) {
        const filter = selectedFilters[i];
        if (!hasTag(filter, card)) {
            return false;
        }
    }
    return true;
}

// function to check if a card has a specific tag
function hasTag(tagText, card) {
    const tags = card.querySelectorAll('.filter');
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i].innerText;
        if (tag === tagText) {
            return true;
        }
    }
    return false;
}

// function to check if a filter is already selected
function isFilterSelected(filterText) {
    return selectedFilters.includes(filterText);
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