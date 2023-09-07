#!/usr/bin/node
/*
* Defines a rectangle class with a constructor(w,h)
*/

class Rectangle {
    constructor(w, h) {
        if (w > 0 && h > 0) {
            this.width = w;
            this.height = h;
        }
    }
}

module.exports = Rectangle;