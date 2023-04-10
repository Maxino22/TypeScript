"use strict";
let numbers = [1, 2, 3, 4, 5];
numbers.forEach((n) => {
    let newNumbers = [];
    newNumbers.push(n++);
    return newNumbers;
});
