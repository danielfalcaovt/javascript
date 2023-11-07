
//NEW DATE HORARIO ATUAL
var agora = new Date()
//CONECTAR A FOTO NO HTML
let foto = document.querySelector("img#im")
//PEGAR HORARIO DO NEWDATE
hora = agora.getHours()

//CONECTANDO AS VARIAVEIS AO HTML
var res = document.querySelector("div#re")
var corpo = document.querySelector("body")
res.innerHTML = `Agora são: ${hora} Horas`
if (hora < 12) {
    corpo.style.backgroundColor = "yellow"
    foto.src = "/aula12ex/fotosex/Maha.jpg"
}else if (hora >= 17) {
    corpo.style.backgroundColor = "purple"
    foto.src = "/aula12ex/fotosex/noite.jpg"
}else if (hora >= 12) {
    corpo.style.backgroundColor = "#ffa500"
    foto.src = "/aula12ex/fotosex/tardinha.jpg"
}