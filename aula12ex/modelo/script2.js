function carregar() {
let agora = new Date()
let hora = agora.getHours()
let msg = document.querySelector("div#txt")
let im = document.querySelector("img#foto")
msg.innerText = `Agora sao ${hora} horas`
if (hora >= 0 && hora <= 12) {
    im.src = "/fotos-exemplo/Maha.jpg"
    document.body.style = "blue"
}else if (hora >= 12 && hora <= 18) {
    im.src = "/fotos-exemplo/tardinha.jpg"
    document.body.style.background ="#fd6115"
}else if (hora >= 18 && hora <= 23){
    document.body.style.background = "purple"
    im.src ="/fotos-exemplo/noite.jpg.jpg"
}
}
