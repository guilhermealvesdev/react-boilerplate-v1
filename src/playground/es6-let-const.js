const multiplier = {
    numbers: [10, 100, 195],
    multiplyBy:3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply());