"use strict"
//Class Question 
// 1. Find an Element Using Binary Search
// Input: [1, 3, 5, 7, 9], search = 7
// Output: 3
// Return -1 If Element Is Not Found

function findElementIndex(arr, el) {

    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor((start + end) / 2);

    while (mid >= el) {
        mid = Math.floor((start + end) / 2);

        if (arr[mid] <= el) {
            start = mid + 1;
            mid = Math.floor((start + end) / 2);
        } else {
            return mid;
        }
    }


}
console.log(findElementIndex([1, 3, 5, 7, 9], 7))