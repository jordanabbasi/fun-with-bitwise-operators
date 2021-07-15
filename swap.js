// swap values with XOR!
const swap = (a, b) => {
  a = a ^ b;
  b ^= a;
  a ^= b;

  console.log(a, b);
}

swap(109, 24);