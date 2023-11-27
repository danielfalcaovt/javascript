function palindrome(str) {
    let reversed = []
  let normal = []
  let antidot = /[\.\,\\\/\-\_()\;\:\|\<\>\'\"\+\!@#$%^&*_\s]/gi
  let a = []
  for (let pos in str){
      if (antidot.test(str[pos]) == true){
    
    }else{
      normal.unshift(str[pos])
      }
  }
  for (let pos in str){
      if (antidot.test(str[pos]) == true){
    }else{
      reversed.push(str[pos])
  }}

  let resultado = ""
  let str1 = ""
  let str2 = ""
  for (let pos in normal) {
  str1+= normal[pos]

}
  for(let pos in reversed){
  str2+= reversed[pos]     
  
}
str1 = str1.toLowerCase()
str2 = str2.toLowerCase()
str2 = str2.replace(/\s/g,"")
str1 = str1.replace(/\s/g,"")
str1 = str1.replace(antidot,"")
str2 = str2.replace(antidot,"")
    if(str1==str2){
        resultado = true
    }else{
        resultado = false
    }
      
   return resultado
  }
  
 console.log(palindrome("0_0 (: /-\ :) 0-0"))