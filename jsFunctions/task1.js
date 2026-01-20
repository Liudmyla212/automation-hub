// function declaration

function calculateTotalCost (price, quantity){
    let totalCost = price * quantity;
    return totalCost
}

console.log(calculateTotalCost (20,4));

// function expression
const calculateTotalCost1 = function (price, quantity)
{
    let totalCost = price * quantity;
    return totalCost
}
console.log(calculateTotalCost1 (20,4));


//arrow function
const calculateTotalCost2 =  (price, quantity) => {
    return price * quantity
}
console.log(calculateTotalCost2 (20,4));