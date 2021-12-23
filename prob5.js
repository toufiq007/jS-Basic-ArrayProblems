/** 5. Write a simple JavaScript program to join all elements of the following array into a string.
    Sample array : myColor = ["Red", "Green", "White", "Black"];
    "Red,Green,White,Black"
    "Red,Green,White,Black"
    "Red+Green+White+Black"

*/


/**
 * Algorithm
 * অ্যারে কে কয়েকভাবেই স্ট্রিং বানিয়ে ফেলা যায় 
 * 1: আমরা চাইলে একটা অ্যারে কে toString() মেথড দিয়ে string বানিয়ে ফেলতে পারি 
 * ২ঃ আমরা চাইলে join() মেথড টা ইউস করে string বানিয়ে ফেলতে পারি  
 * ৩ঃ join() parameter হিসেবে string ney. amra ekhane কি সেপারেটর ইউস করবো সেটাও এখানে দিতে পারি 
 */

let myColor = ["Red", "Green", "White", "Black"];
let newJoinItems = myColor.join("+ ",'limon','salman')
console.log(myColor)
console.log(newJoinItems);



// let joinColor = myColor.join();
// console.log(typeof(joinColor));
// console.log(myColor);
// console.log(joinColor);


// console.log(myColor.toString())
// console.log(myColor.join());
// console.log(myColor.join('+'));



// let strings = ""

// for (let i=0; i<myColor.length; i++){
//     strings += `${myColor[i]}+`;
// }

// console.log(strings);



// concatation of two arrays
let a = [1,2,3];
let b = [4,5,6];

let c = [...a,...b]; // contact array with the help of spread operator
console.log(c);




