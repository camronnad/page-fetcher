// using process.argv to 
// grab URL and localpath from process.argv and store in  a variable
// taking URL and implementing request functionality
// if error handle error
// then implement localpath with the writefileasync
const request = require('request');

const fs = require('fs');

const path = process.argv[3];
const domain = process.argv[2];

request(domain, (error, response, body) => {
  if (error) {
    console.error(error);
  }


  fs.writeFile(path, body, err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });

});