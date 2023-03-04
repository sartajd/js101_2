// commonjs Module
const fs = require('fs');

fs.writeFile('example.txt', 'Hello, world!', function (err) {
  if (err) throw err;
  console.log('File created and text written!');
});