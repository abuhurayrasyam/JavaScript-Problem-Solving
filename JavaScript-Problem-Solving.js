// Problem 1: Reverse a String
function reverseString(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // Output: "olleh"

// Problem 2: Count Vowels in a String
function countVowels(string) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of string) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("programming")); // Output: 3

// Problem 3: Check for Palindrome
function isPalindrome(string) {
  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return string === reversed;
}
console.log(isPalindrome("madam")); // Output: true
console.log(isPalindrome("hello")); // Output: false

// Problem 4: Find the Maximum Number
function findMax(array) {
  let max = array[0];
  for (let num of array) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([5, 1, 9, 3])); // Output: 9

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(array) {
  let unique = [];
  for (let num of array) {
    if (!unique.includes(num)) {
      unique.push(num);
    }
  }
  return unique;
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // Output: [1, 2, 3, 4]

// Problem 6: Sum of All Numbers in an Array
function sumArray(array) {
  let sum = 0;
  for (let num of array) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // Output: 10

// Problem 7: Find Even Numbers in an Array
function findEven(array) {
  let evens = [];
  for (let num of array) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}
console.log(findEven([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]