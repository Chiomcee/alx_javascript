#!/usr/bin/node

exports.callMeMoby = function(x, theFunction) {
    let i = 0; // initialize counter variable to 0
    while (i < x) { // while counter is less than x
        theFunction(); // execute the given function
        i++; // increment counter by 1
    }
};