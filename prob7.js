/**
 * 7. Write a JavaScript program to sort the items of an array. Go to the editor
Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
 */

/**
 * Algorithm
 * 1: sort() method diye array tate sort kore felbo
 * 2: tarpor ... or spread operator diye value ta spread kore dibo
 * */


let arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

let sortArray = arr1.sort((a,b)=>{
    return a-b;
})

console.log(...sortArray);

