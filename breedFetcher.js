const request = require('request');
  
let input = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + input[0], (error, response, body) => {
  const data = JSON.parse(body);
  if (data[0] === undefined) {
    console.log('you have an error', error);
  }
  console.log(data[0]["description"]);
});
