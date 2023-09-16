/***********************************************
 * Convert array of strings to array of numbers
 ***********************************************/
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


module.exports = {
  convertToNums
};
