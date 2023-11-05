function contar() {

// PEGANDO OS NUMEROS
    let inicio = document.querySelector("input#ini") 
    let passo = document.querySelector("input#pas")
    let fim = document.querySelector("input#fim")
    let re = document.querySelector("div#res")
    // TRATAR OS NUMEROS
    //ANTES

        // ALERTA PARA CASO NUMEROS ESTEJAM ZERADOS
        if (inicio.value.length ==0 || fim.value.length ==0) {
            window.alert("numeros zerados! tente novamente")
        }else if (passo.value.length == 0) {
            window.alert("passo zerado! contando como 1")
            passo =+ 1
            //TRATAR OS DADOS
            let ini = Number(inicio.value)
            let pas = Number(passo.value)
            let end = Number(fim.value)
        }else {

            let ini = Number(inicio.value)
            let pas = Number(passo.value)
            let end = Number(fim.value)
            re.innerHTML =""
            if(ini <= end) {
                let c = ini
            while (c <= end) {
                re.innerHTML += `${c} .`
                c += pas

            }}else if(ini > end) { 
                let c = ini  
                while (c > end)
                {
                    re.innerHTML += `${c} .`
                    c -= pas
}
        }

}
} 