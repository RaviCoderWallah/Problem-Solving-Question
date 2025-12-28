//Class Question 
//1. Find a Element in an Array Using Linear Search
//Input: [4, 2, 7, 1, 9] element = 7
//Output: Found at index 2
function findElementIndex(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) return `Found ${el} at Index ${i}`;
        else return "Not found";
    }
}

//2. Find the first Occurence of an Element 
//Input: [3, 5, 3, 7, 3] search = 3
//OUtput: index 0
function findFirstOccurence(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) return `index ${i}`;
        else return -1;
    }
}

//3. Find the last occurence of an Element 
//Input: [3, 5, 3, 7, 3] search = 3
//Output: index 4
function findLastOccurence(arr, el) {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            index = i;
        }
    }
    return `index ${index}`;
}

//4. Count how may times an Element Appears
//Input: [3, 5, 3, 7, 3]  search = 3
//Output: 3 times
function countElementAppears(arr, el) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) count++;
    }
    return `${count} times`;
}

//5. Find all Indexes where the elemnt appears
//Input: [3, 5, 3, 7, 3]  search = 3
//output: [0, 2, 4]
function findAllIndexes(arr, el) {
    let allIndexes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == el) {
            allIndexes.push(i);
        }
    }
    return allIndexes;
}

//6. Linear Search in Array of Objects
// Input: [
//    {id: 1, name: "Ravi"},
//    {id: 2, name: "Mukesh"},
//    {id: 3, name: "Kishor"}
// ] 
// search id = 2
function findId(arr, searchId) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == searchId) {
            return arr[i];
        }
    }
    return "Not found";
}


//Homework Question
//1. Check if an Element Exists in a 2D Array
//Input: [[1, 2], [3, 4], [5, 6]]  search = 4
//Output: Found at position (1, 1)
function hasElementExists2DArr(arr, el) {
    for (let i = 0; i < arr.length; i++) {
        for (let k = 0; k < arr[i].length; k++) {
            if (arr[i][k] == el) {
                console.log(`(${i} ${k})`);
            }
        }
    }
}

//2. Find the Minimum Value using Linear Scan
//Inut: [2, 5, 6]
//Output: 2
function findMinimumValue(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}

//3. Find the Maximum Value using Linear Scan
//Inut: [2, 5, 6]
//Output: 2
function findMaximumValue(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        }
    }
    return largest;
}

// 4. Find the First Element Greater Than X
// Input: [2, 5, 9, 12, 15], X = 10
// Output: 12
function findFirstElementGreaterThenX(arr, x) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > x) {
            return arr[i]
        }
    }
    return null;
}

// 5. Check if Array is Strictly Increasing (Using Linear Scan)
// Input: [1, 2, 3, 5, 4]
// Output: false
function hasStrictlyIncreasing(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1] || arr[i] == arr[i - 1]) return false;
    }
    return true;
}

// 6. Find the First String That Starts With a Given Character
// Input: ["apple", "ball", "cat", "apply"], char = 'a'
// Output: "apple"
function findFirstSting(arr, char) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][0] == char) {
            return arr[i];
        }
    }
    return -1;
}