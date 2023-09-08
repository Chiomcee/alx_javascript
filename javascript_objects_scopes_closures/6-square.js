#!/usr/bin/node
const BaseSquare = require('./5-square');

class Square extends BaseSquare {
  charPrint(c) {
    let character = c || 'X';
    let square = '';

    for (let i = 0; i < this.height; i++) {
      square += character.repeat(this.width) + '\n';
    }

    console.log(square);
  }
}

module.exports = Square;