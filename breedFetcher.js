const request = require("request");
const fetch = require('node-fetch')
const args = process.argv[2];
const breed = args;
const url =`https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

if (breed === undefined) {
  console.log("Please enter the breed name!");
} else {
  fetch(url)
  .then(response =>
    response.json())
  .then(json => {
  if (json.length === 0) {
    console.log(`${breed} No found `);
  } else {
    console.log(json);
  }})
  .catch ((error) => {
    console.log(error);
  });
}