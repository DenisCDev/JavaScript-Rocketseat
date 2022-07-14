/* 
    Function() constructor

    - expressão new
    - criar um novo objeto
    - this keyword
*/

function Person() {
    this.name = name
    this.coding = function(){
        return this.name + "está codando"
    }
}

const denis = new Person("Denis")
const caio = new Person("Caio")
console.log(denis.coding)
console.log(caio.coding)