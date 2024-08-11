let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
let newBools = theBools.map((item) => {
    if (item == 1) return 'wiki';
    if (item == 0) return 'woko';
});

console.log(newBools);

