//notação literal
const object = {}
console.log(object)

const object0 = {
    title: "Clean Code"
} 
console.log(object0)

//notação literal com variável no indice
const title = "title"
const book2 = {
    [title]: "Clean Code"
}
console.log(book2)

book2 == object0;

//função construtura
const object2 = new Object()
console.log(object2)

//Método create da Object API - Object.create(null)
const object3 = Object.create(null)
console.log(object3)

// com váriavel no valor do indice
const title0 = "Clean Code0"
const book = {
    title0: title0
} 
console.log(book)

//Short Syntax
const title1 = "Clean Code1"
const book3 = {
    title1
}
console.log(book3)

//regras das keys
//1 - é permitido usar palavas reservadas
//2 - permitido iniciar com números mas no final vai ser string ou Symbol
//3 - palavras compostas
const title4 = "Clean Code1"
const book5 = {
    title4,
    if: 'asas',
    10: ['45'],
    'number-of-pages': 300
}
console.log(book5)

//A referência da posição em memória onde está alocado
//2 objetos nunca serão iguais mesmo se o conteúdo(propriedades) forem iguais
//Object API - Métodos: Object.keys(obj), Object.values(obj), Object.entries(obj), Object.assign(), Object.defineProperty(), Object.freeze(obj) e Objectc.seal(obj)

const obj = {a: 1, b: 2};
const copia = Object.assign({},obj)
console.log(copia)

const obj2 = {a:1}
const copia2 = Object.assign

const o1 = {a:1}
const o2 = {b:2}
const o3 = {b:3}

//sem efeito colateral pois primeiro esta vazio onde será o target
const ores = Object.assign({},o1, o2, o3)
console.log(ores,o1)

const arrayDeEntrada = [
['abc', 2],
['def', 4]
]

const objebtries = Object.fromEntries(arrayDeEntrada)
console.log(objebtries)
console.log(arrayDeEntrada)

const objetoDeEntrada = 
   {abc: 2,
    def: 4
}
    
    
    const arrayentries = Object.entries(objetoDeEntrada)
    console.log(objetoDeEntrada)
    console.log(arrayentries)

    const obj4 = {100:'a', 2: 'b', 7: 'c' }
    const keys = Object.keys(obj4)
    const values = Object.values(obj4)

    console.log(keys)
    console.log(values)
