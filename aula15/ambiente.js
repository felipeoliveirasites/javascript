let num = [5,8,2,9,3]
num[5] = 1
num.push(7)
num.length //não é um metodo é um atributo por isto não tem parênteses : quanto elementos tem existem no array num: 7
num.sort() //metodo interno de todo vetor
console.log(num.length)
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0] }.`)

let pos = num.indexOf(8)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos} `)
}

/*for ( let pos = 0; pos < num.length;pos++ ) {
    console.log(`num[pos]`)
}*/
