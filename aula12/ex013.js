// condição multipla
var agora = new Date()
var diaSem = agora.getDay()
/* 
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sábado
*/
//console.log(diaSem)
/*if (diaSem == 0){
    console.log('Domingo')
} */

switch(diaSem) {
    case 0: 
        console.log('Domingo')
        
    case 1: 
        console.log('Segunda')
        
    case 2: 
        console.log('Terça')
        
    case 3:
        console.log('Quarta')
        
    case 4:
        console.log('Quinta')
        
    case 5:
        console.log('Sexta')
        
    case 6:
        console.log('Sábado')
        
    default:
        console.log('[ERRO] Dia invalido!')
        
}

//entre 0 e 8 use if
//se for dados pontuais (exatos) use o switch só funciona com números inteiros e caracteres (strings) mas limitada do que o if mas útil para situações pontuais escreve menos