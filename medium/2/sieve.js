const markNumbers = (number, range, limit) => {
  let multiplier = 2;
  let multiple = number * multiplier;

  while (multiple <= limit) {
    if (range.indexOf(multiple) !== -1) {
      range[range.indexOf(multiple)] = 0;
    }
    multiplier++;
    multiple = number * multiplier;
  }
  return range
}

const primes = limit => {
  let range = [];

  for (let num = 2; num <= limit; num++) {
    range.push(num)
  }

  range.forEach(number => {
    if (number === 0) return;

    markNumbers(number, range, limit);
  });

  return range.filter(num => num !== 0);
}

module.exports = primes;
