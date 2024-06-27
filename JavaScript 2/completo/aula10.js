let num=11

let res=num%2

if(res==0) {
    console.log("Par")
}else{
    console.log("Impar")
}

let num2=10
res=(!(num2%2) ? "Par" /*Verdadeiro*/ : "Impar" /* Falso */) //operador ternário ?
console.log(res)

// Teste logico ? se verdadeiro : se falso
// 0 = False
// 1 = True

let num3=10
let num4=20
res2=(num3 > num4 ? "Verdadeiro" : "Falso")
console.log(res2)


//Banco de dados

let st="I"
res=(st=="A" ? "Ativo" : (st=="I" ? "Inativo" : "ERRO"))
console.log(res)




