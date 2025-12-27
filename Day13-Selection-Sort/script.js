//Class Question 
//1. Sort an Array in Ascending Order Using Selection Sort 
//Input: [7, 2, 9, 4, 1]
//Output: [1, 2, 4, 7, 9]
function sortArrayAscending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
    }

    return arr;
}

//2. Sort an Array in Descending Order Using Selection Sort 
//Input: [3, 8, 5, 2, 9]
//Output: [9, 8, 5, 3, 2]
function sortArrayDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let maxIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] > arr[maxIndex]) {
                maxIndex = k;
            }
        }
        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    return arr;
}

//3. Find the Kth smallest Element Using Selection Logic
//Input: [9, 4, 7, 1, 3]  k = 3
//Output: 4
function findKthSmallestEl(arr, k) {
    for (let i = 0; i < k; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr[k - 1]
}

//4. Selection Sort but Track Index of Minimum for Each Pass
//Input: [4, 2, 5, 3, 1]
//Output: 
//Pass 1 - min index = 4;
//Pass - 2 - min index = 3
function trackOfMinimumEachPass(arr) {
    let trackPass = [];
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] < arr[minIndex]) {
                minIndex = k;
            }
        }
        console.log(`Pass ${i + 1} - min index = ${minIndex}`);

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
        trackPass.push(minIndex);
    }
    return trackPass;
}

// 5. Sort an Array of Objects by Name
// Input:[{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }];
function sortObjectByName(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k].name.toLowerCase() < arr[minIndex].name.toLowerCase()) {
                minIndex = k;
            }
        }
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}

//Homework Question
// 1. Find the K Largest Elements Without Full Sorting
// Input: [5, 1, 9, 3, 7], K = 2
// Output: [9, 7] (Stop early once top K elements are placed.)
function sortKLargestElements(arr, k) {
    let kLargestEl = [];
    for (let i = 0; i < k; i++) {
        let maxIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k] > arr[maxIndex]) {
                maxIndex = k;
            }
        }

        if (maxIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[maxIndex];
            arr[maxIndex] = temp;
        }
    }
    for (let i = 0; i < k; i++) {
        kLargestEl.push(arr[i])
    }
    return kLargestEl;
}

// 2. Sort a 2D Array by Second Element in Each Subarray
// Input: [[3, 9], [1, 4], [2, 5]]
// Output: Sorted by second values → [[1,4], [2,5], [3,9]]
function sort2DArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let k = i + 1; k < arr.length; k++) {
            if (arr[k][0] < arr[minIndex][0]) {
                minIndex = k;
            }
        }
        if(minIndex !== i){
            let temp = arr[i];
            arr[i] = arr[minIndex]
            arr[minIndex] = temp;
        }
    }
    return arr;
}