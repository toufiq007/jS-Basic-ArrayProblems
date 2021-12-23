// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]




/**
 * Algorithm
 * 1: দুইটা প্যারামিটার নিবে --> অ্যারে আর nth ভেলু 
 * ২ঃ যদি n না থাকে তাহলে জাস্ট ইন্ডেস্ক ধরে লাস্ট ইলিমেন্ট টা প্রিন্ট করে দিলেই হবে
 * ৩ঃ যদি থাকে তাহলে slice method টা ইউস করতে হবে সুধু slice এর ভিতরে n এর ভেলু টা নেগেটিভ করে দিতে হবে 
 */




// how slice methods works


let names = ['limon','tamim','sajjad','asif','tonima','mahia','shanto'];


let last = (array,n)=>{
    let lastElement;
    if (Array.isArray(array)){
        if (n==null){
            lastElement = array[array.length-1] // last endex ta neuya lagbe 
            
        }
        else if (n){
            lastElement = array.slice(-n);//
        }
    }
    return lastElement;
}

console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));

// [9, 0, -2]
// [7, 9, 0, -2]


