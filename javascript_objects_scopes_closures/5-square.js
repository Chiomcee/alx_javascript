#!/usr/bin/node
/*
* Defines a Square class that inherits from the rectangle class
*/

const Rectangle = require('./4-rectangle');
// Import the rectangle clacc from 4-rectangle.js

class Square extends Rectangle {
    constructor(size) {
        super(size, size); //calls the constructor of rect with size for w,h 
    }
}

module.exports = Square;