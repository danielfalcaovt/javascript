function calcular() {
    let tab = document.querySelector("select#seltab")
    let num = document.querySelector("input#v1")
    let num2 = document.querySelector("input#v2")
    let re = document.querySelector("div#res")
    if (num.value.length == 0 && num2.value.length ==0) {
            window.alert("ERRO")

    }else {
        let n1 = Number(num.value)
        let n2 = Number(num2.value)
        let c = 1
        
        tab.innerHTML=""
        re.innerHTML = ""
        re.innerHTML = `${n1*n2}`
        while(c <=10) {
            let item = document.createElement('option')
            item.text = `${c} x ${n1} = ${c*n1}`
            item.value =`${c}`
            tab.appendChild(item)
            c++

        }
        //item.text = `${c*n1}`

    }
    
    
}