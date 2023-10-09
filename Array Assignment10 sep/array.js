
//  Find Min Number 

/* let arr = [5, 4, 3, 2, 1]
if (arr.length != 0) {
    let minNumber = Number.POSITIVE_INFINITY;
   for (let i = 0; i < arr.length; i++){
   if( arr[i] < minNumber){
    minNumber = arr[i];
   }

   }console.log(`Minimum number is: ${minNumber}`);
} else{
    console.log(`Empty Array`);
} */


//  Find Max Number 

/* let arr = [5, 4, 3, 2, 1]
if (arr.length != 0) {
   let maxNumber = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < arr.length; i++){
  if( arr[i] > maxNumber){
   maxNumber = arr[i];
  }

  }console.log(`Minimum number is: ${maxNumber}`);
} else{
   console.log(`Empty Array`);
} */

// Find the sum of all the numbers in the array.

/* 
let arr = [ 20,20,20,20,20];
let sum = 0;
 for (let a = 0; a < arr.length; a++){
    sum += (arr[a]);
 }
 console.log("Sum of all elements is: "  +  sum);  
  */

//  Calculate the average of all the elements in the array

/* let arr = [ 20,20,20,20,20];
let sum = 0;
let avreage;
 for (let a = 0; a < arr.length; a++){
    sum += (arr[a]);
    avreage = sum / arr.length;
 }
 console.log("Average  of all elements is: "  + avreage); */


//  Sort the array in ascending order.

/* let arr = [10,50,20,40,30];
 for (let i=0; i<arr.length; i++){
    for (let j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
 }
 console.log(arr);

 */

// reverse elements of an array 

/* let arr = [80,100,90,50, 40, 30, 20, 10];
revArr = [];
for (let i = arr.length-1; i >= 0; i--) {
    revArr = arr[i];
    console.log(revArr);
} */

//  remove even number fron an array 

/* let arr = [80,103,91,55, 40, 30, 27, 19];
arrExceptEvenNumber = [];
for (let i=0; i<arr.length; i++) {
    if(arr[i] %2 !== 0){
      arrExceptEvenNumber = arr[i];
      console.log(arrExceptEvenNumber)
    
    } 
  
}  */

// takes two arrays as input and returns a new array containing the elements that are common to both input arrays.

let arr1 = [10,25,30,45,50,55,60];
let arr2 = [10,35,30,75,50,53,60];
let commanArr = [];
for (let i=0; i<arr1.length; i++){
    for (let j=0; j<arr2.length; j++){
        if(arr1[i] === arr2[j]){
            commanArr = arr2[j];
            console.log(commanArr);
        }
    }
   
}


