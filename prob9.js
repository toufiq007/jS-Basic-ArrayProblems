/**9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you 
 * input: 'The Quick Brown Fox' 
 * output:  'tHE qUICK bROWN fOX'. */

/**
 * Algorithm
 * 1: প্রথমে inputStr টাকে split() দিয়ে একটা string অ্যারে  বানিয়ে নিতে হবে 
 * ২ঃ একটা blank array outputArray নিতে হবে
 * ৩ঃ তারপর check করে দেখতে হবে যে konta upperCase ar konta lowerCase
 * 4: upperCase hole lowerCase kore dite hobe, lowerCase hole upperCase kore dite hobe
 * 5: condition check kore new je outputArray ta neuya hoyeche seitate push kore dite hobe
 * 5: tarpor sudhu outputArray take .join() method diye string baniye ditehobe
 */


let inputStr = 'The Quick Brown Fox';

let changeStr = (inputStr) => {
    let inputArray = inputStr.split('');
    let outputArray = [];

    for (let i = 0; i < inputStr.length; i++) {
        if (inputArray[i] === inputArray[i].toUpperCase()) {
            outputArray.push(inputArray[i].toLowerCase());
        }
        if (inputArray[i] === inputArray[i].toLowerCase()) {
            outputArray.push(inputArray[i].toUpperCase());
        }
    }
    return outputArray.join('');
}
console.log(inputStr);
console.log(changeStr(inputStr));



