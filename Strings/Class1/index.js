// let s = "aditya"
// let rev = ""

// for(let i = s.length-1; i>=0; i--){
//     rev = rev + s.charAt(i)
// }

// console.log(rev);

// let s = prompt('Enter a string: ')
// console.log("Original String: ",s);

// let ans = ""

// for(let i = 0; i<s.length; i++){
//     if( s.charCodeAt(i)>=65 && s.charCodeAt(i)<=96){
//         ans = ans + String.fromCharCode(s.charCodeAt(i) + 32)
//     }else if(s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122){
//         ans = ans + String.fromCharCode(s.charCodeAt(i) - 32)

//     }
// }
// console.log("Toggled String: ",ans);

// let s = prompt("Enter any string: ")
// let arr = new Array(26).fill(0)
// console.log (s);

// for(let i = 0; i<s.length; i++){
//     let ascii = s.charCodeAt(i)

//     arr[ascii - 97] = arr[ascii - 97] +1
// }

// for( let i = 0; i<arr.length; i++){
//     if(arr[i]>0){
//         console.log(String.fromCharCode(i+97)+": "+arr[i]);

//     }
// }

// let s = "anagram";
// let t = "nagaram";

// if (s.length !== t.length) {
//   console.log("Not an ANAGRAM");
// } else {
//   let arr1 = new Array(26).fill(0);
//   let arr2 = new Array(26).fill(0);

//   for (let i = 0; i < s.length; i++) {
//     arr1[s.charCodeAt(i) - 97]++;
//     arr2[t.charCodeAt(i) - 97]++;
//   }
// }

// let isAnagram = true;
// for (let i = 0; i < 26; i++) {
//   if (arr1[i] !== arr2[i]) {
//     isAnagram = false;
//   }
// }
// console.log(isAnagram);

////////////// palindrome

// let str = "vnjfn"

// const isPalindrome = () => {
//   for(let i=0; i<str.length/2; i++){
//     let n = str.length
//     if(str.charAt(i) !== str.charAt(n-1-i)){
//       return false
//     }

//   return true
// }
// }

// console.log(isPalindrome());

////// Shortest Path

// let path = "ENWES"
// let x = 0;
// let y = 0;

// const isShortPath = () => {
//   for( let i =0; i<path.length; i++){
//     let dir = path[i]

//     if(dir == "N"){
//       y++
//     }else if(dir == "S"){
//       y--
//     }else if(dir == "W"){
//       x--
//     }else{
//       x++
//     }
//   }

//   let y2 = y*y
//   let x2 = x*x

//   return Math.sqrt(y2+x2)

// }

// console.log(isShortPath());

//////////////////Printing a substring
// let str = "Aditya Singh"
// console.log(str.substring(0,4));

//////Lexicography
// let arr = ["apple", "banana", "mango", "aloo", "gobhi", "tomatoes"]
// let largest = arr[0]

// for(let i = 0; i<arr.length; i++){
//     if(largest.localeCompare(arr[i])<0){
//         largest = arr[i]
//     }
// }
// console.log(largest);

// //////// Test 1

// let str1 = "tony"
// let str2 = "tony"
// let str3 = new String("tony")

// if(str1==str3){
//     console.log(true);

// }

// let str = "kfbvdebvbDIJSBBCVHJ"
// let ans = ""

// for(let i = 0; i<str.length; i++){
//     if(str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
//         ans = ans + String.fromCharCode(str.charCodeAt(i) - 32)
//     }
//     else{
//         ans += str[i]
//     }
// }
// console.log(ans);

// let str = "aaaabbccdde"

// let ans = ""

// for(let i = 0; i<str.length; i++){

// }

/////////// Count the frequency of each Number (Array)

// let arr = [5,8,1,2,5,6,8,8,6,6,3,4,4,5]

// for(let i = 0; i<arr.length; i++){
//     let count = 1
//     if(arr[i] != -1){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i]==arr[j]){
//                 count++
//                 arr[j] = -1
//             }

//         }
//         console.log(`${arr[i]} is found ${count} times`);
//     }

// }

////// match the given sum

// let arr = [1,2,3,7,5,12]

// let sum = 12, count = 0;

// for(let i = 0; i<arr.length; i++){
//     let curSum = 0
//     for(let j = 1; j<arr.length; j++){
//         curSum += arr[j]
//         if(curSum == sum) count++
//     }
// }

// console.log(count);

////// SET and MAP

// let set = new Set()
// set.add(10)
// set.add(210)
// set.add(false)
// set.add(40)
// set.add(10)

// console.log(set.has(10));

// console.log(set);

// let arr = [10, 20, 30, 40, 50]
// let set = new Set()

// for(let i = 0; i<arr.length; i++){
//     set.add(arr[i])
// }

// console.log(set);

///// Only that elem should return who's occurance is single time only...

// let arr = [10, 12, 10, 12, 4, 1, 2, 4, 2]
// let set = new Set()

// for(let i = 0; i<arr.length; i++){
//    if(set.has(arr[i]))  set.delete(arr[i])
//     else set.add(arr[i])
// }

// console.log(set);

// let map = new Map()

// map.set('Aditya', 2)
// map.set('abc', 1)
// map.set('bcd', 3)
// map.set('cde', 4)
// map.set('Aditya', 120)

// console.log(map);

// let map = new Map()

// let arr = [1,2,3,4,5,6,7,14,15,65,35,56,464]

// for(let i = 0; i<arr.length; i++){
//     if(map.has(arr[i])){
//         map.set(arr[i],map.get(arr[i])+1)
//     }else{
//         map.set(arr[i], 1)
//     }
// }

// console.log(map);

///alternate method

// for(let i = 0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i]) || 0) +1)
// }
// console.log(map);

// let arr = [2,4,2,1,5,4,6,7,6,4,6]

// let map = new Map()

// for(let i = 0; i<arr.length; i++){
//     map.set(arr[i], (map.get(arr[i])||0)+1)
// }

// console.log("Elements Frequency: ",map);

// let unique = []

// for (let [key, value] of map){
//     if(value === 1){
//         unique.push(key)
//     }
// }

// console.log("Unique elems: ",unique);

//// Recursion

// let n = Number(prompt('Enter the num: '))

// const printNum = (n) =>{
//     if(n==0) return

//     return console.log(n) + printNum(n-1)

// }

// printNum(n)

//// Print from 1 from n

// let n = 5

// const printNum = (n) =>{
// if(n==0) return

//     return printNum(n-1) + console.log(n)

// }

// printNum(n)

//// Sum from 1 to n

// let n =5

// const sum =(n) => {
//     if(n==0) return 0

//     return n + sum(n-1)

// }
// console.log(sum(n));

//// Factorial of n

// let n =5

// const fact = (n) =>{
//     if (n==0) return 1

//     return n*fact(n-1)
// }

// console.log(fact(n));

//// Sum of digits (113 = 1+1+3)

// let n = 113

// const sumOfDigits = (n)=>{
//     if(n<10) return n

//     return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// console.log(sumOfDigits(n))

///// Revesre digits of num

// let n = 789
// let rev= 0

// const reverse = (n, rev) =>{
//     if(n==0) return rev

//     rev = rev*10 + n%10

//     return reverse(Math.floor(n/10), rev)

// }

// console.log(reverse(n, rev));

///// Fibonacci Sequence
// let n = 8

// const fibo = (n)=>{
//     if(n==0 || n==1) return n

//     return fibo(n-1) + fibo(n-2)
// }

// const fiboSeries = (n) => {
//     for (let i = 0; i < n; i++) {
//         console.log(fibo(i));

//     }
// };

// fiboSeries(n)

// let n = 10;

// const fibo = (n, a = 0, b = 1) => {
//   if (n == 0) return;

//   console.log(a);

//   fibo(n-1, b, a + b);
// };
// fibo(n)

////GCD

// const findGCD = (a,b)=>{
//     if(b==0) return a

//     return findGCD(b, a%b)
// }

// console.log(findGCD(13, 26));


// const factors = (n, i) => {
//     if (i > Math.floor(n / 2)) {
//         console.log(n); 
//         return; 
//     }

//     if (n % i === 0) console.log(i); 
//     factors(n, i + 1); 
// };
// factors(50, 1);


// const factors = (n, i = 1) => {
//     if (i > Math.sqrt(n)) return; 
    
//     if (n % i === 0) {
//         console.log(i); 
//         if (i == n / i) console.log(n / i);
//     }
    
//     factors(n, i+1)
// };
// factors(100);

/////// Factor kese nikalein acche se 


// let i = 1;
// let n =30

// for(i; i*i<n; i++){
//     if(n%i==0) console.log(i);  /// This loop prints the factor until i^2 is less than n eg. 6x6 < 30 . here the condition is false. 
    
// }

// if(i-n/i == 1) i--  /// When i*i condition gets false on the prev loop, here we reduce the value of i by 1 so that it does not get repeated when factors are printed. This will happen only when 'n' is not a perfect square and value of 'n' is even

// for( ; i>=1; i--){
//     if(n%i==0) console.log(n/i);  //// bcha kucha kaam ye bhai krdega 
    
// }



