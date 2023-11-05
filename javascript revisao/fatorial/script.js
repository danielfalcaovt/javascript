let result = 0

function fatorial (n) {
    if (n >= 1){
        // numero fatorial
        let fat = 1
        // numero que recebera o resultado
        let res = 1
            for (let pos = n; fat <= pos; pos--){
                res *= pos
            }
      return res
        }
    else{
        return "Erro1"
    }

}
console.log(fatorial(7))



