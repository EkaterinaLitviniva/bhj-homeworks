'use strict';

const main = document.getElementById('modal_main');
const success = document.getElementById('modal_success');

main.classList.add('modal_active');

const mainClose = main.querySelector('.modal__close');

mainClose.onclick = function() {
    main.classList.remove('modal_active');
}

const showSuccess = main.querySelector('.show-success');

showSuccess.onclick = function() {
    main.classList.remove('modal_active');
    success.classList.add('modal_active');
};

function close() {
    success.onclick = function() {
        success.classList.remove('modal_active');
    }
}

close();