import {
    sum,
    mult as multNum,
    Comment, // класс
    NumbersArray as NumArray // класс 
} from './moduleOne.mjs';

const myArray = new NumArray(2, 5, 7); // класс с новым именем
console.log(myArray); // NumbersArray(3) [2, 5, 7]
const mySum = myArray.sum();
console.log(mySum); // 14
const firstComment = new Comment('Deep Purple');
console.log(firstComment.text); // Deep Purple
console.log(sum(100, 50)); // 150
console.log(multNum(100, 50)); // 5000