const form = document.querySelector('#form');
const firstname = document.querySelector('#firstname');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', e => {
    e.preventDefault();

    inputStatus();
});

const inputStatus = () => {

    const nameValue = firstname.value;
    const lastNameValue = lastName.value;
    const emailValue = email.value;
    const passwordValue = password.value;

    if(!nameValue || nameValue === "" || nameValue.length < 4){
        statusError(firstname, `<p class="errorMessage">First Name cannot be empty</p>`)
    } else {
        statusCorrect(firstname);
    }
    
    if(!lastNameValue || lastNameValue === "" || lastNameValue.length < 4){ 
        statusError(lastName, `<p class="errorMessage">Last Name cannot be empty</p>`)
    } else {
        statusCorrect(lastName);
    }

    if(!checkEmail(emailValue)) {
        statusError(email, `<p class="errorMessage">Looks like this is not an email</p>`);
        email.setAttribute('placeholder', 'example@email/com')
    } else {
        statusCorrect(email);
    }
    
    if(!passwordValue || passwordValue === "" || passwordValue.length < 6){ 
        statusError(password, `<p class="errorMessage">Password cannot be empty</p>`)
    } else {
        statusCorrect(password);
    }
};

const checkEmail = (email) => {
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email)
};

const statusError = (input, message) => {
    const status = input;
    status.classList.add('statusError');
    
    const formChild = status.parentElement;

    if(!formChild.lastElementChild.classList.contains('errorMessage')){
        formChild.insertAdjacentHTML('beforeend', message);
    }
};

const statusCorrect = (input) => {
    const status = input;
    status.classList.remove('statusError');

    const formChild = status.parentElement;

    if(formChild.lastElementChild.classList.contains('errorMessage')){
        formChild.removeChild(formChild.lastElementChild)
        form.reset();
    }
};
