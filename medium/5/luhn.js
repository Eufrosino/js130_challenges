const DIGITS = [
  "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"
]

class Luhn {
  constructor(luhnNumber) {
    this.luhnNumber = this.stripSpaces(luhnNumber);
  }

  stripSpaces(str) {
    let strWithoutSpaces = "";
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (char !== " ") {
        strWithoutSpaces += char;
      }
    }
    return strWithoutSpaces;
  }

  containsInvalidChar(str) {
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (!DIGITS.includes(char)) {
        return true;
      }
    }
    return false;
  }

  valid() {
    if (this.luhnNumber.length < 2 || this.containsInvalidChar(this.luhnNumber)) {
      return false
    }
    let reversedLuhn = this.luhnNumber
      .split('')
      .reverse()
      .join('');

    let luhnDigits = [];

    for (let i = 0; i < reversedLuhn.length; i++) {
      let num = +reversedLuhn[i];

      if ((i + 1) % 2 === 0) {
        let doubleNum = num * 2;
        if (doubleNum > 9) {
          doubleNum -= 9;
        }
        luhnDigits.push(doubleNum);
      } else {
        luhnDigits.push(num)
      }
    }
    let sum = luhnDigits.reduce((acc, digit) => acc + digit);

    return sum % 10 === 0
  }
}


module.exports = Luhn;
