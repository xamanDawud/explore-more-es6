let numbers = [34, 54, 25].map((x) => x * 2);
console.log(numbers);

let friends = ["mumu", "salman", "Isra", "Khairul"];
let frFirstLetter = friends.map((x) => x[0]);
console.log(frFirstLetter);

let bondu = ["mohoi", "paroi", "tanoi", "isroi Choudhury"];
let bonduLength = bondu.map((x) => x.length);
console.log(bonduLength);

let products = [
    { id: 1, name: "Laptop", price: 145000 },
    { id: 1, name: "Mobile", price: 45000 },
    { id: 1, name: "Ipad", price: 110000 },
    { id: 1, name: "Tabplet", price: 45000 },
];

let productName = products.map((x) => x.price);
console.log(productName);