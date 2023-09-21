const { convertToNums, calculateMean } = require('./helpers');


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