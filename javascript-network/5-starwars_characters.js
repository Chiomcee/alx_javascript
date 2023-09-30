#!/usr/bin/node


const axios = require('axios');

// Retrieve the movie ID from the command line argument
const movieId = process.argv[2];

// Make a GET request to the Star Wars API
axios.get(`https://swapi.dev/api/films/${movieId}/`)
  .then(response => {
    const movieData = response.data;
    const characterUrls = movieData.characters;

    // Make parallel requests to get characters
    const characterPromises = characterUrls.map(url => {
      return axios.get(url)
        .then(response => response.data.name);
    });

    // Wait for all requests to finish
    Promise.all(characterPromises)
      .then(characters => {
        // Print the character names
        characters.forEach(character => {
          console.log(character);
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  })
  .catch(error => {
    console.error('Error:', error);
  });