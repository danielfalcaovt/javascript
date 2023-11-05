let array = [1,2,3,4]

function inlista(n,l){
    if(l.indexOf(Number(n)) != -1 ){
        console.log("ESSA PORRA ESTA NO ARRAY")
        return true
    } else{ return false}

}

let res = inlista(6,array)
console.log(res)