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

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }

  return median;
}


module.exports = {
  convertToNums, 
  calculateMean,
  calculateMedian
};
