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
  let strLength = s.length;
  let middleStr = Math.floor(strLength / 2);
  return strLength % 2 === 0 ? s[middleStr - 1] + s[middleStr] : s[middleStr];
}

console.log(getMiddle("test"));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
// The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
  if (number < 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < number; ++i) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(13));

function sumMultiple(number) {
  let sum = [...Array(number).keys()] // для отримання ітератора індекса масивів
    .map((n) => n + 1)
    .filter((n) => n % 3 === 0 || n % 5 === 0)
    .reduce((acc, n) => acc + n, 0);
  return sum;
}
console.log(sumMultiple());
