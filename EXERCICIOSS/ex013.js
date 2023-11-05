let agora = new Date()
var diaSem = agora.getDay()

/*

0= DOMINGO
1= SEGUNDA
2= TERÇA
3= QUARTA
4= QUINTA
5= SEXTA
6= SABADO
*/
switch (diaSem){
    case 0:
        console.log("DOM")
        break
    case 1:
        console.log("SEG")
        break
    case 2:
        console.log("TER")
        break
    case 3:
        console.log("QUA")
        break
    case 4:
        console.log("QUI")
        break
    case 5:
        console.log("SEX")
        break
    case 6:
        console.log("SAB")
        break
    default:
        console.log("[ERRO DATA INVALIDA]")
        break
    }