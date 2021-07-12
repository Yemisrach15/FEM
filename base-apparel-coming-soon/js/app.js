let form = document.forms[0];
let errorIcon = document.querySelector('.form__error__icon');
let errorTextInvalid = document.querySelector('.form__error__desc.invalid');
let errorTextEmpty = document.querySelector('.form__error__desc.empty');
let emailInput = document.querySelector('.form__email');

// email validation pattern
let regularExpression = /\S+@\S+\.\S+/;
let validForm = false;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    // reset style
    errorTextEmpty.classList.add('hidden');
    errorTextInvalid.classList.add('hidden');
    errorIcon.classList.add('hidden');
    emailInput.classList.remove('form--error');

    if (emailInput.value == ""){
        errorTextEmpty.classList.remove('hidden');
        errorIcon.classList.remove('hidden');
        emailInput.classList.add('form--error');
    } else {

        if (!regularExpression.test(emailInput.value)) {
            errorTextInvalid.classList.remove('hidden');
            errorIcon.classList.remove('hidden');
            emailInput.classList.add('form--error');
        } else {
            validForm = true;
        } 
    }

    if (validForm) e.target.submit();
});
