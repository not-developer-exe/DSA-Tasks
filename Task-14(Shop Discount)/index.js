let totalPrice = Number(prompt("Enter the total price of the items: "));

function discount(totalPrice, discount){
    let finalPrice = totalPrice - (totalPrice * discount / 100);
    return finalPrice;
}

if (totalPrice>=0 && totalPrice<=5000){
    console.log("No discount");

}else if (totalPrice>5000 && totalPrice<=7000){
    console.log(`The final price is ${discount(totalPrice, 5)}`);
}else if (totalPrice>7000 && totalPrice<=9000){
    console.log(`The final price is ${discount(totalPrice, 10)}`);
}else if (totalPrice>9000){
    console.log(`The final price is ${discount(totalPrice, 20)}`);
}