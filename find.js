let numbers = [23, 543, 56, 23, 75, 865, 75, 44, 243, 24, 256, 21, 134, 545];

let products = [
    { id: 1, name: "Laptop", price: 145000 },
    { id: 1, name: "Mobile", price: 45000 },
    { id: 1, name: "Ipad", price: 110000 },
    { id: 1, name: "Tabplet", price: 45000 },
];

let two = numbers.find((num) => num % 2 === 0);
console.log(two);
let twoall = numbers.filter((num) => num % 2 === 0);
console.log(twoall);