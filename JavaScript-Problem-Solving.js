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