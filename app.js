// HTML elements
const emailInput = document.querySelector('input');
const formBtn = document.querySelector('button');

// on form submit function
// validate email input
// clear input after submit
formBtn.addEventListener('click', (e) => {
    e.preventDefault()
    validateInput()
    emailInput.value = ''
})

// function for setting errors 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
    emailInput.classList.add('invalid')
}

// clear error display if is ok
// dispaly alert with success message
const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innerText = ''
    inputControl.classList.add('success')
    inputControl.classList.remove('error')
    emailInput.classList.remove('invalid')

    alert('Email subscribed successfully')

}

//  email validation with regex expression
const isValidEmail = (emailInput) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(emailInput).toLowerCase())
}

// check if the email address is provided and valid
const validateInput = () => {
    const emailValue = emailInput.value.trim()

    if (emailValue === '') {
        setError(emailInput, 'Email address is required')
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Please provide a valid email address')
    } else {
        setSuccess(emailInput)
    }
}