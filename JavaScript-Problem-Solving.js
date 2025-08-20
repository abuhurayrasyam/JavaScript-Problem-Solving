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