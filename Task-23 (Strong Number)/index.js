let num = Number(prompt("Enter a number: "));
let sum = 0;
let n = num;

while (num>0){
    rem = num%10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
        fact = fact * i;
    }
    sum = sum + fact;
    num = Math.floor(num / 10);
}

console.log(sum == n ? "Strong Number" : "Not Strong Number");