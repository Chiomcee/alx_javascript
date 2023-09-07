#!/usr/bin/node
/*
* Defines a rectangle class with an instance method rotate()
* and double()
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

    rotate() {
        if (this.width && this.height) {
            const temp = this.width;
            this.width = this.height;
            this.height =temp;
        } 
    }

    double() {
        if (this.width && this.height) {
            this.width *= 2;
            this.height *=2;
        }
    }
}

module.exports = Rectangle;