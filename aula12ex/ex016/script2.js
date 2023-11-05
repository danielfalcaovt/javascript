function calcular() {
    //PUXANDO NUMEROS DO USUARIO
            //NUMERO DO INICIO
    let inicio = document.querySelector("input#inicio")
            //NUMERO FINAL
    let final = document.querySelector("input#fim")
            //CONTAGEM A PASSO
    let passo = document.querySelector("input#contagem")

    //TRATAMENTO DE DADOS
    let n1 = Number(inicio.value)
    let np = Number(passo.value)
    let n2 = Number(final.value)
    if (np <= 0) {
        window.alert("digito passo impossivel, considerando digito 1")
        np = 1

    }
    // VARIAVEL DO RESULTADO:
    let re = document.querySelector("div#res")
    

    //ALERTA ERRO DE DADOS
    if (n1 ==0 || np == 0 || n2 == 0) {
        window.alert("ERRO!!!!!! faltam dados!")
    } else {
        //CONTAGEM BASICA
        re.innerHTML = "CONTANDO:"
        //ABRINDO VARIAVEL COMO CONTADOR
        let c = n1
        //SE O VALOR INICIO FOR MENOR DQ FINAL
        if (c < n2) {while (c <= n2) {
            res.innerHTML += `${c} `
            c += np
        } } else {
            while(c > n2) {
                res.innerHTML += `${c} `
                c -= np
            }

        }
        
    }
    
    



}   
