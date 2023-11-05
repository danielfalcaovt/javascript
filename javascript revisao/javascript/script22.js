let object = {
    "deletar":5,
    "naodeletar":6

}

console.log(object)
delete object.deletar
delete object["naodeletar"]
console.log(object)