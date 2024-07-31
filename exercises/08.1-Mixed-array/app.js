let mix = [42, true, "towel", [2, 1], 'hello', 34.4, { "name": "juan" }];

// Your code here
let arr = [];
for (data of mix) arr.push(typeof data);
console.log(arr);
