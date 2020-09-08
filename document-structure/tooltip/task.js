const arrayTooltip = Array.from(document.querySelectorAll('.has-tooltip'));
let activeTooltip = 0;
let newDiv = [];

for (let i = 0; i < arrayTooltip.length; i++) {
    let active = false;
    let textTooltip = arrayTooltip[i].getAttribute('title');
    newDiv[i] = document.createElement('div');
    newDiv[i].classList.add('tooltip');
    newDiv[i].innerHTML = `${textTooltip}`;


    arrayTooltip[i].onclick = function(event) {
        event.preventDefault();

        if (i !== activeTooltip) {
            newDiv[activeTooltip].remove();
            active = false;
        }

        if (!active) {
            newDiv[i].classList.add('tooltip_active');
            arrayTooltip[i].append(newDiv[i]);
            let coords = arrayTooltip[i].getBoundingClientRect();

            let left = coords.left + (arrayTooltip[i].offsetWidth - newDiv[i].offsetWidth) / 2;
            if (left < 0) left = 0; // не заезжать за левый край окна

            let top = coords.top - newDiv[i].offsetHeight - 5;
            if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
                top = coords.top + arrayTooltip[i].offsetHeight + 5;
            }

            newDiv[i].style.left = left + 'px';
            newDiv[i].style.top = top + 'px';

            active = true;
            activeTooltip = i;
        } else {
            newDiv[i].remove();
            active = false;
        }

    }
}