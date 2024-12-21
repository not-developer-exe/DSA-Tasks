let totalUnits = Number(prompt("Enter the total units of electricity consumed: "));

let bill = 0;

if (totalUnits>400){
    bill = (totalUnits - 400) * 13;
    totalUnits = 400; 
}

if (totalUnits>200 && totalUnits<=400){
    bill += (totalUnits - 200) * 8;
    totalUnits = 200;
}

if(totalUnits>100 && totalUnits<=200){
    bill += (totalUnits - 100) * 6;
    totalUnits = 100;
}

bill += totalUnits * 4.2;


console.log(`The total bill is ${bill}`);