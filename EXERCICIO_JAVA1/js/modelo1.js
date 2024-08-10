function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var txt = window.document.getElementById('oi')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minutos}`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = '/img/manha.png'
        document.body.style.background = '#84885e'
        txt.innerHTML = "BOM DIA!"

    } else if (hora >= 12 && hora < + 18) {
        //BOA TARDE
        img.src = '/img/tarde.png'
        document.body.style.background = '#ac8972'
        txt.innerHTML = "BOA TARDE!"

    } else {
        //BOA NOITE
        img.src = '/img/noite.png'
        document.body.style.background = '#181d20'
        txt.innerHTML = "BOA NOITE!"
    }


}