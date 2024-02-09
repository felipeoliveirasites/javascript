    let amigo = {nome: 'josé',
    sexo: 'M', 
    peso: 85.5,
    engordar(p = 0) {
        console.log('engordou')
        amigo.peso += p
    }
    }
    
    amigo.engordar()
    console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
    console.log("olá mundo!")