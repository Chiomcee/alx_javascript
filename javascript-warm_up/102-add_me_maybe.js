#!/usr/bin/node

exports.addMeMaybe = function(number, theFunction) {
    number++; // increment the given number
    theFunction(number); // call the given function with the incremented number
};