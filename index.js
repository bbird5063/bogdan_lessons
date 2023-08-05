const myArray = [1, true, 'Drozdov', 'Sergey'];
const mapArray = myArray.map((el, index) => index + '. ' + el);
console.table(mapArray);
/*
Если 'function(...){...}' нужно добавлять return
-------------------------------------------
*/
const mapArr2 = myArray.map(function (el, index) {
    return index + '. ' + el;
});
console.table(mapArr2);