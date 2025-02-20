/// Prime Number

let n = 5;
// let count = 0;

// for(let i = 0; i<=n; i++){
//     if(n%i==0) count++
// }
// console.log(count == 2 ? `${n} is prime` : 'not prime');

///// Fibo

// const fibo = (n)=>{
//         if(n==0 || n==1) return n

//         return fibo(n-1) + fibo(n-2)
// }

// const fiboSeries = (n) => {
//         for (let i = 0; i < n; i++) {
//             console.log(fibo(i));

//         }
// };

// fiboSeries(n)

// const fibo2 = (n) => {
//     let a = 0, b = 1;
//     for (let i = 0; i < n; i++) {
//         console.log(a);
//         [a, b] = [b, a + b];
//     }
// };

// fibo2(5);

//////////  Insertion Sort

// let arr = [7, 4, 3, 5, 1, 9];

// for (let i = 1; i < arr.length; i++) {
//     let key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//         arr[j + 1] = arr[j];
//         j--;
//     }
//     arr[j + 1] = key;
// }

// console.log(arr);

// How It Works (Step-by-Step)
// ---Start with the second element (because a single element is already "sorted").
// ---Pick the element and compare it with the elements before it (from right to left).
// ---Shift larger elements to the right to make space.
// ---Place the picked element in the correct position.
// ---Repeat this process for all elements.

//////// Selection Sort

// let arr = [7, 4, 3, 5, 1, 9];

// for(let i = 0; i<arr.length-1; i++){
//     let minIdx = i;

//     for(let j = i+1; j<arr.length; j++){
//        if (arr[j]<arr[minIdx]) minIdx = j
//     }

//     [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
// }

// console.log(arr)

///// BUBBLE SORT

// let arr = [7, 4, 3, 5, 1, 9];

/// Cyclic sort

// let arr = [5, 4, 6, 3, 1, 2];

// let i = 0;
// while (i <= arr.length) {
//   let idx = arr[i] - 1;

//   if (arr[i] != arr[idx]) {
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   } else i++;
// }

// console.log(arr);

//// Binary Search

// let arr = [3,5,8,9,12,15,17,21,25]

// let tar = 21

// let left = 0, right = arr.length-1, mid = Math.floor((left+right-left/2))

// while(left<right){
    
// }

/// Find the occurance of a number in an array using hashing

// let arr = [2,1,4,1,2,2,3,1]
// let map = {}

// for(let num of arr){
//     map[num] = map[num]+1 || 1
// }
// console.log(map)



