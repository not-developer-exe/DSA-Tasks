const prompt = require("prompt-sync")({ sigint: true}); 

let n = Number(prompt("Eter num: "))
for(let i=1; i<=n; i++){
    for(let j=1; j<=2*n-1; j++){
        if(i==j || i+j == 2*n){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
        
    }
    console.log()
}