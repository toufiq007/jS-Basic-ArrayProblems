/**11. Write a JavaScript program to find the sum of squares of a numeric vector. */
/**
 * sample input [0,1,2,3,4];
 * output = 0^2+1^2+2^2+3^2+4^2 = 30
 */

/**
 * Algorithm
 * 1: input hisebe ekta array nibe ar sum namer ekta varible nibe
 * 2: tarpor array er sob item guloke niye square kore diye sudhu sum er sathe add kore dibe
 * 3: tarpor sum take return kore dilei kaj ses
 */

let mainArray = [0,1,2,3,4];

let squareSum = (array)=>{
    let sum = 0;
    for (let i=0; i<array.length; i++){
        // sum+= array[i] * array[i]; // method one
        sum += Math.pow(array[i],2);  // method two
    }
    return sum;
}

console.log(squareSum(mainArray));
