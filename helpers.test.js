const { convertToNums, calculateMean, calculateMedian } = require('./helpers');


describe('convertToNums function', () => {
  test('converts strings into integers', () => {
    let numsArray = convertToNums(['1', '2', '3', '4']);
    expect(numsArray).toEqual([1, 2, 3, 4]);
  });

  test('converts strings into negative numbers and decimals', () => {
    let numsArray = convertToNums(['-1', '2.5', '0', '-4.39']);
    expect(numsArray).toEqual([-1, 2.5, 0, -4.39]);
  });

  test('returns error when given an array containing NaN', () => {
    let numsArray = convertToNums(['1', '2', '3', 'hello']);
    expect(numsArray).toBeInstanceOf(Error);
  });
})


describe('calculateMean function', () => {
  test('returns mean from integers', () => {
    let mean = calculateMean([2,4,6,8]);
    expect(mean).toEqual(5);
  });

  test('returns mean from decimals', () => {
    let mean = calculateMean([3.6, 11.237, 9.0]);
    expect(mean).toBeCloseTo(7.94567, 5);
  });

  test('returns mean from negative and positive numbers', () => {
    let mean = calculateMean([-5, -2, 5, 6]);
    expect(mean).toEqual(1);
  });
})


describe('calculateMedian function', () => {
  test('returns median from an odd amount of numbers', () => {
    let median = calculateMedian([3, 13, 2, 34, 11, 26, 47]);
    expect(median).toEqual(13);
  });

  test('returns median from an even amount of numbers', () => {
    let median = calculateMedian([3, 13, 2, 34, 11, 17, 27, 47]);
    expect(median).toEqual(15);
  });

  test('returns median from negative and positive numbers', () => {
    let median = calculateMedian([-5, -2, 5, 6, 3, -11, 9]);
    expect(median).toEqual(3);
  });
})