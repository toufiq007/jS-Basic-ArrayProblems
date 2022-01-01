/**
 *14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity). 
    input : [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
    output: [1,2,4,5,7,8,3,6];
 */

/**
 * Algorithm
 * 1: onnek vabei kora jay
 * 2: niche koyekvabe kora hoiche
 * 3: ekta array niye check kore dekhte hobe inputArray er element gulo match korche kina match na korle new array te push kore dite hobe
 */





// Method one 
// remove duplicate items from array with set

let Mynum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
let uniqueItems = [...new Set(Mynum)];
// console.log(uniqueItems);





// use normal for loop
let myUniqueItems = [];

for (let i=0; i<Mynum.length; i++){
   if (!myUniqueItems.includes(Mynum[i])){
      myUniqueItems.push(Mynum[i]);
   }
}

console.log(myUniqueItems);






// Method two
// Use Filter method 
let newNum = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];

let uniqueNum = newNum.filter((item,index)=>{
   return newNum.indexOf(item)===index;
})

// console.log(uniqueNum);






// Method three
// Use forEach

let uniqueUsers = [];
newNum.forEach((items)=>{
   if (!uniqueUsers.includes(items)){
      uniqueUsers.push(items);
   }
})
// console.log(uniqueUsers);







// Find the Duplicate Items

let duplicatNum = newNum.filter((item,index)=>{
   return newNum.indexOf(item) !== index;
})
// console.log(duplicatNum);



