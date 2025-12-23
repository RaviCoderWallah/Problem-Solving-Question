//Class Question - (7 Problems)

//1. Find the Maximum and Minimum Element
//input: [10, 25, 3, 18]
//Output: Max = 25 Min = 3
function getMinMaxFromArray(arr) {

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return { max, min }
}

//2. Reverse an Array (Manual Method Only)
//Input: [1, 2, 3, 4, 5]
//Output: [5, 4, 3, 2, 1]
function reverseArray(arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
//Solution 2: Two-Pointer Methods
function reverseArray(arr) {
  let left = 0;
  let right = arr.length - 1;
  for (let i = 0; i < arr.length / 2; i++) {
    let temp = arr[left]
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
  return arr;

}

//3: Check if an Array is Sorted (Ascending)
//Input: [1, 2, 3, 4, 5]
//Ouput: Sorted
function hasSorted(arr) {
  let sorted = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      sorted = true;
    } else {
      sorted = false;
      return sorted;
    }
  }
  return sorted;
}

//4: Remove All Duplicate From an Array (Use Filter Method)
//Input: [1, 2, 2, 3, 3, 4]
//Output: [1, 2, 3, 4]
function removeDuplicate(arr) {
  let newArr = arr.filter((num, index) => {
    return arr.indexOf(num) === index
  });
  return newArr;
}

//5: Merge Two Arrays Without Using concat or spread
//Input: [1, 2, 3] and [4, 5]
//Output: [1, 2, 3, 4, 5]
function mergeTwoArrays(arr1, arr2) {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i])
  }
  return newArr;
}


//HomeWork Question 
//1. Find the Second Largest Element
// Input: [10, 20, 4, 45, 99]
// Output: 45
function secondLargestElement(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[arr.length - 2];
}

// 2. Rotate an Array to the Right by K Steps
// Input: [1, 2, 3, 4, 5], K = 2
// Output: [4, 5, 1, 2, 3]
function rotateArray(arr, k) {
  let rotateArr = [];
  let kStepsValues = arr.slice(0, arr.length - k);
  arr.splice(0, arr.length - k);
  rotateArr.push(...arr, ...kStepsValues);
  return rotateArr;
}

// 3. Check if Two Arrays Are Equal (Same Order)
// Input: [1, 2, 3] vs [1, 2, 3]
// Output: Equal
function hasTwoArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] != arr2[i]) return false;
  }

  return true;

}

// 4. Count Even and Odd Numbers in an Array
// Input: [2, 5, 7, 8, 10]
// Output: Even = 3, Odd = 2
function countEvenAndOdd(arr) {
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) countEven++;
    else countOdd++;
  }
  return { countEven, countOdd }
}

//5. Find All Unique Pairs Whose Sum Equals a Target
// Input: [1, 2, 3, 4, 5], target = 6
// Output: (1,5), (2,4)
function findUniqueParis(arr, target) {
    
}
console.log(findUniqueParis([1, 2, 3, 4, 5], 6))

// 6. Left Shift an Array by One Position
// Input: [1, 2, 3, 4]
// Output: [2, 3, 4, 1] ✨ Manual shifting, moving first element to end.
function leftShiftArr(arr){
  let getFirstEl = arr.slice(0, 1);
  arr.splice(0, 1);
  arr.push(...getFirstEl);
  return arr;
}

// 7. Count How Many Times an Element Appears in an Array
// Input: array = [1, 4, 4, 4, 2], element = 4
// Output: 3
function elementCount(arr, el){
  let count = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === el) count++
  }
  return count;
}
