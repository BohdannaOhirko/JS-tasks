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

// Alice and Bob were on a holiday. Both of them took many pictures of the places they've been,
//  and now they want to show Charlie their entire collection. However, Charlie doesn't like these sessions,
//  since the motif usually repeats. He isn't fond of seeing the Eiffel tower 40 times.
// He tells them that he will only sit for the session if they show the same motif at most N times. Luckily,
// Alice and Bob are able to encode the motif as a number. Can you help them to remove numbers such
// that their list contains each number only up to N times, without changing the order?

// Task
// Given a list and a number, create a new list that contains each number of list at most N times,
// without reordering.
// For example if the input number is 2, and the input list is [1,2,3,1,2,1,2,3],
// you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times,
// and then take 3, which leads to [1,2,3,1,2,3].
// With list [20,37,20,21] and number 1, the result would be [20,37,21].

function deleteNth(arr, n) {
  const count = []; // ініціалізація масиву, де зберігатимемо кількіть входжень
  return arr.filter((item) => {
    count[item] = (count[item] || 0) + 1; //якщл елемент ще не з'являвся, то беремо 0, +1 це збільшуємо лічильник для цього елемента
    return count[item] <= n;
  });
}
console.log(deleteNth([20, 37, 20, 21], 1));

// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that shown on your screen.
// Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples (input --> output):
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"
// "Skippy" --> "##ippy"
// "Nananananananananananananananana Batman!" --> "####################################man!"

function maskify(cc) {
  let arr = cc.split("");
  let arrNonMaskify = arr.splice(arr.length - 4, arr.length);
  let arrMaskify = arr.splice(arrNonMaskify, arr.length);

  return arrMaskify
    .map((x) => x.replace(x, "#"))
    .toString()
    .concat(",", arrNonMaskify)
    .replaceAll(",", "");
}
console.log(maskify("4556364607935616"));

// Your task is to make a function that can take any non-negative integer as an argument
//  and return it with its digits in descending order. Essentially, rearrange the digits
//  to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  if (n > 0) {
    let arr = String(n).split("").map(Number);
    let descending = arr.sort((a, b) => b - a).join("");
    console.log(typeof parseInt(descending));
    return parseInt(descending);
  }
}

console.log(descendingOrder(42145));

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments,
// neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let replace = "[aeuio]";
  let regExp = new RegExp(replace, "gi");
  return str.replace(regExp, "");
}

console.log(disemvowel("HEllo, world!"));

// You are given an array (which will have a length of at least 3,
//   but could be very large) containing integers. The array is either entirely comprised of odd integers
//   or entirely comprised of even integers except for a single integer N. Write a method
//    that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers) {
  let oddNumber = integers.filter((num) => num % 2 !== 0);
  let evenNumber = integers.filter((num) => num % 2 == 0);
  if (oddNumber.length < evenNumber.length) {
    return parseInt(oddNumber);
  } else if (oddNumber.length > evenNumber.length) {
    return parseInt(evenNumber);
  }
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
