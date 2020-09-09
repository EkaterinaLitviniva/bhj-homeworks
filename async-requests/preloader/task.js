const valuteItems = document.getElementById('items');
let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
xhr.send();
xhr.onreadystatechange = function() {
    if((xhr.readyState === 4) && (xhr.status === 200)) {
        document.getElementById('loader').classList.remove('loader_active');
        let valuteArray = JSON.parse(xhr.response).response.Valute;
        localStorage.clear();
               
        for (let key in valuteArray) {
            localStorage.setItem(valuteArray[key].CharCode, valuteArray[key].Value);
            
            let valuteName = document.createElement('div');
            valuteName.classList.add('item');
            valuteName.innerHTML = `
                <div class="item__code">
                    ${valuteArray[key].CharCode}
                </div>
                <div class="item__value">
                    ${valuteArray[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;
            valuteItems.appendChild(valuteName);
        }
    }
}