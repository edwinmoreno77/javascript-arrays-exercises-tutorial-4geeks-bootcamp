// Your code here

function matrixBuilder(number) {
    let result = [];

    for (let i = 0; i < number; i++) {
        let array = [];
        for (let j = 0; j < number; j++) {
            array.push(Math.floor(Math.random() * 2));
        }
        result.push(array);
    }
    return result;
}
// Do not change anything from this line down
console.log(matrixBuilder(5));