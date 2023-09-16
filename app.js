const express = require('express');

const app = express();



app.get('/mean', (req, res, next) => {
  // error handling
  // calculate mean
  // return result
  return res.json('result');
});




app.listen(3000, () => {
  console.log('Server running on port 3000');
});


