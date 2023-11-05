function recursiva(n) {
    if (n == 1){
        return 1
    }else{
        return n * recursiva(n-1)
    }
}
console.log(recursiva(5))