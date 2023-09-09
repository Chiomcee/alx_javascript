#!/usr/bin/node
/**
 * Square class that inherits from the Base Square
 */

const PrevSquare = require('./5-square');

class Square extends PrevSquare {
  charPrint(c) {
    const myChar = c === undefined ? 'X' : c;

    for (let i = 0; i < this.height; i++) {
      let row = '';
      for (let j = 0; j < this.width; j++) {
        row += myChar;
      }
      console.log(row);
    }
  }
}

module.exports = Square;
