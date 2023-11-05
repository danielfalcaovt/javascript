let amigo = {peso: 85.4 , engordar(n=0){
    this.peso += n
    console.log("engordou")
}}
amigo.engordar(10)
console.log(amigo.peso)