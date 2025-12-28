//Class Question 
// 1️⃣ Sort an Array in Ascending Order Using Insertion Sort
// Input: [9, 5, 1, 4, 3]
// Output: [1, 3, 4, 5, 9]

function sortAscendingOrder(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function sortDescendingOrder(arr){
  for(let i = 1; i < arr.length; i++){
    let current = arr[i];
    let j = i - 1;
    while(j >= 0 && arr[j] < current){
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr
}

function insertvalueInSortedArray(arr, value){
  let newArr = [...arr, value];
  for(let i = 1; i < newArr.length; i++){
    let current = newArr[i];
    let j = i - 1;
    while(j >= 0 && newArr[j] > current){
      newArr[j + 1] = newArr[j]
      j--;
    }
    newArr[j + 1] = current;
  }
  return newArr;
}
