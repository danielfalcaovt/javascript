let num1 = prompt("NUMERO 1:")
let num2 = prompt("NUMERO 2:")
let op = prompt("sinal:")
let n1 = Number(num1)
let n2 = Number(num2)

if(op == "+"){
    alert(n1+n2)

}else if(op == "-"){
    alert(n1-n2)

}else if(op =="*"){
    alert(n1*n2)
}else if (op == "/"){
    alert(n1/n2)

}else{
    alert("ERRO")
}
