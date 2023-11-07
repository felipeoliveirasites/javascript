//alert('Olá!')
function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 8
    var minuto = data.getMinutes()
    var segundos = data.getSeconds()
    msg.innerHTML = `<p id="agora">Agora são ${hora} horas <br>e ${minuto} minutos</p>` 
    if (hora >= 6 && hora < 12) {
        //BOM DIA!
        img.src = "imagens/fotomanha.png"
        document.body.style.background = "#fed69b"
        msg.innerHTML += `<p id="Bom_dia">Bom Dia!</p>`
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = "imagens/fototarde.png"
        document.body.style.background = "#faaf5c"
        msg.innerHTML += `<p id="Bom_dia">Boa Tarde!</p>`
    } else if (hora > 18 && hora < 24) {
        //BOA NOITE
        img.src = "imagens/fotonoite.png"
        document.body.style.background = "#100f31"
        msg.innerHTML += `<p id="Bom_dia">Boa Noite!</p>`
    } else if (hora == 24 || hora < 6 && hora != "") {
        //BOA MADRUGADA
        img.src = "imagens/fotonoite.png"
        msg.innerHTML += `<p id="Bom_dia">Boa Madrugada!</p>`
    } else { 
        msg.innerHTML = '[ERRO] favor verificar dados informados'
       // img.src = 
    }
}

