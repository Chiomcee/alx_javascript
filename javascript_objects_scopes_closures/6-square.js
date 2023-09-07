#!/usr/bin/node
/*
* Defines a Square class that inherits from the previous Square class
* with instance charPrint()
*/

const BaseSquare = require('./5-sqaure');
// Import the Square class from 5-square.js

class Square extends BaseSquare {
    charPrint(c) {
        if (c === undefined) {
            c = 'X';
        }
        for (let n = 0; n < this.height; n++) {
            console.log(c.repeat(this.width));
        }
    }
}

module.exports = Square;