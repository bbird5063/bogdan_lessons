const sum = (a, b) => a + b;
const mult = (a, b) => a * b;

class Comment { // первая буква заглавная
    constructor(text) {
        this.text = text; // this указывает на созданый объект '... = new Comment ...'
        this.votesQty = 0;
    }
    upvote() {
        this.votesQty += 1;
    }
}

class NumbersArray extends Array {
    sum() {
        return this.reduce((acc, el) => acc += el, 0); // reduce передает колбэк-фукции аргументы 
    }
}

export {
    sum,
    mult,
    Comment,  // класс
    NumbersArray  // класс
}