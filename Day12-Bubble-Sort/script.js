//Class Question 
//1. Sort an Array in Ascending Order Using Bubble Sort
//Input: [5, 3, 8, 6]
//Ouptut: [3, 5, 6, 8]
function sortAscendingOrder(arr) {
    let swaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1]
                arr[k + 1] = temp;
            }
            swaped = true;
        }
        if (!swaped) break;
    }
    return arr;
}

// 2. Sort an Array in Descending Order Using Bubble Sort
// Input: [7, 1, 5, 3, 2]
// Output: [7, 5, 3, 2, 1]
function sortDescendingOrder(arr) {
    let swaped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] < arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1]
                arr[k + 1] = temp;
            }
            swaped = true;
        }
        if (!swaped) break;
    }
    return arr;
}

//3. Sort a String Alphabetically Using Bubble Sort Logic
// Input: "javascript"
// Output: "aacijprstv" (Treat string as array of characters.)
function sortStringAlphabetically(str) {
    let newStr = [...str];
    let swapped = false;
    for (let i = 0; i < newStr.length - 1; i++) {
        for (let k = 0; k < newStr.length - i - 1; k++) {
            if (newStr[k] > newStr[k + 1]) {
                let temp = newStr[k];
                newStr[k] = newStr[k + 1];
                newStr[k + 1] = temp;
            }
            swapped = true;
        }
        if (!swapped) break;
    }
    return newStr.join("");
}

//4. Sort an Array and Count the Number of Swaps Performed
// Input: [4, 3, 2, 1]
// Output:
// Sorted: [1,2,3,4]
// Swaps: 6
function sortArrayWithSwapsCount(arr) {
    let swapped = false;
    let swappedCount = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                swappedCount++;
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
            swapped = true;
        }
        if (!swapped) break;
    }
    return { arr, swappedCount };
}

//HomeWork Question 
// 1. Sort an Array of Objects by Age (Ascending)
//Input: 
// [
//   { name: "A", age: 25 },
//   { name: "B", age: 20 },
//   { name: "C", age: 30 },
// ];
function sortArrayOfObjectByAge(data) {
    let swapped = false;
    for (let i = 0; i < data.length; i++) {
        for (let k = 0; k < data.length - i - 1; k++) {
            if (data[k].age > data[k + 1].age) {
                let temp = data[k];
                data[k] = data[k + 1];
                data[k + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return data;

}

//2. Sort an Array but Keep Zeros at the End (Zeros Fixed)
// Input: [3, 0, 5, 0, 2, 1]
// Output: [1, 2, 3, 5, 0, 0]
function sortArrZeroAtEnd(arr) {
    let zero = [];

    let nonZero = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            zero.push(arr[i]);
        } else {
            nonZero.push(arr[i]);
        }
    }
    for (let i = 0; i < nonZero.length - 1; i++) {
        let swapped = false;
        for (let k = 0; k < nonZero.length - i - 1; k++) {
            if (nonZero[k] > nonZero[k + 1]) {
                let temp = nonZero[k];
                nonZero[k] = nonZero[k + 1];
                nonZero[k + 1] = temp;
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    nonZero.push(...zero);
    return nonZero
}


// 3. Sort an Array and Track How Many Comparisons Were Made
// Input: [5, 1, 4, 2, 8]
// Output:
// Sorted array
// Total comparisons
function trackComparison(arr) {
    let swapped = false;
    let totalComparision = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            totalComparision++;
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1]
                arr[k + 1] = temp;
            }
            swapped = true;
        }
        if (!swapped) break;
    }
    return { arr, totalComparision };
}

// 4. Sort an Array of Characters Case-Insensitive
// Input: ['b', 'A', 'd', 'C']
// Output: ['A', 'b', 'C', 'd']
function sortCharCaseInsensitive(arr) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k].toLowerCase() > arr[k + 1].toLowerCase()) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
            swapped = true;
        }
        if (!swapped) break;
    }
    return arr;
}

// 5. Sort a 2D Array by the First Element of Each Subarray
//Input: [[3, "c"], [1, "a"], [2, "b"]]
//Output: [[1, "a"], [2, "b"], [3, "c"]]
function sort2DArrayByFirstEl(arr) {
    let swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
                swapped = true;
            }
            if (!swapped) break;
        }
    }
    return arr;
}

// 6. Sort an Array in Ascending Order but Stop After K Passes
// Input: [5, 4, 3, 2, 1], K = 2
// Output: Array state after 2 bubble sort passes.
function sortStopK(arr, k) {
    let swapped = false;
    for (let i = 0; i < k; i++) {
        for (let k = 0; k < arr.length - i - 1; k++) {
            if (arr[k] > arr[k + 1]) {
                let temp = arr[k];
                arr[k] = arr[k + 1];
                arr[k + 1] = temp;
            }
            swapped = true;
        }
        if (!swapped) break;
    }
    return arr;
}

// 7. Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
// Input: [9, 4, 2, 7, 6, 5]
// Output: [9, 2, 4, 7, 6, 5] (Sort evens using bubble sort while keeping odd numbers fixed.)
function sortOnlyEvenNumbers(arr){
  let swapped = false;
  for(let i = 0; i < arr.length - 1; i++){
    for(let k = 0; k < arr.length - i - 1; k++){
       if(arr[k] % 2 == 0 && arr[k + 1] % 2 == 0){
         if(arr[k] > arr[k + 1]){
            let temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
         }
         swapped = true;
       }
    }
    if(!swapped) break;
  }
  return arr;
}

// 8. Sort an Array of Strings by Length (Shortest to Longest)
// Input: ["hi", "javascript", "is", "fun"]
// Output: ["hi", "is", "fun", "javascript"]
function sortStringByLength(arr){
  let swapped = false;
  for(let i = 0; i < arr.length - 1; i++){
    for(let k = 0; k < arr.length - i - 1; k++){
        if(arr[k].length > arr[k + 1].length){
            let temp = arr[k];
            arr[k] = arr[k + 1];
            arr[k + 1] = temp;
        }
        swapped = true;
    }
    if(!swapped) break;
  }
  return arr;
}