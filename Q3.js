const range = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);

var numberArray = range(-100, 100);

console.log(numberArray);

var numberPositive = numberArray.filter(x => x >= 0);

var numberNegative = numberArray.filter(x => x < 0);

console.log(numberPositive);

console.log(numberNegative);

var positiveSum = numberPositive.reduce((a, b) => a + b, 0);

var negativeSubtratct = numberNegative.reduce((a, b) => a - b, 0);

console.log(positiveSum);

console.log(negativeSubtratct);
