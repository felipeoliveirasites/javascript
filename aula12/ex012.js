//condição aninhada
var agora = new Date() // esta rodando no servidor é a hora do servidor se estiver rodando no cliente é a hora do cliente
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 && hora >= 6) {
    console.log('Bom Dia!')
} else if (hora <=18 && hora > 6) {
    console.log('Boa Tarde!')
} else if (hora < 24 && hora > 6) {
    console.log('Boa Noite!')
} else {
    console.log('Boa Madrugada!')
}

var hora2 = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora2 < 6) { 
console.log('Boa Madrugada!')
} else if (hora2 < 12){
    console.log('Bom Dia!')
} else if (hora2 <=18) {
    console.log('Boa Tarde!')
} else if (hora2< 24) {
    console.log('Boa Noite!')
} 