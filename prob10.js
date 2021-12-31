/**10. Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
------
------ */


let a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
let m = 0;

for (let i=0; i<a.length; i++){
    console.log(`Row ${m}`);
    for (let j=0; j<a.length; j++){
        if (j < a[i].length){
            console.log(a[i][j])
        }
    
    }
    console.log('\n')
    m++;
}
