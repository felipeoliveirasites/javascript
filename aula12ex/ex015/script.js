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
       //res.innerHTML = `Idade calculada: ${idade} anos`
       var gênero = ``
       var img = document.createElement("img")
       var section = document.querySelector('section')
       img.setAttribute('id', 'foto')
       img.style.marginTop = '10px'
       if (radsex[0].checked) {
        gênero = "Homem"
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'imagens/foto-crianca-m.png')
        } else if (/*idade >= 10 && */idade < 40) {
          //Jovem
          img.setAttribute('src', 'imagens/foto-jovem-m.png')
        } else if ( idade < 65) {
          //Adulto
          img.setAttribute('src', 'imagens/foto-adulto-m.png')
        } else { 
          //Idoso
          img.setAttribute('src', 'imagens/foto-idoso-m.png')
        }
       } else if(radsex[1].checked) {
            gênero = "Mulher"
            if (idade >= 0 && idade < 10) {
              //Criança
              img.setAttribute('src', 'imagens/foto-crianca-f.png')
            } else if (/*idade >= 10 && */idade < 40) {
              //Jovem
              img.setAttribute('src', 'imagens/foto-jovem-f.png')
            } else if ( idade < 65) {
              //Adulto
              img.setAttribute('src', 'imagens/foto-adulto-f.png')
            } else { 
              //Idoso
              img.setAttribute('src', 'imagens/foto-idoso-f.png')
            }
        }
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img)
        section.style.background = "#e0a1a1"
       }
    }

    

    