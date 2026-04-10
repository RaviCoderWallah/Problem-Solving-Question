//Class Question 

//1. Print All Elements of an Array Using Recursion
//Input: [1, 2, 3, 4]
//Output: 1 2 3 4

function printArrayElements(arr, index = 0) {
    if (index === arr.length) return
    console.log(arr[index]);
    printArrayElements(arr, index + 1);
}

//2. Find the Sum of All Elements in an Array Using Recursion
//InputL [2, 4, 6, 8]
//Outut: 20

function printSumAllElements(arr, index = 0) {
    if (index === arr.length) return 0;
    return arr[index] + printSumAllElements(arr, index + 1);
}


//3. Check if an Array Is Sorted (Ascending) Using Recursion
let arr = [5, 6, 7, 2]
function isSorted(arr, index = 0){  //index = 0
  if(index == arr.length) return arr[arr.length - 1] + 1;
  return (arr[index] < isSorted(arr, index + 1)) ? arr[index] : "not sorted" ; 
}
let storedReturnValue = isSorted(arr);
let finalValue = (storedReturnValue === arr[0] ? "sorted" : "not sorted");


//4. Reverse a string using Recursion 
function reverseString(str, index = 0) {
    if (index == str.length - 1) return str[index];
    return reverseString(str, index + 1) + str[index];
}

//5. Check if a String Is Palindrome Using Recursion
function isPalindrome(str, index = 0) {
    if (index > str.length / 2) return true;
    if (str[index] !== str[str.length - 1 - index]) return false;
    return isPalindrome(str, index + 1);
}

//Homework Question 

// 1. Find the Length of a String Using Recursion
// Input: "javascript"
// Output: 10
function strLength(str, index = 0) {
    if (str[index] === undefined) return 0;
    return 1 + strLength(str, index + 1)
}

// 2. Count the Number of Vowels in a String Using Recursion
// Input: "education"
// Output: 5

function countVowel(str, index = 0) {
    if (index == str.length) return 0;
    return (["a", "e", "i", "o", "u"].includes(str[index]) ? 1 : 0) + countVowel(str, index + 1);
}


// 3. Find the First Occurrence of an Element in an Array Using Recursion
// Input: [5, 3, 7, 3, 9], element = 3
// Output: index 1

function firstOccurrence(arr, target, index = 0) {
    if (index === arr.length) return false;
    if (arr[index] === target) return index;
    return firstOccurrence(arr, target, index + 1);
}


// 4. Find the Last Occurrence of an Element in an Array Using Recursion
// Input: [5, 3, 7, 3, 9], element = 3
// Output: index 3

function lastOccurrence(arr, target, index = arr.length - 1){
   if(index === 0) return false;
   if(arr[index] === target) return index;
   return lastOccurrence(arr, target, index - 1);
}


// 5. Count How Many Times a Character Appears in a String Using Recursion
// Input: "recursion", character = 'r'
// Output: 2

function countCharacter(str, target, index = 0){
   if(index === str.length) return 0;
   return (str[index] === target) + countCharacter(str, target, index + 1);
}

// 6. Replace All Occurrences of a Character in a String Using Recursion
// Input: "banana", replace 'a' with 'x'
// Output: "bxnxnx"

function replaceChar(str, replaceStr, fromReplace, index = 0){
  if(index == str.length) return "";
  let currentChar = str[index] === replaceStr ? str[index] = fromReplace : str[index] ;
  return currentChar + replaceChar(str, replaceStr, fromReplace, index + 1)
}


// 7. Check if All Elements in an Array Are Even Using Recursion
// Input: [2, 4, 6, 8]
// Output: true

function isAllEven(arr, index = 0){
   if(index == arr.length) return true;
   if(arr[index] % 2 !== 0) return false;
   return isAllEven(arr, index + 1);
}