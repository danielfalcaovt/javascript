let array = [1,2,3,4,5]

let erroposition = undefined
for (let pos in array){
    if (array[pos] == 3){
    erroposition = array.indexOf(array[pos])
    }

}
console.log(erroposition)
console.log(array)
array.splice(array.indexOf(erroposition +1),1)
console.log(array)