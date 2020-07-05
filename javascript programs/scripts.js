
//Create a js function that alert your name
function alertName(name){
    // alert(`Hi! My Name is ${name}`)
    return `Hi! My Name is ${name}`
}

console.log('-----------Show Your Name-----------')
console.log(alertName('Hazel'))
console.log('------------------------------------')

/*
Write a JavaScript program that accept two integers and display the larger.
*/
function largerInteger(num1, num2){
    if(num1 > num2){
        return `The larger number is: ${num1}`
    }else{
        return `The larger number is: ${num2}`
    }
}
console.log('-----------Larger Integer-----------')
console.log(largerInteger(12,3))
console.log('------------------------------------')


/*
Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign.
*/
function signOfProduct(num1, num2, num3){
    let product = num1 * num2 * num3;
    if(product < 0){
        return `The Product Is: ${product} and the Sign Is: -`
    }else{
        return `The Product Is: ${product} and the Sign Is: +`
    }
}
console.log('-----------Sign Of Product-----------')
console.log(signOfProduct(12,3,0))
console.log('------------------------------------')


/*
Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
Sample numbers : 0, -1, 4
Output : 4, 0, -1
*/

function sortNumber(num1, num2, num3){
    let numberToSort = [num1,num2,num3].sort(function(a,b){
        return a-b
    })
    return `Sorted Number is ${numberToSort}`
}
console.log('-----------Sort Numbers-----------')
console.log(sortNumber(3,12,0))
console.log('------------------------------------')


/*
Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result.
Sample numbers : -5, -2, -6, 0, -1
Output : 0
*/
function largerInFiveNumbers(num1, num2,num3,num4,num5){
    // First Solution: Using Math.min()
    // return Math.min(num1, num2,num3,num4,num5)

    //Second Solution: Using Sort Method
    let myNumbers = [num1, num2, num3, num4, num5]
    return myNumbers.sort(function(a,b){
        return b-a
    })[0]
}

console.log('-----------Larger In Five Numbers-----------')
console.log(largerInFiveNumbers(-4, 0, -1,  8,-5))
console.log('------------------------------------')

/*
Write a JavaScript for loop that will iterate from 0 to 5. For each iteration, it will check if the current number is odd or even,
and display a message to the screen.
Sample Output :
"0 is even"
"1 is odd"
"2 is even"
*/
function getOddOrEven(){
    console.log('-----------Odd or Even-----------')
    for(let i = 0; i<=5; i++){
        if(i % 2){
            console.log(`${i} is odd`)
        }else{
            console.log(`${i} is even`)
        }
    }
    console.log('----------------------')

}
getOddOrEven()

/*
Write a JavaScript program which compute, the average marks of the following students Then,
this average is used to determine the corresponding grade.
----------------------------        -----------------------------   
Student Name        Marks               Range           Grade
----------------------------        -----------------------------   
David               80                  <60             F
Vinoth              77                  61-70           D
Divya               88                  71-80           C
Ishitha             95                  81-90           B
Thomas              68                  91-100          A
----------------------------        -----------------------------
*/
let studentRecords = [
    {name: "David", marks: 80},
    {name: "Vinoth", marks: 64},
    {name: "Divya", marks: 88},
    {name: "Ishitha", marks: 95},
    {name: "Thomas", marks: 70}
]
let grade = '';
function computeGrades(){
   console.log('-----------Compute Grades By Range-----------') 
   for(let i=0; i<studentRecords.length; i++){
        if(studentRecords[i].marks <= 60){
            grade = 'F'
        }else if(studentRecords[i].marks >= 61 && studentRecords[i].marks <= 70 ){
            grade = 'D'
        }else if(studentRecords[i].marks >= 71 && studentRecords[i].marks <= 80){
            grade = 'C'
        }else if(studentRecords[i].marks >= 81 && studentRecords[i].marks <= 90){
            grade = 'B'
        }else{
            grade = 'A'
        }
        console.log(`${studentRecords[i].name}:` ,studentRecords[i].marks, '   Grade:', grade)
    }
    console.log('---------------------------------------------')
}
computeGrades()


/*
Write a JavaScript function that reverse array of numbers.
Example x = [3,2,2,4,3];
Expected Output : [3,4,2,2,3]
*/
let arrNumbers = [1,4,3,2,5]
function reverseNumbers(){
    console.log('-----------Reverse Array Of Numbers-----------') 
    console.log(arrNumbers.reverse())
    console.log('---------------------------------------------')
}
reverseNumbers()



/*
Write a JavaScript function that returns a passed string with letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string.
*/


/*
Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/


/*
Write a JavaScript function that accepts two arguments, a string and a letter and the function will 
count the number of occurrences of the specified letter within the string. Go to the editor
Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/

/*
Write a JavaScript program to construct the following pattern, using a nested for loop.
*  
* *  
* * *  
* * * *  
* * * * *  
*/
function makePattern(){
    var x,y,chr;
    for(x=1; x <=6; x++)
    {
       for (y=1; y < x; y++)
         {
        chr=chr+("*");        
          }
     console.log(chr);
     chr='';    
    }
}
makePattern()



/*
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/


/*
Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"

*/



/*
Write a JavaScript program to sort the items of an array. 
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function sortItems(){
    var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
    console.log(arr1.sort((a,b) => {
        return a-b
    }))
}
sortItems()



/*
Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).
*/


/*
There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/



/*
Write a javascript function to display a duplicate number in array inpputs
Example Input: [21,3,4,5,3,21]
Expected Output: [3,21]
*/




/*
 Write a JavaScript function to sort the following array of objects by title value. Go to the editor
Sample object :

var library = [ 
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];


Expected result :

[[object Object] {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]

*/