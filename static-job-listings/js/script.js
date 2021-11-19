let mainContainer = document.querySelector('main');

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

        mainContainer.innerHTML = cards;
    })


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