// tests.js

// Use Chai's expect for assertions
const expect = chai.expect;

describe('integerToRoman', function() {
  // Human-created test cases
  it('should convert 1 to "I" (TC-1)', function() {
    expect(integerToRoman(1)).to.equal('I');
  });

  it('should convert 4 to "IV" (TC-2)', function() {
    expect(integerToRoman(4)).to.equal('IV');
  });

  it('should convert 3999 to "MMMCMXCIX" (TC-3)', function() {
    expect(integerToRoman(3999)).to.equal('MMMCMXCIX');
  });

  it('should throw error for 0 (TC-6)', function() {
    expect(() => integerToRoman(0)).to.throw('The number must be between 1 and 3999.');
  });

  // AI-assisted test cases
  it('should convert 58 to "LVIII" (AI-TC-1)', function() {
    expect(integerToRoman(58)).to.equal('LVIII');
  });

  it('should convert 944 to "CMXLIV" (AI-TC-3)', function() {
    expect(integerToRoman(944)).to.equal('CMXLIV');
  });

  it('should convert 100 to "C" (AI-TC-6)', function() {
    expect(integerToRoman(100)).to.equal('C');
  });

  it('should convert 2021 to "MMXXI" (AI-TC-8)', function() {
    expect(integerToRoman(2021)).to.equal('MMXXI');
  });
});

describe('romanToInteger', function() {
  // Human-created test cases
  it('should convert "I" to 1 (TC-4)', function() {
    expect(romanToInteger('I')).to.equal(1);
  });

  it('should convert "IX" to 9 (TC-4)', function() {
    expect(romanToInteger('IX')).to.equal(9);
  });

  it('should convert "MMXXIV" to 2024 (TC-5)', function() {
    expect(romanToInteger('MMXXIV')).to.equal(2024);
  });

  it('should throw error for empty input (TC-8)', function() {
    expect(() => romanToInteger('')).to.throw('Input must be a valid Roman numeral.');
  });

  it('should throw error for "IC" (TC-7)', function() {
    expect(() => romanToInteger('IC')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should throw error for "abcd" (TC-9)', function() {
    expect(() => romanToInteger('abcd')).to.throw('The Roman numeral contains invalid characters.');
  });

  // AI-assisted test cases
  it('should convert "XLII" to 42 (AI-TC-2)', function() {
    expect(romanToInteger('XLII')).to.equal(42);
  });

  it('should convert "MMM" to 3000 (AI-TC-4)', function() {
    expect(romanToInteger('MMM')).to.equal(3000);
  });

  it('should throw error for "VX" (AI-TC-5)', function() {
    expect(() => romanToInteger('VX')).to.throw('The Roman numeral is not in canonical form.');
  });

  it('should convert "mcmxciv" to 1994 (case insensitive) (AI-TC-7)', function() {
    expect(romanToInteger('mcmxciv')).to.equal(1994);
  });

  it('should convert "DCCCXC" to 890 (AI-TC-9)', function() {
    expect(romanToInteger('DCCCXC')).to.equal(890);
  });
});

describe('Roundtrip Tests', function() {
  it('should convert 248 to Roman and back to 248 (TC-10)', function() {
    const num = 248;
    const roman = integerToRoman(num);
    expect(romanToInteger(roman)).to.equal(num);
  });

  it('should convert 76 to Roman and back to 76 (AI-TC-10)', function() {
    const num = 76;
    const roman = integerToRoman(num);
    expect(romanToInteger(roman)).to.equal(num);
  });
});