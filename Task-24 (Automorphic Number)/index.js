let n = Number(prompt("Enter a number: "));
let temp = n;

let sq = n*n;

let count = 0;

while (n>0){
    count++;
    n = Math.floor(n/10);
}

let lastDigits = sq % Math.pow(10, count);

console.log(lastDigits == temp ? "Automorphic Number" : "Not Automorphic Number");