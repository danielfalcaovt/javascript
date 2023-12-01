// O 2 DIGITO SO PODE SER NUMERO SE ESTIVER NO FINAL
let regex = /^[a-z].+[a-z|\d]*$/gi

let array = ["JACK",
    "J",
    "Jo",
    "Oceans11",
    "RegexGuru",
    "007",
    "9" ,
    "A1",
    "BadUs3rnam3",
    "Z97",
    "c57bT3",
    "AB1",
    "J%4",
    "1",
    "A"]
for (let pos in array) {
    console.log(array[pos].match(regex))
}
