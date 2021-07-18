'use strict';

/**
 * Этот класс будет хранить в себе информацию о каком-то конкретном товаре.
 * @see https://ru.wikipedia.org/wiki/DTO
 */
class ProductDTO {
    /**
     * @param {number} id уникальный идентификатор каждого товара
     * @param {string} image название файла с картинкой, например 0.jpg
     * @param {string} name имя товара
     * @param {number} price цена товара
     */
    constructor(id, image, name, price) {
        this.id = id;
        this.image = image;
        this.name = name + " " + id;
        this.price = price;
    }
}