const encodeCharArr = (charArr) => {
  if (charArr.length === 1) {
    return `${charArr[0]}`;
  } else {
    return `${charArr.length}${charArr[0]}`;
  }
}

const encode = (string) => {
  let encodedString = ""
  let currentCharArr = []

  for (let i = 0; i < string.length; i += 1) {
    let currentChar = string[i]
    if (currentCharArr.length === 0 || currentCharArr[0] === currentChar) {
      currentCharArr.push(currentChar)
    } else if (currentCharArr[0] !== currentChar) {
      encodedString += encodeCharArr(currentCharArr);
      currentCharArr = [currentChar];
    }

    if (i === string.length - 1) {
      encodedString += encodeCharArr(currentCharArr);
    }
  }

  return encodedString;
}

const isDigit = (ele) => {
  let DIGITS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  return DIGITS.includes(ele);
}

const decode = (encodedStr) => {
  let decodedStr = "";
  let count = ""

  for (let i = 0; i < encodedStr.length; i += 1) {
    let currentChar = encodedStr[i];
    if (isDigit(currentChar)) {
      count += currentChar;
    } else {
      count = +count || 1
      decodedStr += currentChar.repeat(count);
      count = "";
    }
  }
  return decodedStr;
}

module.exports = {
  encode,
  decode,
}
