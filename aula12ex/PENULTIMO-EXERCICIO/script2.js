// PEGAR OS NUMEROS
let array = []
function verify() {

    let num1 = document.querySelector("input#nmb")
    //TRATO O NUMERO PARA NUMBER
    let num = Number(num1.value)
    //CRIO UMA ARRAY VAZIA

// SE O NUMERO FOR 0 OU MAIOR Q 100 ERRO
    if (num == 0 || num >100) {
        alert("NUMERO INVALIDO")
    }else{
        // PEGAR O SELECT
        let slct = document.querySelector("select#ress")
        // CRIAR UMA OPTION
        let opt = document.createElement("option")
        //COLOCAR OS NUMEROS QUE VAO A OPTION NA ARRAY
        array.push(num)
        let c = 0
        c = array.length
        alert(c)
// MAIOR NUMERO -----------------|
        for (let pos in array){
            let k = 0
            if (k < array[pos]){
                k = array[pos]
            }
        }
        // ADICIONAR DIGITO AO SELECT
        for (let pos in array) {
            opt.innerHTML = array[pos]
            slct.appendChild(opt)

        }
//PEGAR A ARRAY INTEIRA
for (let soma in array) {
//SEPARAR CADA DIGITO

}

//SOMAR CADA DIGITO
//COLOCAR NUMA VARIAVEL
    }

}
//TRATAR OS NUMEROS
//COLOCAR OS NUMEROS EM UMA VARIAVEL COMPOSTA

function send(){
    let re = document.querySelector("div#res")
    re.innerHTML = ""
    alert(array[0])
// CONFERIR QUANTOS NUMEROS CADASTRADOS
    let tamanho = array.length
    alert(tamanho)
    alert(array)

}

// CONFERIR QUAL A SOMA DE TODOS OS VALORES
// CONFERIR A MEDIA DOS VALORES