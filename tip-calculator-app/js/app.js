let resetBtn = document.querySelector('button.reset-btn');
let billInput = document.querySelector('input.bill-input');
let peopleInput = document.querySelector('input.people-input');
let customTipInput = document.querySelector('input.custom-tip-input');
let tipBtns = document.querySelectorAll('input[name="tip"]');
let tipInput;

let tipAmountDisplay = document.querySelector('.tip-amount');
let totalAmountDisplay = document.querySelector('.total-amount');
let textError = document.querySelector('.text-error');

// reset all to default values when reset button gets clicked
resetBtn.addEventListener('click', resetAll);

// calculate tip and total on bill input, number of people input, and tip selection
billInput.addEventListener('keyup', calculateTip);
peopleInput.addEventListener('keyup', calculateTip);
tipBtns.forEach(btn => {
    btn.addEventListener('click', calculateTip);
});
customTipInput.addEventListener('keyup', calculateTip);

// deselect tip input when custom input is focused
customTipInput.addEventListener('focus', deselectTipBtn);

// clear custom input when tip selected
tipBtns.forEach(btn => {
    btn.addEventListener('click', clearCustomTip);
})

function resetAll(){
    let allInputs = document.querySelectorAll('input');
    allInputs.forEach((input) => {
        input.value = '';
    })
    tipInput = document.querySelector('input[name="tip"]:checked');
    if(tipInput) tipInput.checked = false;

    // clear result display
    tipAmountDisplay.innerHTML = "$0.00";
    totalAmountDisplay.innerHTML = "$0.00";

    // clear error message
    peopleInput.classList.remove('border-error');
    textError.classList.add('hidden');
}

function calculateTip(){
    tipInput = document.querySelector('input[name="tip"]:checked');
    let bill = Number(billInput.value);
    let people = Number(peopleInput.value);
    let tip;
    
    // display error message if number of people is equal to zero
    if(people == 0){
        peopleInput.classList.add('border-error');
        textError.classList.remove('hidden');
    } else {
        peopleInput.classList.remove('border-error');
        textError.classList.add('hidden');
    };

    // get tip percentage either from selected button or custom input
    if(tipInput){
        tip = Number(tipInput.value);
    } else{
        if(customTipInput.value != ""){
            tip = Number(customTipInput.value) / 100;
        }
    };

    // calculate if inputs are non-negative
    if (isNonNegative(bill) && isNonNegative(people) && isNonNegative(tip)){
        let tipAmount = (bill * tip) / people;
        let total = (bill * (1 + tip)) / people;

        if (isNumeric(tipAmount) && isNumeric(total)){
            if (tipAmount != 0 && total != 0) {
                tipAmountDisplay.innerHTML = "$" + Math.round(tipAmount * 100) / 100;
                totalAmountDisplay.innerHTML = "$" + Math.round(total * 100) / 100;
            } 
        } else {
            tipAmountDisplay.innerHTML = "$0.00";
            totalAmountDisplay.innerHTML = "$0.00";
        }
    }
}

function deselectTipBtn(){
    let selectedTip = document.querySelector('input[name="tip"]:checked');
    if(selectedTip){
        selectedTip.checked = false;
    }
}

function clearCustomTip(){
    customTipInput.value = '';
}

function isNumeric(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function isNonNegative(n){
    return n >= 0;
}