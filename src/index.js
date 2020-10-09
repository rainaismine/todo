const express = require('express');

const api = express();

// How does this manage to look up everything and find the html associated with it?
api.use(express.static(__dirname + '/public'));

api.listen(3000,() => {
  console.log('API up and running!');
});

api.post('/add', (req,res) => {
  console.log('Post request received');
  res.send('It works!');
});

// This may be an api use
// api.use((req,res,next) => {
//   console.log('Hello');
//   next();
// })

// This must be a get function
// api.get('/',(req,res) => {
//   console.log(req);
//   res.send('Welcome to Mingzi');
// });
