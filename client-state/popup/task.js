const popup = document.getElementById('subscribe-modal');
let popupClose = popup.querySelector('.modal__close');

popupClose.addEventListener('click', function() {
   popup.classList.remove('modal_active');
   document.cookie = "close=closeWindow";
});

const getCookie = (name) => {
    const value = '; ' + document.cookie;
    let parts = value.split('; ' + name + '=');

    if (parts.length == 2) {
        return parts.pop().split(';').shift();
    }
}

if (getCookie('close') == 'closeWindow') {
    popup.classList.remove('modal_active');
} else {
    popup.classList.add('modal_active');
}