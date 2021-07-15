const findIntWithOddOccurrences = function (arr) {
  // const counts = {};

  // for (const num of arr) {
  //   counts[num] ? counts[num]++ : counts[num] = 1;
  // }

  // for (const n in counts) {
  //   if (counts[n] % 2 === 1) return parseInt(n);
  // }

  return arr.reduce((a, b) => a ^ b);
}

// tests
const doTest = function (arr, expected) {
  console.log(findIntWithOddOccurrences(arr) === expected ? 'passed' : 'failed');
}
doTest([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5], 5);
doTest([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5], -1);
doTest([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5], 5);
doTest([10], 10);
doTest([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1], 10);
doTest([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10], 1);