//Following number is difficult to read
const budget = 1000000000;
//Numeric Separator fices the issue
const budget1 = 1_000_000_000;
//Numeric separator can be used for integer and floating point numbers
let amount = 120_201_123.05; // 120,201,123.05
let expense = 123_450; // 12345
let fee = 12345_00; // 1234500
//Using separators for factional and exponent parts
let amount1 = 0.000_001; // 1 millionth
//numeric separator for bigint literal, binary literal, octal literal, and hex literal
// BigInt
const max = 9_223_372_036_854_775_807n;
// binary
let nibbles = 0b1011_0101_0101;
// octal
let val = 0o1234_5670;
// hex
let message = 0xD0_E0_F0;
