///////// Task 1 - Ques1

// let name = prompt('Enter your name: ')
// let age = prompt('Enter your age: ')
// let clr = prompt('Enter your fav color: ')
// let city = prompt('Enter your city: ')

// console.log(`Hello ${name}! You are ${age} years old, your favorite color is ${clr}, and you live in ${city}`);

////////////Task 1 - Ques3

// let grade = Number(prompt('Enter Marks: '))

// gradeDefine = () => {
//     if(grade<0 || grade>100){
//         alert("Enter valid marks!!")
//         return
//     }
//     if(grade>=90 && grade<=100){
//         console.log(`Your Grade is A` );
//         return
//     }
//     if(grade>=75 && grade<90){
//         console.log(`Your Grade is B`);
//         return;
//     }
//     if(grade>=60 && grade<75){
//         console.log('Your Grade is C');
//         return
//     }
//     if(grade>=50 && grade<60){
//         console.log('Your Grade is D');
//         return
//     }
//     if(grade>=35 && grade<50){
//         console.log('Your Grade is E');
//         return
//     }
//     if(grade<=35 && grade>=0){
//         alert('Sorry! You failed the exam')
//     }

// }
// gradeDefine()

/////////////////////// Task 1 - Ques4

// isCalculator = () => {
//   let a = Number(prompt("Enter the first number: "));
//   let b = Number(prompt("Enter the second number: "));
//   let op = prompt("Enter the operation you want to perform: ");

//   switch (op) {
//     case "+":
//       console.log(a + b);
//       break;

//     case "-":
//       console.log(a - b);
//       break;

//     case "*":
//       console.log(a * b);
//       break;

//     case "/":
//       if (b === 0) {
//         console.log("Division is not allowed.");
//       } else {
//         console.log(a / b);
//         break;
//       }

//     case "%":
//       console.log(a % b);
//       break;

//     default: {
//       console.log("Enter valid credentials");
//     }
//   }
// };

// isCalculator();

/////////////   Task 1 - Ques5

// let n = Number(prompt("Enter any number: "));

// isDivisible = () => {
//   if (n % 3 === 0 && n % 5 === 0) {
//     console.log("FizzBuzz");
//     return;
//   }
//   if (n % 3 === 0) {
//     console.log("Fizz");
//     return;
//   }
//   if (n % 5 === 0) {
//     console.log("Buzz");
//     return;
//   }
// };

// isDivisible()

///////////////////////////////////////////////////////////////////////////////////////////////////////

//////// Task 2 - Ques1

// let n = Number(prompt("Enter the number: "));

// let prev = 0;
// let next = 1;

// const generateFibonacciSeries = (num) => {
//     if (num <= 0) {
//         console.log("Please enter a positive number.");
//         return;
//     }

//     console.log(prev);

//     for (let i = 1; i < num; i++) {
//         console.log(next);
//         let temp = prev + next;
//         prev = next;
//         next = temp;
//     }
// };

// generateFibonacciSeries(n);

////////////Task 2 - Ques2


// function gcd(a, b) {
//     while (b !== 0) {
//       [a, b] = [b, a % b];
//     }
//     return a;
//   }
  
//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }
  

//   const num1 = Number(prompt("Enter the first number: "), 10);
//   const num2 = Number(prompt("Enter the second number: "), 10);
  
//   if (!isNaN(num1) && !isNaN(num2)) {
//     console.log(`LCM of ${num1} and ${num2} is:`, lcm(num1, num2));
//   } else {
//     console.log("Please enter valid numbers.");
//   }
  
  

/////////// Task 2 - Ques3

// let a = Number(prompt('Enter num1: '))
// let b = Number(prompt('Enter num2: '))

// while(b!== 0){
//     let temp = b
//     b = a % b
//     a = temp
// }
// console.log(a);

///////////// Task 2 - Ques4

// let n = Number(prompt("Enter any number: "));

// while (n !== 1) {
//   if (n % 2 == 0) {
//     n = n / 2;
//     console.log(n);
//   } else {
//     n = 3 * n + 1;
//     console.log(n);
//   }
// }

//////////////// Task 2 - Ques5



// let op = Number(prompt("Enter your choice (1: Even/Odd, 2: Prime, 3: Factorial): "));
// let n = Number(prompt("Enter the number: "));

// const isEvenOdd = () => {
//   if (n % 2 === 0) {
//     console.log("The number is even.");
//   } else {
//     console.log("The number is odd.");
//   }
// };

// const isPrime = () => {
//   if (n <= 1) {
//     console.log(`${n} is not a prime number.`);
//     return;
//   }
//   if (n === 2) {
//     console.log(`${n} is a prime number.`);
//     return;
//   }
//   if (n % 2 === 0) {
//     console.log(`${n} is not a prime number.`);
//     return;
//   }

//   for (let i = 3; i <= Math.sqrt(n); i += 2) {
//     if (n % i === 0) {
//       console.log(`${n} is not a prime number.`);
//       return;
//     }
//   }
//   console.log(`${n} is a prime number.`);
// };

// const isFactorial = () => {
//   let factorial = 1;
//   for (let i = 1; i <= n; i++) {
//     factorial *= i;
//   }
//   console.log(`The factorial of ${n} is ${factorial}.`);
// };

// switch (op) {
//   case 1:
//     isEvenOdd();
//     break;
//   case 2:
//     isPrime();
//     break;
//   case 3:
//     isFactorial();
//     break;
//   default:
//     console.log("Invalid choice. Exiting.");
// }

////////////////// Task 3 - Ques1

// let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1];
// let maxCount = 0;
// let currentCount = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 1) {
//         currentCount++;
//         maxCount = Math.max(maxCount, currentCount);
//     } else {
//         currentCount = 0;
//     }
// }

// console.log(maxCount); 



//////// Task 3 - Ques2


// let str = 'ADITYA';

// let splitStr = str.split(''); 
// let charCount = {};

// splitStr.forEach(char => { 
//     console.log(char);
//     charCount[char]
//     console.log(charCount);
    
    
//     charCount[char] = (charCount[char] || 0) + 1; 
   
// });

// console.log(charCount); 


///////// Task 3 - Ques3

// let arr = [23, 54, 67, 12, 53, 14];

// if (arr.length < 3) {
//     console.log(Math.max(...arr)); 
// } else {
//     let max = arr[0];
//     let smax = -Infinity; 
//     let tmax = -Infinity;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             tmax = smax;
//             smax = max;
//             max = arr[i];
//         } else if (arr[i] > smax && arr[i] !== max) {
//             tmax = smax;
//             smax = arr[i];
//         } else if (arr[i] > tmax && arr[i] !== max && arr[i] !== smax) {
//             tmax = arr[i];
//         }
//     }

//     if (tmax === -Infinity) {
//         console.log(max); 
//     } else {
//         console.log(tmax); 
//     }
// }



//////////// Task 3 - Ques4


