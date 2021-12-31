/**12. Write a JavaScript program to compute the sum and product of an array of integers. */

/**
 * Algorithm
 * 1: take a array
 * 2: take sum and product two variable
 * 3: find the sum of all the element of the array and find the product of all the element of the array
 * 4: after then return sum and product
 */

let sampleArray = [1,2,3,4,5,6];

let computeArray = (inputArray)=>{
    let sum = 0;
    let product = 1;

    for (let i=0; i<inputArray.length; i++){
        sum+= inputArray[i];
        product*= inputArray[i];
    }
    return `Sum= ${sum} and Product= ${product}`;
}

console.log(computeArray(sampleArray));
