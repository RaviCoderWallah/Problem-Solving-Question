// Class Questions

// 1. Print All Values in a Nested Object
function printAllValues(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            printAllValues(obj[key]);
        } else {
            console.log(obj[key]);
        }
    }
}

//2. Count Total Number of Keys in a Nested Object
function countObjectKeys(obj) {
    let count = 0;
    const keys = Object.keys(obj);
    for (const key of keys) {
        count++;
        if (typeof obj[key] === "object") {
            count += countObjectKeys(obj[key]);
        }
    }
    return count;
}

//3. Find the Sum of All Numeric Values in a Nested Object
function sum(obj) {
    let count = 0;
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            count += sum(obj[key])
        } else {
            if (typeof obj[key] === "number") {
                count += obj[key]
            }
        }
    }
    return count;
}

