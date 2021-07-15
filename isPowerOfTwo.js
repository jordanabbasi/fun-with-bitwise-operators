const isPowerOfTwo = function (n) {
  if (n <= 0) return false;
  return !(n & (n - 1))

  // the boring way:
  // const log2 = Math.log(n) / Math.log(2);
  // return log2 === Math.floor(log2);
}


// tests
const doTest = function (n, expected) {
  console.log(isPowerOfTwo(n) === expected ? 'passed' : 'failed');
}
doTest(1, true);
doTest(16, true);
doTest(256, true);
doTest(0, false);
doTest(3, false);
doTest(100, false);
