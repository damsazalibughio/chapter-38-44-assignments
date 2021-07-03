//  chapter 38-42 assignments

/* Task 1 Write a custom function power ( a, b ), to calculate the value of 
a raised to b.*/

// function pow(base, power) {
     
//     var  result = 1;

//     while (power > 0) {

//         result *= base;
//         power--;       
//     }
//     return result
// }
// var res = pow(4, 3)
// console.log(res);


/* Task 2 Any year is entered through the keyboard. 
Write a function to determine whether the year is a 
leap year or not.
*/

// function checkLeapYear(year){
//     if(year%4 ==0){
//         return year+" is leap year."
//     }
//     return year+" is not leap year."

// }

// var year = prompt('Enter Year:');
// var checkYear = checkLeapYear(year)
// console.log(checkYear)


/* Task 3 If the lengths of the sides of a triangle are denoted by a, b, and 
c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions
 */

//method 1 inner-outer function
// var a = 4, 
// b = 4,
// c = 4;
// function triangleArea(a, b, c){

//     function semiPerimeter(a, b, c){
   
//         S = (a + b + c) /2;
//         return S;
//     }
//     var S = semiPerimeter(a, b, c)

//     var area = S * (S - a)*(S - b)*(S - c);

//     return  area;
// }

// var triArea = triangleArea(a, b, c)
// console.log(triArea)



// method 2
// var S,
//  a = 4, 
//  b = 4,
//  c = 4;

// function triangleArea(S, a, b, c){
//     area = S * (S - a)*(S - b)*(S - c);
//     return  area;
// }

// function semiPerimeter(a, b, c){
   
//     S = (a + b + c) /2;
//     return S;
// }
// var S = semiPerimeter(a, b, c)

// var triArea = triangleArea(S, a, b, c)
// console.log(triArea)



/* Task 4 Write a function that receives marks received by a student in 3 
subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction 
and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction.
 */
// var subject1 =70,
//     subject2 =70,
//     subject3 =70;
// function markSheet(){

//     var ave = average(subject1, subject2, subject3)
//     var per = percentage(subject1, subject2, subject3)
//     console.log('Average '+ave);
//     console.log('Percentage' +per+'%');
// }

// function average(subject1, subject2, subject3){
//     var average = (subject1 + subject2 + subject3)/3
//      return average;

// }

// function percentage(subject1, subject2, subject3){
//     var percentage = ((subject1 + subject2 + subject3)*100)/300
//     return percentage
// }

// markSheet()

/* Task 5 You have learned the function indexOf. Code your own custom 
function that will perform the same functionality. You can code 
for single character as of now. */

// function findIndexOfString(string, char){
//     i =0;
//     var spiltString = string.split('');
//     // console.log(spiltString.length)
//     while(i < spiltString.length){

//         if(spiltString[i]==char){
//         // console.log(spiltString[i])
//         console.log(i);
//         break;
//         }         
//         i++;
//     }
    
// }
// var string ="welcome";

// var char ='l';
// findIndexOfString(string, char)


/* Task 6 Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long. */

// function stringWithoutVowels(string){
//     var i =0;
//     var spiltString = string.split('');
//     // console.log(spiltString.length)
//     var vowels =['a','e','i','o','u'];
//     document.write('Original string: '+string +'<br>');
//     document.write('String without vowels: ')
//     while(i < spiltString.length){

//         if(spiltString[i] != vowels[0] && spiltString[i] != vowels[1] && spiltString[i] != vowels[2] && spiltString[i] != vowels[3] && spiltString[i] != vowels[4]){
        
//             var withoutVowel =spiltString[i];
//             document.write(withoutVowel)        
//         }                
//         i++;       
//     }    
    
// }
// var string ="damsaz ali bughio";
// stringWithoutVowels(string)


/* Task 7 Write a function with switch statement to count the number of 
occurrences of any two vowels in succession in a line of text. 
For example, in the sentence “Pleases read this application and give me gratuity”
Such occurrences are ea, ea, ui. */

// This task was not performed 




/* Task 8 The distance between two cities (in km.) is input through the 
keyboard. Write four functions to convert and print this 
distance in meters, feet, inches and centimeters. */

// function distanceMeters(distanceKm){
//     var distanceInMeter = distanceKm * 1000;
//     console.log(distanceInMeter+ ' m')

// }
// function distanceFeet(distanceKm){
//     var distanceInFeet = distanceKm * 3280.84;
//     console.log(distanceInFeet + ' feet')
// }
// function distanceInches(){
//     var distanceInInches = distanceKm * 39370.08
//     console.log(distanceInInches + ' inches')
// }
// function distanceCentimeters(){
//     distanceInCm = distanceKm * 100000;
//     console.log(distanceInCm + ' cm')
// }
// var distanceKm= +prompt("Enter distance in Km");

// console.log(distanceKm + ' Km')
// distanceMeters(distanceKm)
// distanceFeet(distanceKm)
// distanceInches(distanceKm)
// distanceCentimeters(distanceKm)


/* Task 9 Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work 
for fractional part of an hour. */

// function overTimePay(hours){
//     var i =1;
//     var overTimePay = 12;
//     if( hours > 40){
//         var overTimeHours = hours-40;
//         do {
//             i++;
//             totalOverTimePay = overTimePay * i;           
//         } 
//         while(i < overTimeHours)
//         return totalOverTimePay;
//     }
// }
// var overTP =overTimePay(50);
// console.log(overTP + ' Rs');


/* Task 10 A cashier has currency notes of denominations 10, 50 and 
100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes 
of each denomination the cashier will have to give to the 
withdrawer.
 */

// function changeCash(amount){
//     i =0;
//     var note ;
//     var notes = ['100', '50', '10'];
//     var notesCounter = [];

//     while(i < amount){
//         if(amount >= notes[i]){
//             notesCounter[i] = amount/notes[i]
//             amount = amount%notes[i];
//             document.write(Math.floor(notesCounter[i])+  ' note of '+ notes[i] + '<br>')   
//         }

//         i++;
//     }

// }
// var  amount= 590;
// changeCash(amount)

