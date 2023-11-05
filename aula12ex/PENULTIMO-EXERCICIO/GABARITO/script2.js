let num = document.querySelector("input#fnum")
let lista = document.querySelector("select#flista")
let res = document.querySelector("div#res")
let array = []




function isnumero(n){
    if(Number(n) >= 1 && Number(n) <=100)
    { 
        return true
        
}else{ return false}  
}

function inlista(n,l) {
    //NA LISTA SE ESTE NUMREO JA ESTIVER NO ARRAY
    if (l.indexOf(Number(n))!= -1) {
        return true
    }else {return false}}





function adicionar(){
    if(isnumero(num.value) && !inlista(num.value, array))
{
    let n = Number(num.value)
    array.push(n)
    opt = document.createElement("option")
    opt.text = `Valor ${n} inserido.`
    lista.appendChild(opt)


}else{alert("ALERTA NUMERO JA ENCONTRADO NA LISTA OU INVALIDO")}
num.value = ""
num.focus()
res.innerHTML ="Resultado:"
}

function send()
{
    if (array.length >0){    
        res.innerHTML = ""
    let quantidade = array.length
    res.innerHTML += `<p>A QUANTIDADE DE NUMEROS INFORMADOS FORAM ${ quantidade } NUMEROS</p>`

    let c = 0
    for (let pos in array) {
        c = array[pos]

    }
    res.innerHTML += `<p>O MAIOR NUMERO INFORMADO FOI O ${ c}</p>`
    
    let soma = 0
    for (let pos in array) {
        soma += array[pos]

    }
    res.innerHTML += `<p>SOMA DE TUDO = ${soma}</p>`
    let media = soma / array.length
    res.innerHTML += `<p>A MEDIA DOS NUMEROS SAO = ${media}</p>`
}else{
        alert("Nao podemos efetuar o calculo sem um numero pelo menos!")
    }
    let menor = array[0]
    for (let pos in array){
        if (array[pos] < menor ){
            menor = array[pos]
        }
    }
    res.innerHTML += `<p>MENOR VALOR ADICIONADO: ${menor}</p>`

}