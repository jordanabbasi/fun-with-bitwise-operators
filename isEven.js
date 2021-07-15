function isEven(n) {
  return !(n & 1)
}

for (let i = -10; i < 10; i++) {
  console.log(i, isEven(i));
}