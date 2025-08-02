//use recussion to print numbers from n to 1
// Time Complexity: O(n)

function printNumbersFromNto1(n) {
  if (n <= 0) return;
  console.log(n);
  printNumbersFromNto1(n - 1);
}

printNumbersFromNto1(5);
