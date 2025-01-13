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

let arr = [10, 12, 10, 12, 4, 1, 2, 4, 2]
let set = new Set()

for(let i = 0; i<arr.length; i++){
   if(set.has(arr[i]))  set.delete(arr[i])
    else set.add(arr[i])
}

console.log(set);
