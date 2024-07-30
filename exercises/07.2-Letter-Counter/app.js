let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here
for (letter of par.toLowerCase()) {
    if (letter == ' ') continue;
    counts[letter] ? counts[letter] += 1 : counts[letter] = 1;
}

console.log(counts);