const product = document.querySelectorAll('.product');
const productAdd = document.querySelectorAll('.product__quantity-control_inc');
const productSub = document.querySelectorAll('.product__quantity-control_dec');
const productInBasket = document.querySelectorAll('.product__add');
const basket = document.querySelector('.cart__products');

for (let i = 0; i < product.length; i++) {
    productAdd[i].addEventListener('click', function() {
        let totalProducts = productAdd[i].closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (totalProducts.textContent >= 1) {
            ++totalProducts.textContent;
        }
    });

    productSub[i].addEventListener('click', function() {
        let totalProducts = productAdd[i].closest('.product__quantity-controls').querySelector('.product__quantity-value');
        if (totalProducts.textContent > 1) {
            --totalProducts.textContent;
        } else {
            totalProducts.textContent = 1;
        }
    })

    function addElement(element) {
        let addProduct = document.createElement('div');
        addProduct.setAttribute('class', 'cart__product');

        addProduct.setAttribute('data-id', `${element.getAttribute('data-id')}`);

        addProduct.innerHTML = `
            <img class="cart__product-image" src = ${element.querySelector('.product__image').getAttribute('src')} alt="">
            <div class="cart__product-count">${element.querySelector('.product__quantity-value').textContent}</div>
            <a href="#" class="cart__remove">&times;</a>
        `;

        return addProduct;
    }

    productInBasket[i].addEventListener('click', function() {
        const arrBasket = Array.from(basket.querySelectorAll('.cart__product'));
        let isProduct = false;

        if (arrBasket.length == 0) {
            basket.insertAdjacentElement('beforeEnd', addElement(product[i]));
            basket.closest('.cart').classList.add('cart__active');
            isProduct = true;
        }
        
        for (let j = 0; j < arrBasket.length; j++) {
            if (arrBasket[j].getAttribute('data-id') == product[i].getAttribute('data-id')) {
                arrBasket[j].querySelector('.cart__product-count').textContent = product[i].querySelector('.product__quantity-value').textContent;
                isProduct = true;
            }
        }

        if(!isProduct) {
            basket.insertAdjacentElement('beforeEnd', addElement(product[i]));
            isProduct = true;
        }

        if(isProduct) {
            let removeProduct = basket.querySelectorAll('.cart__remove');

            for (let k = 0; k < removeProduct.length; k++) {
                removeProduct[k].onclick = function() {
                    removeProduct[k].closest('.cart__product').remove();
                    isProduct = false;

                    removeProduct2 = basket.querySelectorAll('.cart__remove');
                    if (removeProduct2.length == 0) {
                        basket.closest('.cart').classList.remove('cart__active');
                    }
                }                
            }

            isProduct = true;
        }
    });
}