#!/usr/bin/node
// Script that prints the title of a Star Wars movie

const request = require('request');

const id =process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/${id}';

request.get(url, function(error, response, body) {
    if (error) {
        console.log(error);
    } else {
        const movie =JSON.parse(body);
        console.log(movie.title);
    }
});
