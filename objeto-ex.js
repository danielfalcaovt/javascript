let nome = {amigo:`jose`,
sexo: `masculino`,
 peso: 85.4,
engordar(p = 0){
    console.log("engordou")
    this.peso += p
},
emagreceu(p = 0) {
    console.log("emagreceu")
    this.peso -= p
}}
nome.emagreceu(2)
console.log(`${nome.amigo} pesa ${nome.peso} kg`)