// convert numbers to binary using radix argument of .toString()
// >>> is to handle negative numbers but you only get 32 bits as a result
// >>> 0 essentially converts to unsigned 32 bit int
function decimalToBinary(dec) {
  return (dec >>> 0).toString(2);
}

console.log((2 ** 32).toString(2));