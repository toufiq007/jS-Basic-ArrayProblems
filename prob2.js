// 2. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2] 
// []


/**
 * Algorithm
 * ** প্যারামিটার নিবে ২ টা 
 * 1: ফার্স্ট আইটেম টা বের করতে হবে, যদি সেকেন্ড প্যারামিটার না থাকে 
 * ২ঃ সেকেন্ড প্যারামিটার থাকলে সে কয়টা ইলিমেন্ট কেটে নিতে হবে
 * ৩ঃ ইলিমেন্ট কেটে নেওয়ার জন্য array.slice() মেথড ইউস করা যেতে পারে 
 */





let first = (arr,n)=>{
    let nthItems;
    if (Array.isArray(arr)){
        if (n == null){
            return arr[0];
        }
        else if (n < 0){
            return [];
        }
        else{
            nthItems = arr.slice(0,n)
        }
    }
    return nthItems;
}

// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));






