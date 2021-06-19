let inputs = document.querySelectorAll(".input");
let form = document.querySelector(".form");
let submitBtn = document.querySelector(".submit-btn input");
let emailInput = document.querySelector("input[type='email']");
let validEmail = false;
let valid, hiddens;

// pattern to validate email
let regularExpression = /\S+@\S+\.\S+/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    valid = [];

    // validate empty inputs
    inputs.forEach(element => {
        if (element.querySelector("input").value == "") {
            hiddens = element.querySelectorAll(".hidden:not(.wrong-format)");
            hiddens.forEach(hidden => {
                hidden.classList.remove("hidden");
                hidden.classList.add("unhidden");
            });
            valid.push(false);
        } else {
            hiddens = element.querySelectorAll(".unhidden:not(.wrong-format)");
            hiddens.forEach(hidden => {
                hidden.classList.add("hidden");
                hidden.classList.remove("unhidden");
            });
            valid.push(true);
        }
    });

    // validate email address pattern
    hiddens = emailInput.parentElement.querySelector(".wrong-format");
    if (emailInput.value != "" && !regularExpression.test(emailInput.value)){
        hiddens.classList.remove("hidden");
        hiddens.classList.add("unhidden");
        validEmail = false;
    } else if (emailInput.value != "" && regularExpression.test(emailInput.value)){
        hiddens.classList.add("hidden");
        hiddens.classList.remove("unhidden");
        validEmail = true;
    }    

    // submit form if all validations are passed
    if (!valid.includes(false) && validEmail) {
        e.target.submit();
    }
})

