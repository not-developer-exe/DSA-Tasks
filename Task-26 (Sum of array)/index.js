// // let arr=[]
// // let n = Number(prompt("Enter the array size: "))

// // for(i=0; i<n; i++){
// //     arr[i]= Number(prompt('Enter the number: '))
// // }
// // console.log(arr);

// // for (let i = 0; i <= arr.length - 1; i++) {
// //   arr[i] = 2 * arr[i];
// // }

// // console.log(arr);


// let arr= []
// let n=5;
// let sum = 0;

// for(i=0; i<=n-1; i++){
//     arr[i]= Number(prompt("Enter the number"))
// }
// console.log(arr);

// for(i=0; i<n; i++){
//     sum += arr[i]
// }
// console.log(sum);

// let arr=[];
// let n=5 
// let tar; 

// for(i=0; i<n; i++){
//     arr[i]=Number(prompt('Enter number: '))
// }
// console.log(arr);

// tar = Number(prompt("Enter the number you want to search: "))

// for(i=0; i<n; i++){
//     if(arr[i]==tar){
//         console.log('Mil gya');
//         break;
//     }else if(i==(n-1) && arr[i]!=tar){
//         console.log("Chud gya");
//     }
// }


// let arr = [1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1]
// let zeroCount = 0
// let oneCount = 0

// for(i=0; i<arr.length; i++){
//     if(arr[i]=== 0){
//         zeroCount++
//     }
//     if(arr[i]=== 1){
//         oneCount++
//     }
// }

// console.log(zeroCount, oneCount);



// let arr=[10,3,-4,-12,5,-16,9,14,69,-72]
// let i =0;
// let j=0;

// while(i<arr.length){
//     if(arr[i]<0){
//         let temp = arr[i]
//         arr[i]=arr[j]
//         arr[j]=temp
//         j++
//     }
//     i++
// }
// console.log(arr);


///////

// let arr= [1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1]
// let maxChain=0;
// let count = 0;

// for(i=0; i<arr.length; i++){
//     if(arr[i]===1){
//         count++
//     }else{
//         maxChain = Math.max(maxChain, count)
//         count=0
//     }
// }
// maxChain=Math.max(maxChain, count)

// console.log(maxChain);




////// 14th of Dec
/////Permiter of triangle 

// let a = Number(prompt('Enter the first side of the triangle: '))
// let b = Number(prompt('Enter the second side of the triangle: '))
// let c = Number(prompt('Enter the third side of the triangle: '))
// console.log(a,b,c);


// console.log(`The perimeter of the triangle is ${a+b+c}`);



//////Simple Interest

// let p = Number(prompt('Enter the principle amount: '))
// let r = Number(prompt('Enter the Rate of Interest: '))
// let t = Number(prompt('Enter the Time Remaining: '))
// console.log(p,r,t);


// console.log(`Simple Interest for the given details is ${(p*r*t)/100}`);



///////Print counting from N to 1 (Reverse counting)

// let n = Number(prompt('Enter the value from where you want to start reverse counting: '))

// for(let i=n; i>=1; i--){
//     console.log(i);
    
// }


///// Factorial of a number

// let n= Number(prompt("Enter the number: "))
// let sum = 1;

// for(let i=n; i>=1; i--){
//     sum *= i
// }
// console.log(sum);

/////Prime Number

// let n = Number(prompt('Enter the number: '))

// isPrime = () =>{
//     if (n<=0){
//         console.log(`${n} is not prime`);
//         return;
//     }
//     if (n==2){
//         console.log(`${n} is a prime number`);
//         return;
//     }
//     if (n%2==0){
//         console.log(`${n} is not prime`);
//         return;
//     }

//     for(i=3; i<=Math.sqrt; i+=2){
//         if(n%i==0){
//             console.log(`${n} is not prime`);
//         }
//     }

//     console.log(`${n} is prime`);
    
// }

// isPrime()



////////// Triangle validity by length

// let a = Number(prompt('Enter a: '))
// let b = Number(prompt('Enter b: '))
// let c = Number(prompt('Enter c: '))

// if( (a+b)>c && (b+c)>a && (a+c)>b){
//     console.log('A, B and C can form a triangle');
// }
// else{
//     console.log('Bhakk bsdk');
    
// }


//////// Even from 1 to n

// let n = Number(prompt('Enter the number: '))

// for(i=1; i<=n; i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }


//////////////////

///Max of three

// let a = Number(prompt('Enter the number: '))
// let b = Number(prompt('Enter the number: '))
// let c = Number(prompt('Enter the number: '))

// isMax = () =>{
//     if(a>b && a>c){
//         console.log(`a is greatest`);
//         return
//     }
//     if(b>a && b>c){
//         console.log('B is greatest');
//         return
//     }
//     if(c>a && c>b){+
//         console.log('c is greatest');
//         return
//     }
// }
// isMax()
//////////////////////////////////////////////////////////////////////////////////////////////////////

/// Square Pattern

function square(){
    for(i=0; i<6; i++){
        for(j=0; j<6; j++){
            process.stdout.write("* ");
        }
        console.log();
    }
}

square()