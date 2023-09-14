#!/usr/bin/node
/**
 * script that fetches the number of movies in which the character
 * "Wedge Antilles" is present from the Star wars API:
 */

const request = require('request');

// Check if the API URL is provided as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node 2-starwars_count.js <API_URL>');
  process.exit(1);
}

const apiUrl = process.argv[2];

// Make a GET request to the Star Wars API endpoint
request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API request failed with status code:', response.statusCode);
  } else {
    try {
      // Parse the JSON response
      const filmsData = JSON.parse(body);
      
      // Filter the films where Wedge Antilles (character ID 18) is present
      const filmsWithWedge = filmsData.results.filter((film) =>
        film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')
      );
      
      // Print the number of films with Wedge Antilles
      console.log(filmsWithWedge.length);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
    }
  }
});
