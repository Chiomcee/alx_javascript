#!/usr/bin/node
/*
* Defines a Square class that inherits from the previous Square class
* with instance charPrint()
*/

//const Square = require('./5-square');
// Import the Square class from 5-square.js
/*
class Square2 extends Square {
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

*/


/**
 * Square class that inherits from previous square class
 */
const PrevSquare = require('./5-square');

class Square extends PrevSquare {
  charPrint (c) {
    const myChar = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
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

module.exports = Square;