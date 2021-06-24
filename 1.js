    'use strict';

let Celsia = +prompt('Введите числом температуру в градусах цельсия');
let Farenheit = null;

Farenheit = (9 / 5) * Celsia + 32;

document.write('Ответ: ' + Farenheit.toFixed(2) + ' градусов по фаренгейту.');