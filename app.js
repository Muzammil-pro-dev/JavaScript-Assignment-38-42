//1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.
// function power(a, b){
//     return a ** b;
// }

// console.log(power(2, 8))

//2. Any year is entered through the keyboard. Write a function to
// determine whether the year is a leap year or not.
// function leapYear(x){
//     if (x % 4 === 0){
//         if (x % 100 !== 0){
//             console.log(`${x} is a Leap Year! `);
//         }
//         else if (x % 100 === 0){
//             if (x % 400 === 0){
//                 console.log(`${x} is a Leap Year! `);
//             }
//             else{
//                 console.log(`${x} is not a Leap Year! `);
//             }
//         }
//     }
//     else{
//         console.log(`${x} is not a Leap Year! `);
//     }
// }

// leapYear(2020);

//3. If the lengths of the sides of a triangle are denoted by a, b, and
// c, then area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions
// function areaOfTriangle(a, b, c){
//     var store = calculate(a, b, c);
//     var area = store * (store - a) * (store - b) * (store - c)
//     return area;
// }

// function calculate(x, y, z){
//     return (x + y + z)/2;
// }

// console.log(`Area of Triangle: ${Math.round(areaOfTriangle(5, 5, 2))}`);

//4. Write a function that receives marks received by a student in 3
// subjects and returns the average and percentage of these
// marks. there should be 3 functions one is the mainFunction
// and other are for average and percentage. Call those functions
// from mainFunction and display result in mainFunction
// function mainFunc(x, y, z){
//     var sum = x + y + z;
//     console.log(`Average: ${average(sum)}`);
//     console.log(`Percentage: ${percentage(sum)}%`)
// }

// function average(a){
//     return Math.round(a / 3);
// }

// function percentage(b){
//     return Math.round(b * 100 / 300);

// }

// mainFunc(80, 90, 85);


//5. You have learned the function indexOf. Code your own custom
// function that will perform the same functionality. You can code
// for single character as of now.

// function IndexOf(str, find){
//     for (var i = 0; i < str.length; i++){
//         if (str[i] == find){
//             console.log(`Index: ${i}`);
//             break;
//         }
//     }
// }
// IndexOf("Ibrahim", "h");


//6. Write a function to delete all vowels from a sentence. Assume
// that the sentence is not more than 25 characters long.
// let arr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
// function deleteVowels(str){
//     var newArr = str.split("");
//     for (var i=0; i<arr.length; i++){
//         for (var j=0; j<newArr.length; j++){
//             if (newArr[j] === arr[i]){
//                 delete newArr[j];
//             }
//         }
//     }
//     console.log(newArr.join(""));
// }

// deleteVowels("My name is Ibrahim Rehman");


//7. Write a function with switch statement to count the number of
// occurrences of any two vowels in succession in a line of text.
// For example, in the sentence
// var globalCount = 0;
// function switching(str){
//     str = str.toUpperCase();
//     for (var i = 0; i < str.length; i++){
//         switch (str[i]){
//             case "A":
//                 if (str[i+1] === "A" || str[i+1] === "E" || str[i+1] === "I" || str[i+1] === "O" || str[i+1] === "U"){
//                     globalCount++;
//                 }
//                 break;
//             case "E":
//                 if (str[i+1] === "A" || str[i+1] === "E" || str[i+1] === "I" || str[i+1] === "O" || str[i+1] === "U"){
//                     globalCount++;
//                 }
//                 break;
//             case "I":
//                 if (str[i+1] === "A" || str[i+1] === "E" || str[i+1] === "I" || str[i+1] === "O" || str[i+1] === "U"){
//                     globalCount++;
//                 }
//                 break;
//             case "O":
//                 if (str[i+1] === "A" || str[i+1] === "E" || str[i+1] === "I" || str[i+1] === "O" || str[i+1] === "U"){
//                     globalCount++;
//                 }
//                 break;
//             case "U":
//                 if (str[i+1] === "A" || str[i+1] === "E" || str[i+1] === "I" || str[i+1] === "O" || str[i+1] === "U"){
//                     globalCount++;
//                 }
//                 break;
//         }
//     }
//     console.log(`No of Occurences: ${globalCount}`)
// }
// switching("Pleases read this application and give me gratuity");

//8. The distance between two cities (in km.) is input through the
// keyboard. Write four functions to convert and print this
// distance in meters, feet, inches and centimeters.
// function metres(m){
//     console.log(`Metres: ${m * 1000}`);
// }
// function feet(f){
//     console.log(`Feet: ${f * 3280.84}`);
// }
// function inches(i){
//     console.log(`Inches: ${i * 39370.08}`);
// }
// function centimetres(c){
//     console.log(`Centimetres: ${c * 100000.0032}`);
// }
// metres(10);
// feet(10);
// inches(10);
// centimetres(10);

//9. Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour
// worked above 40 hours. Assume that employees do not work
// for fractional part of an hour.

// function overtime(hrs){
//    var int = Number(hrs);
//     if (int > 40){
//        var diff = int - 40;
//         console.log(`Overtime Pay: ${diff * 12} Rs.`)
//     }
// }

// overtime(55);

//10. A cashier has currency notes of denominations 10, 50 and
// 100. If the amount to be withdrawn is input through the
// keyboard in hundreds, find the total number of currency notes
// of each denomination the cashier will have to give to the
// withdrawer.
// var hund = 0;
// var fif = 0;
// var ten = 0;
// function withdraw(amount){
//     if (amount >= 100){
//         var hundred = 0
//         while (hundred < amount){
//             hund++;
//             hundred += 100;
//         }
//         if (hundred != amount){
//             hund -= 1;
//             hundred -= 100;
//             if (hundred === amount){
//                 alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//             }
//             else{
//                 var diff = amount - hundred;
//                 if (diff >= 50){
//                     fif++;
//                     hundred += 50;
//                     if (hundred === amount){
//                         alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//                     }
//                     else{
//                         while (hundred < amount){
//                             ten++;
//                             hundred += 10;
//                         }
//                         if (hundred === amount){
//                             alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//                         }
//                     }
//                 }
//                 else{
//                     while (hundred < amount){
//                         ten++;
//                         hundred += 10;
//                     }
//                     if (hundred === amount){
//                         alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//                     }
//                 }
//             }
//         }
//         else{
//             alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//         }
//     }
//     else if(amount < 100 && amount >= 10){
//         var tens = 0;
//         var diff3 = amount - tens;
//         if (diff3 >= 50){
//             fif++;
//             tens += 50;
//             if (tens === amount){
//                 alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//             }
//             else{
//                 while (tens < amount){
//                     ten++;
//                     tens += 10;
//                 }
//                 if (tens === amount){
//                     alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//                 }
//             }
//         }
//         else{
//             while (tens < amount){
//                 ten++;
//                 tens += 10;
//             }
//             if (tens === amount){
//                 alert(`You will have ${hund} hundred Note(s), ${fif} Fifty Note(s) and ${ten} Ten Note(s)`);
//             }
//         }
//     }
//     else{
//         alert("Amount should be at least greater than or equal to 10 Rupees! ")
//     }
// }

// var x = +prompt("Enter amount to withdraw: ");
// if (x % 10 === 0){
//     withdraw(x);
// }
// else{
//     alert("Amount entered should be divisible by 10!")
// }


