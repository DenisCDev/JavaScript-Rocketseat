// for in

let person ={
    name:'João Vitor',
    age: 18,
    weight: 72
} 

for(let property in person) {
    console.log(property)
    console.log(person[property])
}