function integerToRoman(inputNum) {
  if (inputNum <= 0 || inputNum >= 4000) {
    throw new Error('The number must be between 1 and 3999.');
  }

  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' },
  ];

  let result = '';
  let num = inputNum;

  romanNumerals.forEach(({ value, numeral }) => {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  });

  return result;
}

function romanToInteger(inputRoman) {
  if (typeof inputRoman !== 'string' || inputRoman.trim() === '') {
    throw new Error('Input must be a valid Roman numeral.');
  }

  const roman = inputRoman.toUpperCase();

  if (!/^[IVXLCDM]+$/.test(roman)) {
    throw new Error('The Roman numeral contains invalid characters.');
  }

  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let previousValue = 0;

  for (let i = roman.length - 1; i >= 0; i -= 1) {
    const currentValue = romanMap[roman[i]];
    if (currentValue < previousValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    previousValue = currentValue;
  }

  const reconversion = integerToRoman(total);
  if (reconversion !== roman) {
    throw new Error('The Roman numeral is not in canonical form.');
  }

  return total;
}

function handleConversion() {
  const mode = document.getElementById('conversionMode').value;
  const input = document.getElementById('inputValue').value.trim();
  const resultDiv = document.getElementById('result');
  const errorDiv = document.getElementById('error');

  resultDiv.textContent = '';
  errorDiv.textContent = '';

  try {
    if (mode === 'intToRoman') {
      const num = parseInt(input, 10);
      if (Number.isNaN(num)) {
        throw new Error('Please enter a valid integer number.');
      }
      const roman = integerToRoman(num);
      resultDiv.textContent = `Roman Numeral: ${roman}`;
    } else if (mode === 'romanToInt') {
      const num = romanToInteger(input);
      resultDiv.textContent = `Integer: ${num}`;
    }
  } catch (error) {
    errorDiv.textContent = error.message;
  }
}

document.getElementById('convertButton').addEventListener('click', handleConversion);
