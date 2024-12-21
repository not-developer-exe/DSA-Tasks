///////// Bubble Sort 

let arr = [12, 10, 6, 14, 5, 13]

console.log(`Unsorted array: ${arr}`);


for( let i = 0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-1-i; j++){
        if (arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp


        }
    }
}
console.log(`Sorted array: ${arr}`);


/////////////// 20th Dec, 2024


