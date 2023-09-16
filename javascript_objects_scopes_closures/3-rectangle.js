#!/usr/bin/node
/*
* Defines a rectangle class with an instance method print()
*/

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }

    print() {
        if (this.width && this.height) {
            let row = 0;
            while (row < this.height) {
                console.log('X'.repeat(this.width));
                row++;
            }
        }
    }
}

module.exports = Rectangle;