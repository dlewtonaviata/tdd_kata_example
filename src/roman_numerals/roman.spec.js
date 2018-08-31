/**
 * Goal of this Program: Translate Arabic Digits to Roman Numerals
 * 
 * Important Notes:
 *   One          (   1) is written I
 *   Five         (   5) is written V (Notice that VV = X) ==> Can't have two Vs.
 *   Ten          (  10) is written X
 *   Fifty        (  50) is written L (Notice that LL = C) ==> Can't have two Ls.
 *   One Hundred  ( 100) is written C
 *   Five Hundred ( 500) is written D (Notice that DD = M) ==> Can't have two Ds.
 *   One Thousand (1000) is written M
 *
 * We also have two other important rules to deal with:
 *   1. There should never be more than three letters in a row.
 *   2. There should never be more than one V, L, or D, in a row.
 *
 *   This means that for this exercise, we have the following special values that we consider.
 *     Four         (  4) written IV
 *     Nine         (  9) written IX
 *     Forty        ( 40) written XL
 *     Nintey       ( 90) written XC
 *     Four hundred (400) written CD
 *     Nine hundred (900) written CM
 */

require('mocha');

const expect = require('chai').expect;
const convertToRoman = require('./roman').convertToRoman;

describe("Decimal Digits to Roman Numerals", function () {
  it('should covert the numeral one (1) into the roman letter I', function () {
    expect(convertToRoman(1)).to.equal("I");
  });
});