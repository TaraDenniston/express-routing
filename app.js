const express = require('express');
const app = express();
const ExpressError = require('./expressError');
const { convertToNums, calculateMean, calculateMedian, calculateMode } = require('./helpers');


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
    value: calculateMean(numsArray)
  }

  // return result
  return res.json(result);
});


app.get('/median', (req, res, next) => {
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
    operation: "median",
    value: calculateMedian(numsArray)
  }

  // return result
  return res.json(result);
});


app.get('/mode', (req, res, next) => {
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
    operation: "mode",
    value: calculateMode(numsArray)
  }

  // return result
  return res.json(result);
});


// If any request is made to a page the doesn't exist
app.use(function (req, res, next) {
  const err = new ExpressError('Page Not Found', 404);

  return next(err);
});

// Middleware
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});


app.listen(3000, () => {
  console.log('Server running on port 3000');
});


