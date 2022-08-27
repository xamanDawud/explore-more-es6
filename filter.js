let numbers = [23, 53, 63, 6345, 5];
let filter = numbers.filter((x) => x > 30);
console.log(filter);

let evenNumbers = numbers.filter((x) => x % 2 === 0);
console.log(evenNumbers);

let products = [
    { id: 1, name: "Laptop", price: 145000 },
    { id: 1, name: "Mobile", price: 45000 },
    { id: 1, name: "Ipad", price: 110000 },
    { id: 1, name: "Tabplet", price: 45000 },
];

let filterPrice = products.filter((x) => x.price > 50000);
console.log(filterPrice);