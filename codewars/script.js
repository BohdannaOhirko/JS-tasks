// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

function squareDigits(num) {
  let result = "";
  num = num + "";
  for (let i = 0; i < num.length; i++) {
    result += num[i] ** 2;
  }
  return +result;
}

console.log(squareDigits(41));

function squaredNumber(numbers) {
  let squaredNumbers = Number(numbers.map((num) => num ** 2).join(""));

  return squaredNumbers;
}
console.log(squaredNumber([2, 4, 6, 8, 10]));

// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

function addBinary(a, b) {
  let res = a + b;
  let resString = res.toString(2);
  let binary = parseInt(resString); // перетворити в число

  return binary;
}
console.log(addBinary(7, 4));

// Implement a function that computes the difference between two lists.
// The function should remove all occurrences of elements from the first list (a)
// that are present in the second list (b). The order of elements in the first list should be preserved
// in the result.

// Examples
// If a = [1, 2] and b = [1], the result should be [2].

// If a = [1, 2, 2, 2, 3] and b = [2], the result should be [1, 3].

function arrayDiff(arr1, arr2) {
  return arr1.filter((item) => !arr2.includes(item));
}
console.log(arrayDiff([1, 2], [1]));

// Complete the function that accepts a string parameter, and reverses each word in the string.
//  All spaces in the string should be retained.

function reverseWords(str) {
  let reverseStr = str
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
  return reverseStr;
}
console.log(reverseWords("This is an example!"));

// Check to see if a string has the same amount of 'x's and 'o's.
// The method must return a boolean and be case insensitive.
// The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = str.toLowerCase().split("x").length - 1;
  let countY = str.toLowerCase().split("o").length - 1;
  console.log(countY);
  if (countX === countY) {
    return true;
  }
  if (!countX || !countY) {
    return true;
  } else {
    return false;
  }
}

console.log(XO("zzzzO"));

// You are going to be given a non-empty string.
// Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"
function getMiddle(s) {
  //Code goes here!
  return "";
}
