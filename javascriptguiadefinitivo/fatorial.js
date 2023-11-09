function fatorial(n){
    product = 1
    while (n > 1){
        product *= n
        n--
    }
    return product

}
console.log(fatorial(5))

function fatorial2(n) {
    let i = 1
    let product = 1
    for (i =2; i<=n; i++){
        product *= i
    }
    return product
}
console.log(fatorial2(5))

