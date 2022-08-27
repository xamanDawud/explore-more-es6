let numbers = [12, 44, 534, 235];
// let double = [];

// for (const number of numbers) {
//     let doubled = number * 2;
//     double.push(doubled);
// }

let doubled = numbers.map((num) => num * 2);
console.log(doubled);