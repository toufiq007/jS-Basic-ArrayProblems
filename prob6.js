/**
 * 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For    example if you accept 025468 
 * the output should be 0-254-6-8
 */


/**
 * Algorithm
 * 1: check kore nite hobe input number kina
 * 2: number take string e convert kore tarpor split() method diye split kore nile akta string  er array pauya jabe
 * 3: tarpor string Arrray take map() caliye number e convert korte hobe
 * 4: tarpor just number array take loop caliye sob item gulo check kore dekhte hobe je even kina even hole eder splice()function diye -- dash add kore dite hobe
 * 5: tarpor just numArr.join() kore return kore dite hobe
 * 
 */


let setDashes = (num)=>{
    let strArr = num.toString().split('');
    let numArr = strArr.map(Number);
    for (let i=0; i<numArr.length; i++){
        if (numArr[i]%2==0 && numArr[i-1]%2==0){
            numArr.splice(i,0,'--')
        }
    }
    return numArr.join();
}
console.log(setDashes(124356786342));




