#!/usr/bin/node
/**
 * script that fetches the number of movies in which the character
 * "Wedge Antilles" is present from the Star wars API:
 */

const request = require('request');

const url = process.argv[2];
const characterId = 18;
let count = 0;

request.get(url, function(error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API Error:', response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    films.forEach(function(film) {
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        count++;
      }
    });
    console.log(count);
  }
});

