/**
 * Goal of this Program: Translate Arabic Digits to Roman Numerals
 * 
 * Important Notes:
 *   One          (   1) is written I
 *   Five         (   5) is written V (Notice that VV = X) ==> Can't have two Vs.
 *   Ten          (  10) is written X
 *   Fifty        (  50) is written L (Notice that LL = C) ==> Can't have two Ls.
 *   One Hundred  ( 100) is written C
 *
 * We also have two other important rules to deal with:
 *   1. There should never be more than three letters in a row.
 *   2. There should never be more than one V or L in a row.
 *
 *   This means that for this exercise, we have the following special values that we must consider.
 *     Four         (  4) written IV
 *     Nine         (  9) written IX
 *     Forty        ( 40) written XL
 *     Nintey       ( 90) written XC
 */

require('mocha');

const expect = require('chai').expect;
const convertToRoman = require('./roman').convertToRoman;

describe('Decimal Digits to Roman Numerals', function () {
  describe('The initial examples to introduce the Priority Transformation Premise', function () {
    it('should covert the number one (1) into the roman numeral I', function () {
      expect(convertToRoman(1)).to.equal("I");
    });
  
    it('should convert the number (5) to the roman numeral V', function () {
      expect(convertToRoman(5)).to.equal("V");
    });
  
    it('should convert the number (10) to the roman numeral X', function () {
      expect(convertToRoman(10)).to.equal("X");
    });
  
    it('should convert the number (50) to the roman numeral L', function () {
      expect(convertToRoman(50)).to.equal("L");
    });
  
    it('should convert the number (100) to the roman numeral C', function () {
      expect(convertToRoman(100)).to.equal("C");
    });
  });

  describe('Pretending the map of simple values comes from a library', function () {
    it('should convert the number (2) to the roman numeral II', function () {
      expect(convertToRoman(2)).to.equal("II");
    });
  });
});