const authorization = document.getElementById('signin');
authorization.classList.add('signin_active');
const neverActive = document.querySelector('.never');

const welcome = document.getElementById('welcome');
let userId = document.getElementById('user_id');

const form = document.getElementById('signin__form');

const controlInput = document.querySelectorAll('.control');

if((localStorage.getItem('user') == 'demo') && (localStorage.getItem('password') == 'demo')) {
    authorization.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    userId.textContent = localStorage.getItem('id');
}

form.addEventListener('submit', (e) => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    xhr.onreadystatechange = function() {
        if(xhr.readyState == 4 && xhr.status == 200) {
            let data = JSON.parse(xhr.responseText);
            
            if (data.success) {
                authorization.classList.remove('signin_active');
                welcome.classList.add('welcome_active');
                localStorage.setItem('user', controlInput[0].value);
                localStorage.setItem('password', controlInput[1].value);
                localStorage.setItem('id', data.user_id)
                userId.textContent = data.user_id;
            } else {
                neverActive.classList.add('never_active');
                controlInput[0].value = '';
                controlInput[1].value = '';
            }
        }
    }
    xhr.send(formData);
    e.preventDefault();
});

const closeButton = document.getElementById('row__close');

closeButton.onclick = function() {
    welcome.classList.remove('welcome_active');
    authorization.classList.add('signin_active');
    neverActive.classList.remove('never_active');
    controlInput[0].value = '';
    controlInput[1].value = '';
    localStorage.clear();  
}