//Class Question - (7 Problems)

//1. Find the Maximum and Minimum Element
//input: [10, 25, 3, 18]
//Output: Max = 25 Min = 3

function getMinMaxFromArray(arr){

  let min = arr[0];
  let max = arr[0];

  for(let i = 1; i < arr.length; i++){
    if(arr[i] > max){
       max = arr[i];
    }
    if(arr[i] < min){
       min = arr[i];
    }
  }

  return {max, min}
}