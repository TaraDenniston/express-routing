/**************************************************
 * Convert array of strings to array of numbers
 **************************************************/
function convertToNums(strsArray) {
  let numsArray = [];

  for (let i = 0; i < strsArray.length; i++) {
    let num = Number(strsArray[i]);
    
    if (Number.isNaN(num)) {
      return new Error(`${num} is not a number`);
    }

    numsArray.push(num);
  }

  return numsArray;
}


/**************************************************
 * Given an array of numbers, calculate the mean 
 **************************************************/
function calculateMean(numsArray) {
  let sum = 0;

  for (let i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }

  return sum / numsArray.length;
}


/**************************************************
 * Given an array of numbers, calculate the median 
 **************************************************/
function calculateMedian(numsArray) {
  numsArray.sort((a, b) => {return a - b});

  let middleIndex = Math.floor(numsArray.length / 2);
  let median;

  if (numsArray.length % 2 === 0) {
    median = (numsArray[middleIndex] + numsArray[middleIndex - 1]) / 2;
  } else {
    median = numsArray[middleIndex];
  }

  return median;
}


/**************************************************
 * Given an array of numbers, calculate the mode 
 **************************************************/
function calculateMode(numsArray) {
  // Create new array storing frequency of each value in numsArray
  let freqCounter = numsArray.reduce((total, value) => {
    return (
      total[value] ? ++total[value] :(total[value] = 1), total
    );
  }, {});

  // Calculate mode(s)
  let mode;
  let count = 0;
  let mostFrequent;
  let ties = [];

  for (let key in freqCounter) {
    if (freqCounter[key] > count) {
      mostFrequent = +key;
      ties = [];
      ties.push(+key);
      count = freqCounter[key];
    } else if (freqCounter[key] == count){
      ties.push(+key);
    }
  }

  // Figure out what to return based on 0, 1, or multiple modes
  if (count == 1) {
    mode = 'none';
  } else if (ties.length == 1) {
    mode = mostFrequent;
  } else if (ties.length > 1) {
    mode = ties;
  }
  
  return mode;
}


module.exports = {
  convertToNums, 
  calculateMean,
  calculateMedian,
  calculateMode
};
