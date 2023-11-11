let palindrome = "natan"
let normal = []
let reversed = []


for (let pos in palindrome){
    normal.unshift(palindrome[pos])

}
for (let pos in palindrome){
    reversed.push(palindrome[pos])
}
let resultado = undefined
for (let pos in normal) {
    for (let ps in reversed){
        if (normal[pos] == reversed[pos]){
            resultado = true            
        }else{
            resultado = false
        }
    }
}
console.log(resultado)
console.log(normal)
console.log(reversed)