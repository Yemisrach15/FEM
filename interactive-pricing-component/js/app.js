// lower and upper slider (input range) color
document.getElementById("price-input").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100

  this.style.background = 'linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
};

let pageviewText = document.querySelector('.card__text:first-child');
let priceText = document.querySelector('.card__text--big');
let perText = document.querySelector('.card__text--sub');
let slider = document.querySelector('#price-input');
let toggleBtn = document.querySelector('.toggle--input');
let sliderValue, pageviewValue, priceValue;

slider.addEventListener('input', () => {
  sliderValue = Number(slider.value);
  changePrice(toggleBtn.checked, sliderValue);
  changePageview(sliderValue);

  pageviewText.textContent = pageviewValue;
  priceText.textContent = `\$ ${priceValue}.00 `;

});

toggleBtn.addEventListener('change', () => {
  sliderValue = Number(slider.value);
  changePrice(toggleBtn.checked, sliderValue);
  priceText.textContent = `\$ ${priceValue}.00 `;
})


function changePrice(checked, sliderValue) {
  if (checked) {
    switch (sliderValue) {
      case 0:
        priceValue = 8 * 0.75;
        break;
      case 1:
        priceValue = 12 * 0.75;
        break;
      case 2:
        priceValue = 16 * 0.75;
        break;
      case 3:
        priceValue = 24 * 0.75;
        break;
      case 4:
        priceValue = 36 * 0.75;
        break;
      default:
        break;
    }
  } else {
    switch (sliderValue) {
      case 0:
        priceValue = 8;
        break;
      case 1:
        priceValue = 12;
        break;
      case 2:
        priceValue = 16;
        break;
      case 3:
        priceValue = 24;
        break;
      case 4:
        priceValue = 36;
        break;
      default:
        break;
    }
  }
}

function changePageview(sliderValue) {
  switch (sliderValue) {
    case 0:
      pageviewValue = "10K pageviews";
      break;
    case 1:
      pageviewValue = "50K pageviews";
      break;
    case 2:
      pageviewValue = "100K pageviews";
      break;
    case 3:
      pageviewValue = "500K pageviews";
      break;
    case 4:
      pageviewValue = "1M pageviews";
      break;
    default:
      break;
  }
}