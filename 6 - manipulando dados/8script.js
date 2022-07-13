// manipulando strings e arrays

// separe um texto que contem espaços, em um novo array onde cada texto é uma psoição de array. Depois disso, transforme o array em um texto e ondem eram espaços, coloque _

let phrase = "Me sinto cada dia melhor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())