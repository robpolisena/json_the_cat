const request = require('request');
  
const fetchBreedDescription = function(breedName, callback) {

  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, description, body) => {
    const data = JSON.parse(body);
    const breed = data[0];
    if (error) {
      return callback(error, null);
    }  if (breed) {
      return callback(null, breed.description);
    } else {
      callback('Breed not found');
    }
  });
};

module.exports = { fetchBreedDescription };
