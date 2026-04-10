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
function reverseString(str, index = 0){
   if(index == str.length - 1) return str[index];
   return reverseString(str, index + 1) + str[index];
}

//5. Check if a String Is Palindrome Using Recursion
function isPalindrome(str, index = 0){
    if(index > str.length / 2) return true;
    if(str[index] !== str[str.length - 1- index]) return false;
    return isPalindrome(str, index + 1);
}

