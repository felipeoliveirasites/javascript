const casa1 = {
    cor: "Amarelo",
    logadouro: "Rua brasil",
    numero: 20,
}

const casa2 = {...casa1, numero:30};

console.log(casa1)
console.log(casa2)

const lista1 = ['laranja','banana']
const lista2 = ['maça',...lista1,]
/*lista2.push('maça')*/

console.log(lista1)
console.log(lista2)
