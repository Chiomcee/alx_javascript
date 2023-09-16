#!/usr/bin/node


const { error } = require('console');
const request = require('request');
const id = process.argv[2];
const url = 'https://swapi-api.alx-tools.com/api/films/${id}/';

function getCharacter (listChar, index) {
  if (index === listChar.length) {
    return;
  }
  request('$listChar[index]}',(error, response, body) => {
    if (error) {
      console.log(error);
    } else {
      const character =JSON.parse(response.body);
      console.log(character.name);
      getCharacter(listChar, index + 1);
    }
  });
}

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const film = JSON.parse(response.body);
    const listChar = film.characters;
    getCharacter(listChar, 0);
  }
});
