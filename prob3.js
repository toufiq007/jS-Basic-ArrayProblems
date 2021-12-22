/**2. Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
*/


/**
 * Algorithm
 * কয়েকভাবে করা যায় 
 * ১ঃ একটা অ্যারে  কে আর একটা অ্যারে এর সাথে contat() করে দিলে অ্যারে কপি হয়ে যাবে
 * ২ঃ স্প্রেড অপারেটর ও ইউস করা জায় 
 * ৩ঃ ডাইরেক্ট একটা অ্যারে তে আর একটা অ্যারে এসাইন করেও করা যাবে 
*/



// method 1
let arr = [1,2,3];
let arr2 = arr.concat();


// console.log(arr)
// console.log(arr2)
// console.log(arr == arr2 );




// method 2
let array_Clone = (array)=>{
    let array2 = [...array];
    return array2;
}

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));


// let newCloneArray = array_Clone([1, 2, 4, 0]);
// let previousArray = [1, 2, 4, 0];
// console.log(newCloneArray == previousArray); // check previous array and modified array are same or not




// method 3
let arr3 = [1,2,3];
let arr4 = arr3;

console.log(arr4);



