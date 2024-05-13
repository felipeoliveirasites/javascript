/*

    Função: Trecho de código que só é executado quando é chamado/invocado

        Função Void (vazia)
        Função com Parâmetro(s)
        Função Arrow/ Arrow Function

*/

let valor = 30
function incremento() {    
console.log("Estou dentro da função")
/*função void(vazia) pois não esta me retornando nada  */
valor = valor + 30
}

incremento()
console.log(valor)

/* Função com 1 Parâmetro mas ainda é Void pois não retorna nada*/
function mostrarNome(nomeDaPessoa) {
    console.log(nomeDaPessoa)
    
}

mostrarNome("JOÃO")
mostrarNome("FELIPE")

/* Função com 2 Parâmetro mas ainda é Void pois não retorna nada*/
function soma(numero1, numero2){
    const somaDosNumeros = numero1 + numero2
    console.log(somaDosNumeros)
    //console.log(numero1 + numero2)
} 

soma(2, 5)
soma(10, 7)
soma(8,8)

function soma2(numero1, numero2){
    const somaDosNumeros = numero1 + numero2
    return somaDosNumeros
} 

const meusNumeros = soma2(4,6)
const meusNumeros2 = soma2(40,56)
console.log(meusNumeros)
console.log(meusNumeros2)

const mult = (numero1, numero2) => {
    const multiplicacao = numero1 * numero2
    return multiplicacao
}

const multiplicacao = mult(2,5)
console.log(multiplicacao)

const mult2 = (a,b) => {
    const resultado = a * b
    return resultado
}

const result = mult2(80,80)
console.log(mult2(80,80))
console.log(result)

const divisao = (a,b) => a/b
const resultadoDaDivisao = divisao(50,2)
console.log(resultadoDaDivisao)

// Expressão de Função
const minhaF = function(){
    consolo.log("alguma coisa")
} 

// Declaração de Função
function minhaf() {
    consolo.log("Alguma coisa!")
}

const funcao = () => "Uma expressão de função"
console.log(funcao())

const thisGlobal = () => {
    console.log(this)
}

thisGlobal()

