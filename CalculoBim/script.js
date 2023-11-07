function calcular() {

    // INSERIR ALUNO NA CARTEIRINHA
    //ano escolar =ane
    //aluno =aln
    //idade =idd
    let res1 = document.querySelector("p#aln")
    let res2 = document.querySelector("p#idd")
    let res3 = document.querySelector("p#ane")
    //RESETAR PARAGRAFOS RESPOSTA
    res1.innerHTML = "Aluno:"
    res2.innerHTML = "Idade:"
    res3.innerHTML = "Ano escolar:"
    //PEGAR INFOS 
    let infonome = document.querySelector("input#name") 
    let infoidade = document.querySelector("input#yold")
    // MAXIMO DE 14 CARACTERES POR LINHA NA CTR
    if (String(infonome.value).length > 24 ){
        alert("Numero de caracteres do nome muito grande, abreviar nome do meio!")
    }else{ res1.innerHTML += String(infonome.value)}

    //INSERIR IDADE ALUNO
    if (Number(infoidade.value) <= 6){
        alert("Idade incompatível!")
    }else{res2.innerHTML += Number(infoidade.value)}



  // CALCULO DE MEDIA BIMESTRAL

  let num1 = document.querySelector("input#note1");
  let num2 = document.querySelector("input#note2");
  let num3 = document.querySelector("input#note3");
  let num4 = document.querySelector("input#note4");
  let n1 = Number(num1.value);
  let n2 = Number(num2.value);
  let n3 = Number(num3.value);
  let n4 = Number(num4.value);
  if (n1 >= 0 && n1 <= 10) {
    if (n2 >= 0 && n2 <= 10) {
      if (n3 >= 0 && n3 <= 10) {
        if (n4 >= 0 && n4 <= 10) {
          let anoescolar = document.querySelector(
            "input[name=anoescolar]:checked"
          );
          if (anoescolar == null) {
            alert("Erro!");
          } else {
            let serie = Number(anoescolar.value);

            let re = document.querySelector("div#res");
            re.innerHTML = "";
            let media = 0;
            let total = 0;
            total += n1 + n2 + n3 + n4;
            if (media > 40) {
              alert("ERRO!");
            } else {
              media = total / 4;
              if (total == null) {
                alert("Erro!");
              } else {
                if (total >= 20 && serie < 3) {
                  re.innerHTML = `<p>A SUA MEDIA FOI: ${media}</p>`;
                  re.innerHTML += `<p>A SUA NOTA TOTAL FOI ${total}</p>`;
                  re.innerHTML += `<p>Parabéns!! Voce foi aprovado! Bem-vindo ao ${
                    serie + 1
                  }° ano do ensino medio!!!</p>`;
                  serie += 1
                } else if (total >= 20 && serie == 3) {
                  re.innerHTML = `<p>A SUA MEDIA FOI: ${media}</p>`;
                  re.innerHTML += `<p>A SUA NOTA TOTAL FOI ${total}</p>`;
                  re.innerHTML += `<p>Parabéns por ter completado o ensino médio!!</p>`;
                } else if (total < 20) {
                  re.innerHTML = `<p>A SUA MEDIA FOI: ${media}</p>`;
                  re.innerHTML += `<p>A SUA NOTA TOTAL FOI ${total}</p>`;
                  re.innerHTML += `<p>Voce foi reprovado! </p>`;
                }
                //ANO ESCOLAR
                res3.innerHTML += `${serie}° Ano do ensino médio`
              }
            }

          }
        } else {
          alert("Erro!");
        }
      } else {
        alert("Erro!");
      }
    } else {
      alert("Erro!");
    }
  } else {
    alert("Erro!");
  }
}