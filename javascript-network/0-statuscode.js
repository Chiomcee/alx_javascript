#!/usr/bin/node
// script that displays the status code of a GET request
const { error } = require('console');
const request= require('request');

const url = process.argv[2];

request.get(url, function(error, response) {
    if(error) {
        console.error('Error:', error);
    } else {
        console.log('code:', response.statusCode);
    }
});


