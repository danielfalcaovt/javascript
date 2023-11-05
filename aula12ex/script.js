//NEW DATE HORARIO ATUAL
var agora = new Date()
//CONECTAR A FOTO NO HTML
var foto = document.querySelector("img#im")
//PEGAR HORARIO DO NEWDATE
hora = agora.getHours()

//CONECTANDO AS VARIAVEIS AO HTML
var res = document.querySelector("div#re")
var corpo = document.querySelector("body")
res.innerHTML = `Agora são: ${hora} Horas`
if (hora < 12) {
    corpo.style.backgroundColor = "yellow"
    foto.src = "/fotos-exemplo/Maha.jpg"
}else if (hora >= 17) {
    corpo.style.backgroundColor = "purple"
    foto.src = "/fotos-exemplo/noite.jpg"
}else if (hora >= 12) {
    corpo.style.backgroundColor = "#ffa500"
    foto.src = "/fotos-exemplo/tardinha.jpg"
}