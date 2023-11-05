function verificar(){
    // PEGANDO AS INFORMACOES DADAS PELA PESSOA :
    let anopessoa = document.querySelector("input#txtano")
    let sexopessoa = document.getElementsByName("radsex")
    // TRATAR OS DADOS DA PESSOA
    let anotratado = Number(anopessoa.value)
    let sexo = ""
    // SE O RADIO FOR MARCADO [] ESCOLHER O GENERO
    if (sexopessoa[0].checked) {
        sexo = "Masculino"
    }else if (sexopessoa[1].checked) {
        sexo = "Feminino"
    }

    // TRAZER A DATA DA MAQUINA E DIMINUIR PELA DATA DE NASC.
    let data = new Date()
    let year = data.getFullYear()
    /* SOMAR O ANO PELO ANO DE NASC. DO USER
E CRIAR UMA VARIAVEL
    */
let somaano = year - anotratado
// CONECTAR A DIV RESULTADO NO JAVASCRIPT
let imagem = document.querySelector("img#im")
let res = document.querySelector("div#res")
    if (sexo == "Feminino" && somaano <= 12)
    {im.src = "/aula12ex/verificador-idade/fotos-exemplo/menina.jpg"   
    res.innerHTML = `CRIANÇA DE ${somaano} ANOS MULHER`
    }else if (sexo =="Masculino" && somaano <= 12) 

    {res.innerHTML = `CRIANÇA DE ${somaano} ANO HOMEM`
    im.src ="/verificador-idade/fotos-exemplo/menino.jpg"
    // IDOSO VVVV
    } else if(sexo == "Masculino" && somaano >= 50) {
        res.innerHTML = `IDOSO DE ${somaano} ANOS HOMEM`
        im.src ="/verificador-idade/fotos-exemplo/velho.jpg"
    }else if (sexo =="Feminino" && somaano >= 50) {
        im.src = "/verificador-idade/fotos-exemplo/velha.jpg"
        res.innerHTML = `IDOSA DE ${somaano} ANOS MULHER`

    
      //ADULTOS E JOVENS  
    }else if (sexo =="Feminino" && somaano >= 18) {
        res.innerHTML = `ADULTA DE ${somaano} ANOS MULHER`
        im.src ="/verificador-idade/fotos-exemplo/mulher jovem.jpg"
}   else if(sexo == "Masculino" && somaano <= 18) {
    im.src ="/verificador-idade/fotos-exemplo/menino.jpg"
        res.innerHTML = `JOVEM DE ${somaano} ANOS HOMEM`
    }else if (sexo =="Feminino" && somaano <= 18) {
        im.src ="/verificador-idade/fotos-exemplo/menina.jpg"
        res.innerHTML = `JOVEM DE ${somaano} ANOS MULHER`
    }else if (sexo =="Masculino" && somaano >= 18) {
        im.src = "/verificador-idade/fotos-exemplo/homem jovem.jpg"
        res.innerHTML = `ADULTO DE ${somaano} ANOS HOMEM`
    }

if (anotratado > year || anotratado <= 0) {
    window.alert("Verifique a data de nascimento")
}


}

