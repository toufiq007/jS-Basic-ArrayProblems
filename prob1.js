// 1. Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true


// Array.isArray() method check the input is array or not array
let is_Array = (arr)=>{
    if(Array.isArray(arr)){
        return true;
    }
    else{
        return false;
    }
}

console.log(is_Array([1,2,3,4,5]));
console.log(is_Array('limon'));











