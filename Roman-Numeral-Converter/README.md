Convert the given number into a roman numeral.

As first step, it's a good idea create two arrays, one for roman numbers and another for decimal numbers.
Then, we go through the array looking for a number that is less than the one provided as an argument. If the condition is satisfied concat to the string and substract the value from the number passes as an argument.

Expected results:

- convertToRoman(3): "III"
- convertToRoman(68): "LXVIII"
- convertToRoman(798): "DCCXCVIII"
