const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { convertToNums } = require('./helpers');


app.get('/mean', (req, res, next) => {
  // throw error if query string is empty
  if (!req.query.nums) {
    throw new ExpressError(
      'Please include a comma-separated list of numbers with the query key "nums".', 
      400
    );
  }

  // convert nums query string to array of numbers
  let reqArray = req.query.nums.split(',');
  let numsArray = convertToNums(reqArray);
  if (numsArray instanceof Error) {
    throw new ExpressError(numsArray.message, 400);
  }

  // format response
  let result = {
    operation: "mean",
    result: "need to implement"
  }

  // return result
  return res.json(result);
});




app.listen(3000, () => {
  console.log('Server running on port 3000');
});


