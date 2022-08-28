let numbers = [23, 35, 252, 54];
let sum = numbers.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

console.log(sum);