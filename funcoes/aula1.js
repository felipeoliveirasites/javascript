let total = 5;
let total2 = 2;

const sum2 = (a = 2,b = 2) => total2 = a + b

function sum(a = 1,b = 5) {
    total = a + b
}

const sum3 = (a,b) => a + b /* função pura */
console.log(sum3(10,50))

console.log("teste")
sum(2,1)
console.log(total)
sum2()
console.log(total2)