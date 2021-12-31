/**
 * 8. Write a JavaScript program to find the most frequent item of an array. Go to the editor
Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
Sample Output : a ( 5 times )
*/

/**
 * Algorithm
 * ১ঃ দুইটা লুপ ইউস করে করেতে হবে
 * ২ঃ 
 */


let arr1 = [3, 'a', 'a', 2, 'a', 3, 'a', 3, 'a', 2, 4, 9, 32,2,2,2,2,2];

let mostFrequent = 1;
let maximum = 0;
let item;

for (let i=0; i<arr1.length; i++){
    for (let j=i; j<arr1.length; j++){
        if (arr1[i]==arr1[j]){
            maximum++;
        }
        if (mostFrequent < maximum){
            mostFrequent = maximum;
            item = arr1[i];
        }
    }
    maximum = 0;
}
console.log(`Most Frequent ${item}. It has ${mostFrequent} times`);



