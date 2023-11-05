// ABRIR UM ARRAY VAZIO
let array = []
// ABRIR CONTADOR EM 0
let count = 0

// CONTADOR ATE 10
while (count < 10) {
// RANDOMIZAR NUMERO ATE 30000
let r = Math.round(Math.random()* 30000) 
array.push(Math.PI*r)
    count++
}

console.log(array)