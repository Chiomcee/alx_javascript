#!/usr/bin/node
// Script that gets the contents of a webpage and stores it

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filePath = process.argv[3];

request.get(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('API Error:', response.statusCode);
  } else {
    fs.writeFile(filePath, body, 'utf-8', function (err) {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('File stored successfully!');
      }
    });
  }
});