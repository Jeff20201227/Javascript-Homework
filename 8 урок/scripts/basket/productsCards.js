'use strict';

const pathToImages = 'img';
const pathToProductsImages = `${pathToImages}`;
const featuredItemsEl = document.querySelector('.product-box');

/**
 * Эта функция принимает один из объектов из массива products в файле products.js.
 * @param {ProductDTO} product объект с информацией о продукте
 * @returns {string} html-разметка карточки товара
 */
function getProductMarkup(product) {
    return `
        <div class="product">

            <div class="product_img">
                <img src="${pathToProductsImages}/${product.image}" alt="${product.name}">
                <div class="product_add">
                    <button class="add_cart_index" data-productId="${product.id}">
                        <img src="${pathToImages}/cart_white.png" alt="Добавить в корзину">
                        Add to Cart
                    </button>
                </div>
            </div>

            <div class="product_content">
                <div class="product_name">
                    ${product.name}
                </div>
                <div class="product_price">
                    $${product.price}
                </div>
            </div>

        </div>
    `;
}

/**
 * Функция вставляет карточки товаров в страницу.
 * @param {ProductDTO[]} products массив товаров из файла products.js
 * @param {HTMLDivElement} featuredItemsEl элемент с классом .featuredItems
 */
function insertProductsIntoPage(products, featuredItemsEl) {
    let productsMarkup = '';
    for (let product of products) {
        productsMarkup += getProductMarkup(product);
    }
    featuredItemsEl.insertAdjacentHTML('afterbegin', productsMarkup);
}

/**
 * Функция назначает обработку клика на все кнопки "Add to cart".
 */
function addEventListenersForAddToCartButtons() {
    const addToCartBtns = document.querySelectorAll('button[data-productId]');
    addToCartBtns.forEach(function (button) {
        button.addEventListener('click', addedProductHandler);
    })
}

/**
 * Функция-обработчик события клика по кнопке "Add to cart".
 * @param {MouseEvent} event
 */
function addedProductHandler(event) {
    const productId = event.currentTarget.getAttribute('data-productId');
  addProductIntoBasket(productId);
}

insertProductsIntoPage(products, featuredItemsEl);
addEventListenersForAddToCartButtons();