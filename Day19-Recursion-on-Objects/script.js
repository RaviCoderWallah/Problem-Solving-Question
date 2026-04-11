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

//Homework Question
// 1. Convert All String Values to Uppercase in a Nested Object
function convertToUppercase(obj) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (typeof obj[key] === "object") {
            convertToUppercase(obj[key]);
        } else {
            obj[key] = obj[key].toUpperCase()
        }
    }
    return obj;
}

//2. Count How Many Times a Key Appears in a Nested Object
function countKeyAppears(obj, target) {
    let keys = Object.keys(obj);
    let count = 0;
    for (const key of keys) {
        if (key == target) {
            count++;
        }
        if (typeof obj[key] === "object" && obj[key] !== null) {
            count += countKeyAppears(obj[key], target);
        }
    }
    return count;
}

//3. Find the Depth of a Nested Object
function depthNestedObject(obj) {
    let keys = Object.keys(obj);
    let count = 0;
    for (const key of keys) {
        if (typeof obj[key] === "object") {
            count++;
            count += depthNestedObject(obj[key])
        }
    }
    return count;
}

//4. Check If a Value Exists in a Nested Object
function isValueExists(obj, target) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (obj[key] === target) return true;
        if (typeof obj[key] === "object" && obj[key] !== null) {
            return isValueExists(obj[key], target)
        }
    }
    return false;
}

//5. Replace a Value in a Nested Object Using Recursion
function replaceValue(obj, target) {
    const keys = Object.keys(obj);
    for (const key of keys) {
        if (key === "city") {
            return obj[key] = target;
        };
        if (typeof obj[key] === "object" && obj[key] !== null) {
            replaceValue(obj[key], target)
        }
    }
    return obj;
}