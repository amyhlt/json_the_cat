const request = require("request");
const fetch = require('node-fetch');


const fetchBreedDescription = function (breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  if (breedName === undefined) {

    console.log("Please enter the breed name!");
  } else if (!isNaN(breedName)) {

    callback(null, "error");

  } else {
    
    fetch(url)
      .then(response =>
        response.json())
      .then(json => {
        if (json.length === 0) {
          console.log(`${breedName} No found `);
        } else {
          callback(null, json[0].description);
        }
      })
      .catch((error) => {
        throw error;
      });
  }
};
module.exports = { fetchBreedDescription };
