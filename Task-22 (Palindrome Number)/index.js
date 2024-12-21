let num = Number(prompt("Enter a number: "));
let rev = 0; 
let n = num;

while (num > 0) {

    rev = rev * 10 + num%10;
    num = Math.floor(num / 10);
}
// console.log(rev);

console.log(n == rev ? "Palindrome" : "Not Palindrome");