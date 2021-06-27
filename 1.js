    'use strict';

    let celsia = +prompt('Введите числом температуру в градусах цельсия');
    let farenheit = (9 / 5) * celsia + 32;

    document.write('Ответ: ' + farenheit.toFixed(2) + ' градусов по фаренгейту.');