#!/usr/bin/node
/**
 * Defines a Square class that inherits from previous square class
 */
const BaseSquare = require('./5-square');

/* class Square extends BaseSquare {
  charPrint (c) {
    const myChar = c === undefined ? 'X' : c;
    for (let n = 0; n < this.height; n++) {
      let myVar = '';
      let y = 0;
      while (y < this.width) {
        myVar += myChar;
        y++;
      }

      console.log(myVar);
    }
  }
}

module.exports = Square; */

const BaseSquare = require('./5-square');

class Square extends BaseSquare {
  constructor (size) {
    super(size, size);
  }

  charPrint (c) {
    if (c) {
      for (let n = 0; n < this.height; n++) {
        console.log(c.repeat(this.width));
      }
    } else {
      this.print();
    }
  }
}

module.exports = Square;