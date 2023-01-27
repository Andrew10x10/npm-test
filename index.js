'use strict'

function Calculator(userChoice, value1, value2) {
    const add = value1 + value2;
    const sub = value1 - value2;
    const mul = value1 * value2;
    if (userChoice === '+') {
        return add
    }
    if (userChoice === '-') {
        return sub
    }
    if (userChoice === '*') {
        return mul
    }

}
console.log(Calculator ('-', 3 ,2 ));