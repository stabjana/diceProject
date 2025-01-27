const testValues =
    new Array(19).fill(2).map((value, ind) => [value + ind]);

console.log(testValues);
console.log(new Array(19));
console.log(new Array(19).fill(2));
console.log(new Array(19).fill(2).map((value, ind) => value + ind));

/* const a = [];
for (let i = 2; i <= 20; i++) {
    a.push(i)
}
console.log(a); */