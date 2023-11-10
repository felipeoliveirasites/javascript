//alert('Olá!')
function verificar() {
    //window.alert("FUNCIONOU!")
    var data = new Date()
    var ano = data.getFullYear()
    var meuano = document.getElementById('numano')
    var res = document.querySelector('div#res')
    if (meuano.value.length == 0 || meuano.value > ano) {
      //(meuano.value.length == 0 || Number(meuano.value > ano)) 
        window.alert("Verifique os dados e tente novamente!")
    } else {
       var radsex = document.getElementsByName("radsex")
       var idade = ano - meuano.value
       res.innerHTML = `Idade calculada: ${idade} anos`
       var gênero = ``
       if (radsex[0].checked) {
        gênero = "Homem"
       } else if(radsex[1].checked) {
            gênero = "Mulher"
        }
      res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
      res.innerHTML.st
       }
    }